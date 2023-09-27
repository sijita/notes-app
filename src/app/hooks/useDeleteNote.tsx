import toast from "react-hot-toast";
import axios from 'axios';
import { useRouter } from "next/navigation";

export default function useDeleteNote() {
  const router = useRouter();

  const onDelete = async (id: string) => {
    console.log(id);
    let toastLoading;
    try {
      toastLoading = toast.loading("Cargando...");
      const res = await axios.delete(`/api/notes/${id}`);

      toast.dismiss(toastLoading);
      router.refresh();
      router.push("/dashboard");

      return toast.success(res.data);
    } catch (error: any) {
      toast.dismiss(toastLoading);
      return toast.error(error.response.data.error);
    }
  };
  return {
    onDelete,
  };
}
