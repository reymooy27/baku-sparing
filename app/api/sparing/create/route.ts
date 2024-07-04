import { auth } from "@/auth";
import { prisma } from "@/db/client";

export const POST = auth(async (req) => {
  const session = req.auth;

  if (!session) {
    return Response.json(
      {
        message: "Not Authenticated",
      },
      {
        status: 401,
      },
    );
  }

  const { name } = await req.json();
  try {
    await prisma?.sparing.create({
      data: {
        name,
      },
    });
    return Response.json({
      success: true,
      message: "Succesfully create data",
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Cannot create data",
      },
      { status: 500 },
    );
  }
});
