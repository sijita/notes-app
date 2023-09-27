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
import { IconTrash } from "@tabler/icons-react";
import DeleteForm from "./DeleteForm";

export default function DeleteModal({ id }: { id: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <MyButton
        color="default"
        variant="bordered"
        type="button"
        startContent={<IconTrash size={20} />}
        className="w-full sm:w-auto"
        onClick={onOpen}
      >
        Eliminar
      </MyButton>
      <Modal radius="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">
                Eliminar nota
              </ModalHeader>
              <ModalBody>
                <DeleteForm id={id} />
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
