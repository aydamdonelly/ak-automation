import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "kahirov.de";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  // Skip redirect in development
  if (host.startsWith("localhost") || host.startsWith("127.0.0.1")) {
    return NextResponse.next();
  }

  // Redirect vercel.app and any non-canonical hosts to kahirov.de
  if (host !== CANONICAL_HOST && host !== `www.${CANONICAL_HOST}`) {
    const url = new URL(request.url);
    url.host = CANONICAL_HOST;
    url.protocol = "https";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)",
};
