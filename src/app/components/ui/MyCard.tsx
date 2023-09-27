"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MyCard({
  cardTitle,
  cardContent,
  cardFooter,
  noteId,
}: {
  cardTitle: string;
  cardContent: string;
  cardFooter: string;
  noteId: string;
}) {
  const router = useRouter();
  return (
    <Card
      className="sm:max-w-96 p-5 sm:max-h-52 grow"
      isPressable
      isHoverable
      radius="sm"
      shadow="none"
      onPress={() => router.push(`/dashboard/${noteId}`)}
      classNames={{
        base: "bg-transparent border border-default",
      }}
    >
      <CardHeader className="text-xl font-semibold text-start break-all">
        {cardTitle}
      </CardHeader>
      <Divider />
      <CardBody className="p-3">
        <p className="truncate text-lg">{cardContent}</p>
      </CardBody>
      <CardFooter className="text-sm justify-end">{cardFooter}</CardFooter>
    </Card>
  );
}
