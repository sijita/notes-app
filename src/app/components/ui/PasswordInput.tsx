"use client";
import { useState, useMemo } from "react";
import { IconEyeOff, IconEye } from "@tabler/icons-react";
import { Input } from "@nextui-org/react";

export default function PasswordInput({
  label,
  value,
  name,
  onChange,
}: {
  label: string;
  value: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const validatePassword = (value: string) =>
    value?.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/);
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validatePassword(value) ? false : true;
  }, [value]);

  return (
    <Input
      label={label}
      value={value}
      name={name}
      variant="bordered"
      radius="sm"
      color={isInvalid ? "danger" : "default"}
      classNames={{
        input: "text-base",
        label: "text-base",
        errorMessage: "text-base",
      }}
      errorMessage={
        isInvalid &&
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número"
      }
      isInvalid={isInvalid}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <IconEye
              className="text-2xl text-default-400 pointer-events-none"
              size={20}
            />
          ) : (
            <IconEyeOff
              className="text-2xl text-default-400 pointer-events-none"
              size={20}
            />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      onChange={onChange}
      isRequired
    />
  );
}
