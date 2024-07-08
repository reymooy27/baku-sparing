"use client";

import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export type SparingData = {
  name: string;
  id: number;
};

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
      <h1>Baku Sparing</h1>
      <div className="my-0 mx-[1rem] flex gap-5 p-5 ">
        {isPending ? (
          <div className="flex justify-center items-center w-full min-h-[200px]">
            <h1>Loading...</h1>
          </div>
        ) : (
          data.map((data: SparingData) => (
            <Card
              key={data.id}
              className="w-[300px] h-[200px] bg-secondary border-none shadow-xl p-3"
            >
              <span>{data.id}</span>
            </Card>
          ))
        )}
      </div>
      {session?.status === "authenticated" ? (
        <>
          <span>{session?.data?.user?.name}</span>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </>
      ) : (
        <Button className="bg-red-400" onClick={() => router.push("login")}>
          Clic
        </Button>
      )}
    </>
  );
}
