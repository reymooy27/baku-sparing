import { prisma } from "@/db/client";

export async function GET() {
  const team = await prisma?.team.findMany({});
  return Response.json(team);
}
