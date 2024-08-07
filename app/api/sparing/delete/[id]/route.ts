import { auth } from "@/auth";
import { prisma } from "@/db/client";

export const DELETE = auth(async (req, params) => {
  try {
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

    const id = parseInt(params.params?.id as string);
    const deletedData = await prisma?.sparing.delete({
      where: {
        id: id,
      },
    });

    return Response.json({
      success: true,
      data: deletedData,
      message: "Succesfully delete data",
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Cannot delete data",
      },
      {
        status: 500,
      },
    );
  }
});
