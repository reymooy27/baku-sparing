"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ["hello"],
    queryFn: () =>
      fetch("http://localhost:3000/api/hello").then((res) => res.json()),
  });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <>
      {isPending && <p>Loading...</p>}
      {!isPending && (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1>Baku Sparing</h1>
          <Button onClick={() => console.log("f")}>Clic</Button>
        </main>
      )}
    </>
  );
}
