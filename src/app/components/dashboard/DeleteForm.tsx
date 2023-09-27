import MyButton from "../ui/MyButton";
import useDeleteNote from "@/app/hooks/useDeleteNote";

export default function DeleteForm({ id }: { id: string }) {
  const { onDelete } = useDeleteNote();

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="text-lg">
          Estas seguro que quieres eliminar esta nota?
        </h3>
        <p className="text-sm text-gray-500">
          Esta acción no se puede deshacer.
        </p>
      </div>
      <MyButton
        type="button"
        color="danger"
        onClick={() => onDelete(id)}
        fullWidth
      >
        Eliminar
      </MyButton>
    </div>
  );
}
