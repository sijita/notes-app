import SignupForm from "@/app/components/singup/SingupForm";
import Link from "next/link";

export default function page() {
  return (
    <section className="flex flex-col gap-10 items-center justify-center h-screen">
      <h1 className="text-5xl font-semibold">Registrarse</h1>
      <SignupForm />
      <Link href="/login" className="hover:underline">
        Iniciar sesión
      </Link>
    </section>
  );
}
