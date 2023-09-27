import { NextResponse } from "next/server";
import prisma from "@/app/utils/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { email, username, password, confirmPassword } = await req.json();

  if (!email || !username || !password || !confirmPassword) {
    return NextResponse.json(
      {
        error: "Todos los campos son requeridos",
      },
      {
        status: 400,
      }
    );
  }

  if (
    !email.match(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    )
  ) {
    return NextResponse.json(
      {
        error: "El email no es válido",
      },
      {
        status: 400,
      }
    );
  }

  if (!password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)) {
    return NextResponse.json(
      {
        error:
          "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número",
      },
      {
        status: 400,
      }
    );
  }

  if (password !== confirmPassword) {
    return NextResponse.json(
      {
        error: "Las contraseñas no coinciden",
      },
      {
        status: 400,
      }
    );
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
        username,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          error: "El usuario ya existe",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    return NextResponse.json("Usuario creado exitosamente");
  } catch (error) {
    return NextResponse.json(
      {
        error: "Ocurrió un error al crear el usuario",
      },
      {
        status: 500,
      }
    );
  }
}
