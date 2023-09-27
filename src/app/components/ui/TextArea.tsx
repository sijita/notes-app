"use client";
import { useEffect } from "react";
import useEditNote from "@/app/hooks/useEditNote";
import { INote } from "@/app/types/types";

export default function TextArea({ value }: { value: string }) {
  const { isDisabled, setNote, content } = useEditNote();

  useEffect(() => {
    setNote({
      content: value,
    } as unknown as INote);
  }, [value, setNote, isDisabled]);

  return (
    <textarea
      value={content}
      className="w-full h-full min-h-screen sm:p-10 p-5 text-xl rounded-lg resize-none"
      disabled={isDisabled}
      onChange={(e) =>
        setNote({
          content: e.currentTarget.value,
        } as unknown as INote)
      }
    />
  );
}
