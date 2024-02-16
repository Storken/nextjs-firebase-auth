"use client";
import { auth } from "../firebase";
import { IconFidgetSpinner } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";

export default function Page() {
  const router = useRouter();
  const [createUser] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    await createUser(email, password);
    await sendEmailVerification();
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Create account</h1>
      {loading ? (
        <IconFidgetSpinner className="animate-spin w-8 h-8" />
      ) : (
        <>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            className="text-xl px-4 py-2 rounded-md border border-gray-300 mb-4"
          />
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className="text-xl px-4 py-2 rounded-md border border-gray-300 mb-4"
          />
          <button
            className="bg-yellow-500 text-black px-4 py-2 rounded-md font-bold"
            onClick={onSubmit}
          >
            SIGN UP
          </button>
        </>
      )}
    </div>
  );
}
