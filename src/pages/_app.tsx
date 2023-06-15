import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

// https://clerk.com/docs/nextjs/get-started-with-nextjs
// *******   Mount ClerkProvider   ************
// Update your root layout to include the <ClerkProvider> wrapper. 
// The <ClerkProvider> component wraps your Next.js application to provide active session 
// and user context to Clerk's hooks and other components. 
// It is recommended that the <ClerkProvider> wraps the <body> to enable 
// the context to be accessible anywhere within the app.

const MyApp: AppType = ({ Component, pageProps }) => {
  return <ClerkProvider {...pageProps}>
  <Component {...pageProps} />
</ClerkProvider>;
};

export default api.withTRPC(MyApp);
