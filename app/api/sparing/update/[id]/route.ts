import { auth } from "@/auth";
import { prisma } from "@/db/client";

export const PUT = auth(async (req, params) => {
  try {
    const session = req.auth;
    const body = await req.json();

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

    const id = parseInt(params.params?.id as string);
    const updatedData = await prisma?.sparing.update({
      data: {
        name: body.name,
      },
      where: {
        id: id,
      },
    });

    return Response.json({
      success: true,
      data: updatedData,
      message: "Succesfully update data",
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Cannot update data",
      },
      {
        status: 500,
      },
    );
  }
});
