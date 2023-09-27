import toast from "react-hot-toast";
import { useNoteStore } from "../store/noteStore";
import axios from 'axios';
import { useRouter } from "next/navigation";

export default function useEditNote() {
  const router = useRouter();
  const isDisabled = useNoteStore((state) => state.isDisabled);
  const setIsDisabled = useNoteStore((state) => state.setIsDisabled);
  const { title, content } = useNoteStore((state) => state.note);
  const setNote = useNoteStore((state) => state.setNote);

  const onSubmit = async (id: string) => {
    console.log(id);
    let toastLoading;

    if (!title || !content) {
      return toast.error("Todos los campos son obligatorios");
    }

    try {
      toastLoading = toast.loading("Cargando...");
      const res = await axios.put(`/api/notes/${id}`, {
        title,
        content,
      });

      toast.dismiss(toastLoading);
      router.refresh();
      setIsDisabled(!isDisabled);

      return toast.success(res.data);
    } catch (error: any) {
      toast.dismiss(toastLoading);
      return toast.error(error.response.data.error);
    }
  };

  return {
    isDisabled,
    setIsDisabled,
    title,
    content,
    onSubmit,
    setNote,
  };
}
