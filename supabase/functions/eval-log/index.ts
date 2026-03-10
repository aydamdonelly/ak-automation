// Eval Log — logs agent task runs to eval_runs table
// Called by Claude Code hooks, OpenClaw, or n8n workflows

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  try {
    const body = await req.json();

    const { agent, model, task_id, status } = body;
    if (!agent || !model || !task_id || !status) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: agent, model, task_id, status",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const validStatuses = ["success", "partial", "failed", "blocked"];
    if (!validStatuses.includes(status)) {
      return new Response(
        JSON.stringify({ error: `status must be one of: ${validStatuses.join(", ")}` }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const validModels = ["opus-4-6", "sonnet-4-6", "haiku-4-5"];
    if (!validModels.includes(model)) {
      return new Response(
        JSON.stringify({ error: `model must be one of: ${validModels.join(", ")}` }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const validAgents = ["claude-code", "jarvis-operator", "jarvis-patch", "jarvis-research", "jarvis-kpi"];
    if (!validAgents.includes(agent)) {
      return new Response(
        JSON.stringify({ error: `agent must be one of: ${validAgents.join(", ")}` }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { data, error } = await supabase.from("eval_runs").insert({
      task_id,
      agent,
      model,
      skill: body.skill ?? null,
      status,
      cost_usd: body.cost_usd ?? null,
      duration_ms: body.duration_ms ?? null,
      human_corrections: body.human_corrections ?? 0,
      tool_failures: body.tool_failures ?? 0,
      rework: body.rework ?? false,
      error_class: body.error_class ?? null,
      notes: body.notes ?? null,
    }).select().single();

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true, id: data.id }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Parse error", details: String(err) }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
});
