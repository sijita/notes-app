import Aside from "@/app/components/ui/Aside";
import prisma from "@/app/utils/prisma";
import { getServerSession } from "next-auth";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  const user = session?.user?.email || "";
  const notes = await prisma.note.findMany({
    where: {
      user: {
        email: user,
      },
    },
  });

  return (
    <main className="min-h-screen flex relative">
      <Aside notes={notes} />
      {children}
    </main>
  );
}
