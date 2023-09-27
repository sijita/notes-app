"use client";
import EmailInput from "../ui/EmailInput";
import PasswordInput from "../ui/PasswordInput";
import MyButton from "../ui/MyButton";
import useLogin from "@/app/hooks/useLogin";

export default function LoginForm() {
  const { email, password, onSubmit, handleChangeData } = useLogin();
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 sm:w-96">
      <EmailInput value={email} name="email" onChange={handleChangeData} />
      <PasswordInput
        label="Contraseña"
        value={password}
        name="password"
        onChange={handleChangeData}
      />
      <MyButton color="default" type="submit">
        Iniciar sesión
      </MyButton>
    </form>
  );
}
