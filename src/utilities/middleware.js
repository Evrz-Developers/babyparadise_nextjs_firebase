import { NextResponse } from "next/server";

export async function middleware(request) {
  const user = request.cookies.get("user")?.value;
  
  // If trying to access dashboard
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!user) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    try {
      const userData = JSON.parse(user);
      if (userData.role !== "admin") {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"]
}; 