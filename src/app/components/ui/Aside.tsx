"use client";
import {
  IconClipboard,
  IconFolder,
  IconMoonFilled,
  IconSunFilled,
  IconX,
} from "@tabler/icons-react";
import MyButton from "./MyButton";
import AddModal from "../dashboard/AddModal";
import Link from "next/link";
import NotesLink from "./NotesLink";
import { INote } from "@/app/types/types";
import { useRouter } from "next/navigation";
import { useMenuStore } from "@/app/store/menuStore";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Select, SelectItem, Switch } from "@nextui-org/react";

export default function Aside({ notes }: { notes: INote[] }) {
  const { theme, setTheme } = useTheme();
  const { push } = useRouter();
  const setMenu = useMenuStore((state) => state.setMenu);
  const menu = useMenuStore((state) => state.menu);
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateViewportWidth);

    updateViewportWidth();

    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  return (
    <motion.div
      animate={menu ? "open" : "closed"}
      transition={{ duration: 0.5, type: "tween" }}
      variants={{
        open: {
          opacity: "var(--opacity-to)",
          x: "0%",
        },
        closed: {
          opacity: "var(--opacity-from)",
          x: viewportWidth && viewportWidth < 768 ? "-100%" : "0%",
        },
      }}
      className={`max-md:[--opacity-to:100%] max-md:[--opacity-from:0%] border-r md:static h-full sm:h-auto md:w-80 ${
        menu
          ? "flex flex-col absolute z-50 bg-black"
          : "hidden md:flex md:flex-col md:w-80 md:static md:z-0"
      }`}
    >
      <div className="flex flex-wrap items-center gap-3 p-5 border-b justify-between h-20 md:flex-none">
        <Link
          href="/dashboard"
          className="text-2xl font-bold flex items-center gap-1"
        >
          <IconClipboard />
          Notes
        </Link>
        <button className="md:hidden">
          <IconX
            size={25}
            onClick={() => {
              setMenu(!menu);
            }}
          />
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 px-5 py-8">
        <MyButton
          color="default"
          variant="flat"
          type="button"
          startContent={<IconFolder size={20} />}
          onClick={() => {
            push(`/dashboard`);
            setMenu(false);
          }}
        >
          All Notes
        </MyButton>
        <AddModal />
      </div>
      <div className="flex flex-col gap-3 p-5 border-t h-full">
        {notes.map(({ id, title }) => (
          <NotesLink id={id || ""} title={title} key={id} />
        ))}
        <div className="mt-auto flex flex-col gap-5">
          <Select
            label="Tema"
            value={theme}
            defaultSelectedKeys={[`${theme}`]}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setTheme(event.target.value);
            }}
            startContent={
              theme === "light" ? (
                <IconSunFilled size={15} />
              ) : (
                <IconMoonFilled size={15} />
              )
            }
            radius="sm"
          >
            <SelectItem
              key="light"
              value="light"
              startContent={<IconSunFilled size={18} />}
            >
              Claro
            </SelectItem>
            <SelectItem
              key="dark"
              value="dark"
              startContent={<IconMoonFilled size={17} />}
            >
              Oscuro
            </SelectItem>
          </Select>
          <MyButton
            color="danger"
            type="button"
            variant="ghost"
            onClick={() => signOut()}
            fullWidth
          >
            Cerrar sesión
          </MyButton>
        </div>
      </div>
    </motion.div>
  );
}
