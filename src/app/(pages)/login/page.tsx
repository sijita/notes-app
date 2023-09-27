import LoginForm from "@/app/components/login/LoginForm";
import Link from "next/link";

export default function page() {
  return (
    <section className="flex flex-col gap-10 items-center justify-center h-screen">
      <h1 className="text-5xl font-semibold">Iniciar sesión</h1>
      <LoginForm />
      <Link href="/signup" className="hover:underline">
        Registrarse
      </Link>
    </section>
  );
}
