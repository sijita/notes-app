"use client";
import { Button } from "@nextui-org/react";

export default function MyButton({
  children,
  className,
  size,
  startContent,
  endContent,
  fullWidth,
  isIconOnly,
  isDisabled,
  onClick,
  variant,
  type,
  color,
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  fullWidth?: boolean;
  isIconOnly?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  color: "default" | "primary" | "success" | "warning" | "danger" | "secondary";
}) {
  return (
    <Button
      size={size}
      variant={variant}
      className={className}
      startContent={startContent}
      endContent={endContent}
      fullWidth={fullWidth}
      disabled={isDisabled}
      isIconOnly={isIconOnly}
      onPress={onClick}
      type={type}
      radius="sm"
      color={color}
    >
      {children}
    </Button>
  );
}
