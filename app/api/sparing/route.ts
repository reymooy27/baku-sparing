import { prisma } from "@/db/client";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  console.log(req.nextUrl.searchParams.get("id"));
  const sparing = await prisma?.sparing.findMany({});
  return Response.json(sparing);
}
