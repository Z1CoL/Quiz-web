// app/protected/layout.tsx
"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ArticleProvider } from "@/app/_providers/ArticleProviders";
import { AppSidebar } from "@/_components/AppSidebar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <ArticleProvider>
      <header className="flex items-center p-4 gap-4 h-16 justify-between border-b-4">
<></>
          Quiz app

        <div className="flex gap-4">
          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
      <>
        <div className="flex">
          <div className="border-r-4 ">
            <AppSidebar />
          </div>
          {children}
        </div>
      </>
    </ArticleProvider>
  );
}
