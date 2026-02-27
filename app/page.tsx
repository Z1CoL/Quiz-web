"use client";
import { useEffect, useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const router = useRouter();
  useEffect(() => {
    router.push("/sign-in");
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <SignedOut>
        <SignIn />
        {/* <SignUp /> */}
      </SignedOut>
      {/* <SignedIn>
        <UserButton />
      </SignedIn> */}
    </div>
  );
}
