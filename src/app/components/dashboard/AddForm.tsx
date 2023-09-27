import { Input, Textarea } from "@nextui-org/react";
import useAddNote from "@/app/hooks/useAddNote";
import MyButton from "../ui/MyButton";

export default function AddForm() {
  const { title, content, onSubmit, handleChangeData } = useAddNote();
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <Input
        name="title"
        value={title}
        onChange={handleChangeData}
        label="Título"
        radius="sm"
        required
        fullWidth
      />
      <Textarea
        name="content"
        value={content}
        onChange={handleChangeData}
        label="Contenido"
        placeholder="Enter your description"
      />
      <MyButton type="submit" color="primary" fullWidth>
        Agregar
      </MyButton>
    </form>
  );
}
