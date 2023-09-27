"use client";
import MyButton from "./components/ui/MyButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col gap-5 h-screen xl:w-3/12 md:w-5/12 w-full max-md:p-10 p-5 items-center justify-center mx-auto">
      <h1 className="text-5xl font-semibold text-center">Notes app</h1>
      <p className="text-2xl">
        Una aplicación de toma de notas simple hecha con Next.js, MongoDB, Prisma y Tailwind
        CSS
      </p>
      <MyButton
        color="default"
        type="button"
        onClick={() => router.push("/login")}
        className="w-full"
      >
        Iniciar sesión
      </MyButton>
      <MyButton
        color="default"
        type="button"
        onClick={() => router.push("/signup")}
        className="w-full"
      >
        Registrarse
      </MyButton>
    </main>
  );
}
