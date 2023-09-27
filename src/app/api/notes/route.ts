import { NextResponse } from "next/server";
import prisma from "@/app/utils/prisma";

export async function POST(req: Request) {
  const { title, content, userId } = await req.json();

  try {
    await prisma.note.create({
      data: {
        title,
        content,
        userId,
      },
    });

    return NextResponse.json("Nota creada correctamente");
  } catch (error) {
    return NextResponse.json(
      {
        error: "No se pudo crear la nota, intente nuevamente",
      },
      {
        status: 500,
      }
    );
  }
}
