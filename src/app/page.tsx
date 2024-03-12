"use client";

import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ["hello"],
    queryFn: () =>
      fetch("http://localhost:3000/api/hello").then((res) => res.json()),
  });

  console.log(data.data);

  return (
    <>
      {isPending && <p>Loading...</p>}
      {!isPending && (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1>Baku Sparing</h1>
        </main>
      )}
    </>
  );
}
