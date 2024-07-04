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
      <div className="w-full min-h-screen flex">
        <div className="w-[250px] bg-red-300"></div>
        <main className="w-[calc(100%-250px)]">
          <Header />
          <h1>Baku Sparing</h1>
          <div className="my-0 mx-[3rem] flex flex-col justify-center gap-5 p-5 ">
            <CardHeader>
              <CardTitle>Data</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-3">
              {isPending ? (
                <h1>Loading...</h1>
              ) : (
                data.map((data: SparingData) => (
                  <Card key={data.id} className="w-[300px] h-[200px]">
                    <span>{data.id}</span>
                  </Card>
                ))
              )}
            </CardContent>
          </div>
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
