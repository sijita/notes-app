"use client";
import PasswordInput from "../ui/PasswordInput";
import MyButton from "../ui/MyButton";
import EmailInput from "../ui/EmailInput";
import useSignup from "@/app/hooks/useSingup";
import { Input } from "@nextui-org/react";

export default function SignupForm() {
  const {
    email,
    username,
    password,
    confirmPassword,
    onSubmit,
    handleChangeData,
  } = useSignup();

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 sm:w-96">
      <Input
        label="Nombre de usuario"
        radius="sm"
        variant="bordered"
        value={username}
        name="username"
        onChange={handleChangeData}
        isRequired
        classNames={{
          input: "text-base",
          label: "text-base",
          errorMessage: "text-base",
        }}
      />
      <EmailInput value={email} name="email" onChange={handleChangeData} />
      <PasswordInput
        label="Contraseña"
        value={password}
        name="password"
        onChange={handleChangeData}
      />
      <PasswordInput
        label="Confirmar contraseña"
        value={confirmPassword || ""}
        name="confirmPassword"
        onChange={handleChangeData}
      />
      <MyButton color="default" type="submit">
        Registrarse
      </MyButton>
    </form>
  );
}
