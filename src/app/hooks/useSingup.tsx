import { useUserStore } from "../store/userStore";
import axios from 'axios';
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { IUser } from "../types/types";

export default function useSignup() {
  const { push } = useRouter();
  const { email, username, password, confirmPassword } = useUserStore(
    (state) => state.user
  );
  const setUser = useUserStore((state) => state.setUser);
  const reset = useUserStore((state) => state.reset);

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUser({ [name]: value } as unknown as IUser);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let toastLoading;

    if (password !== confirmPassword) {
      return toast.error("Las contraseñas no coinciden");
    }

    try {
      toastLoading = toast.loading("Cargando...");

      const res = await axios.post("/api/auth/signup", {
        email,
        username,
        password,
        confirmPassword,
      });

      toast.dismiss(toastLoading);

      reset();

      toast.success(res.data);

      return push("/login");
    } catch (error: any) {
      toast.dismiss(toastLoading);
      return toast.error(error.response.data.error);
    }
  };

  return {
    email,
    username,
    password,
    confirmPassword,
    onSubmit,
    handleChangeData,
  };
}
