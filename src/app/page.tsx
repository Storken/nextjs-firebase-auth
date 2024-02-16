"use client";
import { auth } from "@/firebase";
import { IconFidgetSpinner } from "@tabler/icons-react";
import Link from "next/link";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { SignedIn } from "./components/signed-in";
import { SignedOut } from "./components/signed-out";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  return (
    <div className="bg-black">
      <h1>NextJS + Firebase Auth</h1>
      {loading ? (
        <IconFidgetSpinner className="animate-spin w-12 h-12 mx-auto" />
      ) : (
        <>
          <SignedIn>
            <div className="flex flex-col text-primary-500">
              <h1 className="text-3xl font-bold">Signed in as</h1>
              <p>{user?.email}</p>
              <p>
                Email verified:{" "}
                {user?.emailVerified ? (
                  <span className="text-green-500">Verified</span>
                ) : (
                  <span className="text-red-500">Not verified</span>
                )}
              </p>
              <button onClick={signOut} className="text-red-500 font-bold">
                Sign out
              </button>
            </div>
          </SignedIn>
          <SignedOut>
            <Link className="mr-4 underline" href="/sign-in">
              Sign in
            </Link>
            <Link className="mr-4 underline" href="/sign-up">
              Create account
            </Link>
          </SignedOut>
        </>
      )}
    </div>
  );
}
