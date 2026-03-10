#!/bin/bash
# =============================================
# AK Automation — OpenClaw Gateway VPS Deployment
# Run this from your Mac after provisioning a Hetzner VPS
# =============================================
set -euo pipefail

# --- Configuration (edit these) ---
VPS_IP="${VPS_IP:?Set VPS_IP environment variable}"
VPS_USER="${VPS_USER:-root}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/ak-ssh-key_rsa.prv}"
OPENCLAW_PORT="${OPENCLAW_PORT:-18789}"
GATEWAY_TOKEN="${GATEWAY_TOKEN:?Set GATEWAY_TOKEN environment variable}"
ANTHROPIC_API_KEY="${ANTHROPIC_API_KEY:?Set ANTHROPIC_API_KEY environment variable}"

echo "=== AK Automation — VPS Gateway Setup ==="
echo "Target: $VPS_USER@$VPS_IP"
echo "Port: $OPENCLAW_PORT"
echo ""

# --- Step 1: Update system + install Node.js 22 ---
echo "[1/6] Installing Node.js 22 on VPS..."
ssh -i "$SSH_KEY" "$VPS_USER@$VPS_IP" bash <<'REMOTE_SETUP'
set -euo pipefail
apt-get update -qq
apt-get install -y -qq curl gnupg2 ca-certificates

# Install Node.js 22 via NodeSource
if ! command -v node &>/dev/null || [[ "$(node -v)" != v22* ]]; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y -qq nodejs
fi

echo "Node.js: $(node -v)"
echo "npm: $(npm -v)"
REMOTE_SETUP

# --- Step 2: Install OpenClaw ---
echo "[2/6] Installing OpenClaw..."
ssh -i "$SSH_KEY" "$VPS_USER@$VPS_IP" bash <<'REMOTE_INSTALL'
set -euo pipefail
npm install -g openclaw
echo "OpenClaw: $(openclaw --version 2>/dev/null || echo 'installed')"
REMOTE_INSTALL

# --- Step 3: Create OpenClaw config ---
echo "[3/6] Configuring OpenClaw gateway..."
ssh -i "$SSH_KEY" "$VPS_USER@$VPS_IP" bash -s -- "$OPENCLAW_PORT" "$GATEWAY_TOKEN" "$ANTHROPIC_API_KEY" <<'REMOTE_CONFIG'
set -euo pipefail
PORT="$1"
TOKEN="$2"
API_KEY="$3"

mkdir -p /root/.openclaw/workspace/memory

cat > /root/.openclaw/openclaw.json <<EOF
{
  "agent": {
    "name": "main",
    "model": {
      "primary": "anthropic/claude-haiku-4-5",
      "fallback": ["anthropic/claude-sonnet-4-6"]
    },
    "identity": "Jarvis"
  },
  "gateway": {
    "port": $PORT,
    "mode": "remote",
    "auth": {
      "mode": "token",
      "token": "$TOKEN"
    }
  },
  "providers": {
    "anthropic": {
      "apiKey": "$API_KEY"
    }
  },
  "channels": {
    "whatsapp": {
      "enabled": true,
      "dmPolicy": "allowlist",
      "allowlist": ["+4917634309888"]
    }
  },
  "heartbeat": {
    "enabled": true,
    "intervalMinutes": 30,
    "activeHours": {"start": "08:00", "end": "01:00"},
    "timezone": "Europe/Berlin",
    "target": "whatsapp"
  },
  "cron": {
    "enabled": true,
    "maxConcurrent": 2
  }
}
EOF

echo "Config written to /root/.openclaw/openclaw.json"
REMOTE_CONFIG

# --- Step 4: Copy workspace files ---
echo "[4/6] Copying workspace files..."
scp -i "$SSH_KEY" -r "$HOME/.openclaw/workspace/"* "$VPS_USER@$VPS_IP:/root/.openclaw/workspace/"
echo "Workspace synced."

# --- Step 5: Create systemd service ---
echo "[5/6] Creating systemd service..."
ssh -i "$SSH_KEY" "$VPS_USER@$VPS_IP" bash -s -- "$OPENCLAW_PORT" <<'REMOTE_SERVICE'
set -euo pipefail
PORT="$1"

cat > /etc/systemd/system/openclaw-gateway.service <<EOF
[Unit]
Description=OpenClaw Gateway
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/root/.openclaw
ExecStart=$(which openclaw) gateway --port $PORT
Restart=always
RestartSec=5
Environment=NODE_ENV=production
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable openclaw-gateway
systemctl start openclaw-gateway
echo "Service started. Status:"
systemctl status openclaw-gateway --no-pager || true
REMOTE_SERVICE

# --- Step 6: Verify ---
echo "[6/6] Verifying gateway..."
sleep 3
ssh -i "$SSH_KEY" "$VPS_USER@$VPS_IP" "curl -sf http://localhost:$OPENCLAW_PORT/health || echo 'Health check failed — check logs with: journalctl -u openclaw-gateway -f'"

echo ""
echo "=== Deployment complete ==="
echo "Gateway: http://$VPS_IP:$OPENCLAW_PORT"
echo ""
echo "Next steps:"
echo "  1. Pair Mac as node: openclaw node pair --gateway http://$VPS_IP:$OPENCLAW_PORT --token \$GATEWAY_TOKEN"
echo "  2. Set up firewall: ufw allow 22/tcp && ufw allow $OPENCLAW_PORT/tcp && ufw enable"
echo "  3. Set up HTTPS: use Caddy or nginx reverse proxy with Let's Encrypt"
echo "  4. Update local start-gateway.sh to point to VPS instead of local"
