"use client";
import { useEffect } from "react";
import MyButton from "./MyButton";
import {
  IconDeviceFloppy,
  IconMenu2,
  IconPencil,
  IconX,
} from "@tabler/icons-react";
import { signOut } from "next-auth/react";
import { Input } from "@nextui-org/react";
import useEditNote from "@/app/hooks/useEditNote";
import { INote } from "@/app/types/types";
import DeleteModal from "../dashboard/DeleteModal";
import { usePathname } from "next/navigation";
import { useMenuStore } from "@/app/store/menuStore";

export default function Header({
  id,
  titleValue,
  buttons,
}: {
  id: string;
  titleValue: string;
  buttons: boolean;
}) {
  const pathname = usePathname();
  const { onSubmit, isDisabled, setIsDisabled, title, setNote } = useEditNote();
  const setMenu = useMenuStore((state) => state.setMenu);
  const menu = useMenuStore((state) => state.menu);

  useEffect(() => {
    setNote({
      title: titleValue,
    } as unknown as INote);
  }, [titleValue, setNote, isDisabled]);

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between w-full border-b p-5 gap-5 md:h-20">
      <div className="flex gap-5 items-center">
        <button className="md:hidden">
          <IconMenu2
            size={25}
            onClick={() => {
              setMenu(!menu);
            }}
          />
        </button>
        {pathname.endsWith("/dashboard") ? (
          <h3 className="font-bold text-2xl">Todas las notas</h3>
        ) : (
          <Input
            classNames={{
              input: [`${isDisabled && "bg-transparent font-bold"} text-xl`],
              innerWrapper: `${
                isDisabled && "bg-transparent font-bold"
              } text-xl`,
              inputWrapper: [
                `${isDisabled && "bg-transparent font-bold"} text-xl`,
              ],
            }}
            type="text"
            radius="sm"
            value={title}
            disabled={isDisabled}
            onChange={(e) =>
              setNote({
                title: e.currentTarget.value,
              } as unknown as INote)
            }
          />
        )}
      </div>
      {buttons && (
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {isDisabled ? (
            <MyButton
              color="default"
              type="button"
              variant="bordered"
              startContent={<IconPencil size={20} />}
              onClick={() => setIsDisabled(!isDisabled)}
              className="w-full sm:w-auto"
            >
              Editar
            </MyButton>
          ) : (
            <>
              <MyButton
                color="default"
                type="button"
                variant="bordered"
                startContent={<IconDeviceFloppy size={20} />}
                className="w-full sm:w-auto"
                onClick={() => onSubmit(id)}
              >
                Guardar
              </MyButton>
              <MyButton
                color="default"
                type="button"
                variant="bordered"
                startContent={<IconX size={20} />}
                onClick={() => setIsDisabled(!isDisabled)}
                className="w-full sm:w-auto"
              >
                Cancelar
              </MyButton>
            </>
          )}
          <DeleteModal id={id} />
        </div>
      )}
    </header>
  );
}
