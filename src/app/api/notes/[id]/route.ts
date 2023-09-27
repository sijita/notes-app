import { NextResponse } from "next/server";
import prisma from "@/app/utils/prisma";

export async function PUT(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const { title, content } = await req.json();

  try {
    await prisma.note.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });

    return NextResponse.json("Nota actualizada correctamente");
  } catch (error) {
    return NextResponse.json(
      {
        error: "No se pudo actualizar la nota, intente nuevamente",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    await prisma.note.delete({
      where: {
        id,
      },
    });

    return NextResponse.json("Nota eliminada correctamente");
  } catch (error) {
    return NextResponse.json(
      {
        error: "No se pudo eliminar la nota, intente nuevamente",
      },
      {
        status: 500,
      }
    );
  }
}
