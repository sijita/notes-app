"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import MyButton from "../ui/MyButton";
import { IconPlus } from "@tabler/icons-react";
import AddForm from "./AddForm";
import { useNoteStore } from "@/app/store/noteStore";
import { useRouter } from "next/navigation";

export default function AddModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const reset = useNoteStore((state) => state.reset);
  const router = useRouter();

  return (
    <>
      <MyButton
        color="default"
        variant="flat"
        type="button"
        startContent={<IconPlus size={20} />}
        onClick={() => (router.push("/dashboard"), reset(), onOpen())}
      >
        Nueva nota
      </MyButton>
      <Modal radius="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">
                Nueva nota
              </ModalHeader>
              <ModalBody>
                <AddForm />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  radius="sm"
                  type="button"
                  fullWidth
                >
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
