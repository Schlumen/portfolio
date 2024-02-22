import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";
import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./utils/analytics";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    try {
      analytics.track("pageview", {
        page: "/",
        country: req.geo?.country,
      });
    } catch (error) {
      // fail silently
      console.error(error);
    }
  }

  if (req.nextUrl.pathname === "/Lumen_CV.pdf") {
    try {
      analytics.track("cvdownload", {
        page: "/",
        country: req.geo?.country,
      });
    } catch (error) {
      // fail silently
      console.error(error);
    }
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.match(/((?!api|static|.*\\..*|_next).*)/)) {
    return i18nRouter(req, i18nConfig);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!api|static|.*\\..*|_next).*)", "/Lumen_CV.pdf"],
};
