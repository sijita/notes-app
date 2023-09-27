"use client";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import MyButton from "./MyButton";
import { useMenuStore } from "@/app/store/menuStore";

export default function NotesLink({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const { push } = useRouter();
  const pathname = usePathname();
  const setMenu = useMenuStore((state) => state.setMenu);

  return (
    <MyButton
      color="default"
      variant={pathname.includes(id) ? "flat" : "light"}
      type="button"
      className={`justify-between gap-5`}
      onClick={() => {
        push(`/dashboard/${id}`);
        setMenu(false);
      }}
    >
      <span className="text-base truncate w-40 text-start">{title}</span>
      <IconChevronRight size={20} />
    </MyButton>
  );
}
