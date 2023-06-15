import { authMiddleware } from "@clerk/nextjs";

// ******   Middleware    ********
// The middleware decides which pages are public and which need to hide behind authentication. 
// We do this by creating a middleware.ts file at the root folder 
// (or inside src/ if that is how you set up your app).

export default authMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};