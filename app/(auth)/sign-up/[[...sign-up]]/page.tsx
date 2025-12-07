
import { SignUp } from "@clerk/nextjs";
import AuthLayout from "@/app/(auth)/layout";
import { SignInAppearance } from "@/lib/auth-config"; 

export default function ClerkSignUpPage() {
  return (
    <AuthLayout>
      <SignUp
        path="/sign-up"
        routing="path"
        appearance={SignInAppearance} 
      />
    </AuthLayout>
  );
}