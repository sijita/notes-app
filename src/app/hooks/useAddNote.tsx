import toast from "react-hot-toast";
import { useNoteStore } from "../store/noteStore";
import { INote } from "../types/types";
import { useSession } from "next-auth/react";
import { ISession } from "../types/types";
import { useRouter } from "next/navigation";
import axios from 'axios';

export default function useAddNote() {
  const router = useRouter();
  const { data: session } = useSession();
  const mySession: ISession = session as ISession;
  const { title, content } = useNoteStore((state) => state.note);
  const setNote = useNoteStore((state) => state.setNote);
  const reset = useNoteStore((state) => state.reset);

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setNote({ [name]: value } as unknown as INote);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let toastLoading;

    if (!title || !content) {
      return toast.error("Todos los campos son obligatorios");
    }

    try {
      toastLoading = toast.loading("Cargando...");
      const res = await axios.post("/api/notes", {
        title,
        content,
        userId: mySession.user.id,
      });

      toast.dismiss(toastLoading);
      reset();
      router.refresh();

      return toast.success(res.data);
    } catch (error: any) {
      console.log(error);
      toast.dismiss(toastLoading);
      return toast.error(error.response.data.error);
    }
  };

  return {
    title,
    content,
    onSubmit,
    handleChangeData,
  };
}
