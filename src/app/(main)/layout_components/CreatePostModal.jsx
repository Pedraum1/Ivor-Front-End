"use client";
import { useState } from "react";

import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal/Modal";

export default function PostModal() {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => {
    console.log(isVisible);
    setIsVisible(!isVisible);
  };

  return (
    <>
      <li
        className="mt-2 py-4 font-bold text-xl transition-all
                   duration-150 ease-out"
      >
        <Button onClick={showModal}>Postar</Button>
      </li>
      <Modal
        showModal={isVisible}
        title="Criar post"
        onClick={showModal}
        onSubmit={showModal}
      >
        <textarea
          name=""
          className="w-full bg-transparent focus:outline-none text-xl
                          resize-none border-b"
          rows={6}
          placeholder="Digite algo..."
        ></textarea>
      </Modal>
    </>
  );
}
