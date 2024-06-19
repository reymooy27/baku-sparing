"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  const handleClick = async () => {
    await signIn("google");
  };
  return (
    <button onClick={handleClick} type="submit">
      Signin with Google
    </button>
  );
}
