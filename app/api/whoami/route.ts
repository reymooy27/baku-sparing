import { auth } from "@/auth";

export const GET = auth(async (req) => {
  return Response.json(req.auth);
});
