import { ProxyConfig, NextRequest, NextResponse } from "next/server";

const publicRoutes = [
  { path: "/login", whenAuthenticated: "redirect" },
  { path: "/login/new-password", whenAuthenticated: "redirect" },
  { path: "/login/new-password", whenAuthenticated: "redirect" },
] as const;
const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/login";

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find((route) => route.path === path);
  const authToken = request.cookies.get("token");

  console.log(authToken);

  if (!authToken && publicRoute) {
    return NextResponse.next();
  }

  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && publicRoute?.whenAuthenticated === "redirect") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/";
    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && !publicRoute) {
    //Checar JWT se esta expirado.
    //Se sim remove o cookie e redireciona para login
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config: ProxyConfig = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
