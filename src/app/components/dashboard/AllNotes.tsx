import { getServerSession } from "next-auth";
import MyCard from "../ui/MyCard";
import prisma from "@/app/utils/prisma";

export default async function AllNotes() {
  const session = await getServerSession();
  const email = session?.user?.email || "";
  const notes = await prisma.note.findMany({
    where: {
      user: {
        email,
      },
    },
  });

  return (
    <section className="w-full p-5 flex flex-wrap gap-5">
      {notes.map((note) => (
        <MyCard
          key={note.id}
          noteId={note.id}
          cardTitle={note.title}
          cardContent={note.content}
          cardFooter={new Date(note.updatedAt).toLocaleDateString()}
        />
      ))}
    </section>
  );
}
