import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const team = await prisma?.team.findMany({});
  return Response.json(team);
}
