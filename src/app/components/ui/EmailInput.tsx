"use client";
import { Input } from "@nextui-org/react";
import { useState, useMemo } from "react";

export default function EmailInput({
  value,
  name,
  onChange,
}: {
  value: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  return (
    <Input
      value={value}
      name={name}
      radius="sm"
      type="email"
      label="Correo electrónico"
      variant="bordered"
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "default"}
      errorMessage={isInvalid && "Por favor ingresa un email válido"}
      onChange={onChange}
      isRequired
      classNames={{
        input: "text-base",
        label: "text-base",
        errorMessage: "text-base",
      }}
    />
  );
}
