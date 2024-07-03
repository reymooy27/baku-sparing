import { prisma } from "@/db/client";

export async function DELETE({ params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id);
    const deletedData = await prisma?.sparing.delete({
      where: {
        id: id,
      },
    });

    return Response.json(
      {
        success: true,
        data: deletedData,
        message: "Succesfully delete data",
      },
      { status: 200 },
    );
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
}
