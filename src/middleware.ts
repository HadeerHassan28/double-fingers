import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Root '/' visit: default strictly to Arabic ('ar') unless user explicitly chose 'en'
  if (pathname === "/") {
    const savedLocale = request.cookies.get("NEXT_LOCALE")?.value;
    const targetLocale = savedLocale === "en" ? "en" : "ar";
    return NextResponse.redirect(new URL(`/${targetLocale}`, request.url));
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
