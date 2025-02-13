import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/subscriptions"]);

const isSignUpRoute = createRouteMatcher(["/sign-in(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  const { userId } = await auth();
  const { origin } = request.nextUrl;

  if (!isPublicRoute(request) && !userId) {
    await auth.protect();
  }

  if (isSignUpRoute(request) && userId) {
    return NextResponse.redirect(new URL ("/subscriptions", origin));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
