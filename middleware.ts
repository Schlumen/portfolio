import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const API_URL = process.env.API_URL!;
  const path = req.nextUrl.pathname;
  const auth = process.env.API_SECRET!;
  const country = req.geo?.country;

  if (path === "/") {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth,
      },
      body: JSON.stringify({
        namespace: "pageview",
        event: {
          page: "/",
          country,
        },
      }),
    });
  }

  if (path === "/Lumen_CV.pdf") {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth,
      },
      body: JSON.stringify({
        namespace: "cvdownload",
        event: {
          page: "/",
          country,
        },
      }),
    });
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
