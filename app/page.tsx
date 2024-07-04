"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { isPending, error, data } = useQuery({
    queryKey: ["get-sparing"],
    queryFn: () =>
      fetch("http://localhost:3000/api/sparing").then((res) => res.json()),
  });

  const session = useSession();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <div className="w-full min-h-screen flex">
        <div className="w-[20%] bg-red-300"></div>
        <main className="w-[80%] flex flex-col items-center justify-between">
          <header className="bg-yellow-300 w-full h-[3rem]"></header>
          <h1>Baku Sparing</h1>
          {isPending ? <h1>Loading...</h1> : <h1>{JSON.stringify(data)}</h1>}
          {session?.status === "authenticated" ? (
            <>
              <span>{session?.data?.user?.name}</span>
              <Button onClick={handleSignOut}>Sign Out</Button>
            </>
          ) : (
            <Button onClick={() => router.push("login")}>Clic</Button>
          )}
        </main>
      </div>
    </>
  );
}
