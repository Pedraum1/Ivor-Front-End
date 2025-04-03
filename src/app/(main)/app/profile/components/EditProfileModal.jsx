"use client";

import { useActionState, useState } from "react";
import Button from "@/app/components/Button";
import execute from "@/actions/updateProfile";
import Modal from "@/app/components/Modal/Modal";
import PhotoInput from "./PhotoInput";
import Input from "@/app/components/Input";
import Textarea from "@/app/components/Textarea";

export default function EditProfileModal({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [state, updateProfile, isPending] = useActionState(execute, undefined);

  const showModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <Button onClick={showModal}>{children}</Button>
      <Modal
        showModal={isOpenModal}
        onClick={showModal}
        onSubmit={showModal}
        title="Editar Perfil"
      >
        <form>
          <section className="relative mb-20">
            <div>
              <img
                src="/general/noProfile.webp"
                className="max-h-56 object-cover w-full"
              />
            </div>
            <div className="absolute bottom-0 left-10 translate-y-1/2">
              <PhotoInput />
            </div>
          </section>
          <section className="py-4 gap-y-4 flex flex-col">
            <Input
              title={"Nome"}
              className={"w-full"}
              defaultValue={"Fulano"}
            />
            <Textarea className={"rounded-3xl"} placeholder="Descrição" />
          </section>
        </form>
      </Modal>
    </>
  );
}
