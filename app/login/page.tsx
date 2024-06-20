"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const CALLBACKURL = "http://localhost:3000/";

  const handleClick = async () => {
    setLoading(true);
    try {
      await signIn("google", { callbackUrl: CALLBACKURL });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <main className="w-full h-screen flex justify-center align-center">
      <Button
        disabled={loading}
        style={{
          width: "300px",
          height: "50px",
          margin: "90px",
          fontWeight: "bold",
        }}
        onClick={handleClick}
      >
        {loading ? "Signing In..." : "Signin with Google"}
      </Button>
    </main>
  );
}
