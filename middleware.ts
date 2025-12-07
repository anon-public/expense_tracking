import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
    const isProtectedRoute = createRouteMatcher([
      '/dashboard(.*)',
      '/admin(.*)',
    ]);

    export default clerkMiddleware((auth, req) => {
      if (isProtectedRoute(req)) {
      }
    });

    export const config = {
      matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
    };