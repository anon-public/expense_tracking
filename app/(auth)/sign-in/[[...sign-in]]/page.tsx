import { SignIn } from "@clerk/nextjs";
import AuthLayout from "@/app/(auth)/layout";
import { NodeNextRequest } from "next/dist/server/base-http/node";

export default function ClerkSignInPage() {
  return (
    <AuthLayout>
      <SignIn
        path="/sign-in" 
        routing="path" 
        appearance={{
          variables: {
            colorPrimary: "#44bca6", 
            colorText: "#333333",       
            fontFamily: 'Inter, sans-serif',
          },
          elements: {

            headerTitle: { display: 'none' },
            headerSubtitle: { display: 'none' },
            logo: { display: 'none' },

            formButtonPrimary: {
              backgroundColor: "#44bca6", 
              "&:hover": {
                backgroundColor: "#ff9855",
                outline: "#ff9855"
              },

              borderRadius: '6px',
              textTransform: 'none',
              fontWeight: 600,
            },

            footerActionLink: {
                color: "#44bca6",
            },

            card: {
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                border: '1px solid #f0f0f0',
                borderRadius: '12px',
            }
          },
        }}
      />
    </AuthLayout>
  );
}