import { auth, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhooks(.*)'
]);

const isIgnored = createRouteMatcher([
  '/next',
  '/'
]);
const isDashboardRout = createRouteMatcher(['/dashboard(.*)']);


export default clerkMiddleware( async (auth , req)=>{ 
  const { userId } =await auth(); ;
    const isPublic = isPublicRoute(req);
    const isDashboard = isDashboardRout(req);

    if(userId  && isPublic && !req.nextUrl.pathname.startsWith('/api')){
      return NextResponse.redirect(new URL ('/dashboard', req.url));
    }
    if(!userId && isDashboard){
      return NextResponse.redirect(new URL ('/sign-in',req.url));
    }
    if(!userId && !isPublic){
      return NextResponse.redirect(new URL('/sign-in',req.url));
    }
});

export const config = {
  matcher :['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
};