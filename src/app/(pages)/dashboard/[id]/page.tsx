import Header from "@/app/components/ui/Header";
import MyTextArea from "@/app/components/ui/TextArea";
import prisma from "@/app/utils/prisma";

export default async function page({ params }: { params: any }) {
  const { id } = params;
  const note = await prisma.note.findUnique({
    where: {
      id: id,
    },
  });

  if (!note) {
    return null;
  }

  return (
    <div className="flex flex-col w-full h-full">
      <Header id={id} titleValue={note.title} buttons />
      <div className="p-5 rounded-lg h-full min-h-screen">
        <MyTextArea value={note.content} />
      </div>
    </div>
  );
}
