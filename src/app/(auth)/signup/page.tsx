import signupImage from "@/assets/signup-image.jpg"; // Change the image path if needed
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GoogleSignInButton from "./google/GoogleSignInButton"; // You can adjust this if needed
import SignupForm from "./SignupForm"; // Create a SignupForm component similar to LoginForm

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <h1 className="text-center text-3xl font-bold">Sign Up for Pillaites</h1>
          <div className="space-y-5">
            <GoogleSignInButton />
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-muted" />
              <span>OR</span>
              <div className="h-px flex-1 bg-muted" />
            </div>
            <SignupForm />
            <Link href="/login" className="block text-center hover:underline">
              Already have an account? Log in
            </Link>
            <Link
              href="https://ex-pillaites.onrender.com/"
              className="block text-center text-sm font-bold text-primary hover:underline"
            >
              Are you an Ex-Pillaites? Click here
            </Link>
          </div>
        </div>
        <Image
          src={signupImage}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
