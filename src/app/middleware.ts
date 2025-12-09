import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

const publicRoutes = [];
const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/login";

export function middleware(request: NextRequest) {
  console.log("funcionou!");

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
