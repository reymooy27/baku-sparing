"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  const handleClick = async () => {
    await signIn("google", { callbackUrl: "http://localhost:3000/" });
  };
  return (
    <button onClick={handleClick} type="submit">
      Signin with Google
    </button>
  );
}
