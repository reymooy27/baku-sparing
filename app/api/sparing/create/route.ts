import { prisma } from "@/db/client";

export async function GET() {
  const team = await prisma?.sparing.findMany({});
  return Response.json(team);
}
