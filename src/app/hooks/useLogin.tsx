import { signIn } from "next-auth/react";
import { useUserStore } from "../store/userStore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { IUser } from "../types/types";

export default function useLogin() {
  const { push } = useRouter();
  const { email, password } = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const reset = useUserStore((state) => state.reset);

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUser({ [name]: value } as unknown as IUser);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let toastLoading;

    if (!email || !password) {
      return toast.error("Todos los campos son obligatorios");
    }

    toastLoading = toast.loading("Cargando...");

    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (res?.error) {
      toast.dismiss(toastLoading);
      return toast.error(res?.error);
    }

    reset();
    push("/dashboard");
    toast.dismiss(toastLoading);

    return toast.success("Bienvenido");
  };

  return {
    email,
    password,
    onSubmit,
    handleChangeData,
  };
}
