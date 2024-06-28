"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { isPending, error, data } = useQuery({
    queryKey: ["hello"],
    queryFn: () =>
      fetch("http://localhost:3000/api/hello").then((res) => res.json()),
  });

  const session = useSession();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      {isPending && <p>Loading...</p>}
      {!isPending && (
        <main className="flex min-h-screen mx-[8em] border-black border flex-col items-center justify-between p-24">
          <h1>Baku Sparing</h1>
          <h1>{JSON.stringify(data)}</h1>
          {session?.status === "authenticated" ? (
            <>
              <span>{session?.data?.user?.name}</span>
              <Button onClick={handleSignOut}>Sign Out</Button>
            </>
          ) : (
            <Button onClick={() => router.push("login")}>Clic</Button>
          )}
        </main>
      )}
    </>
  );
}
