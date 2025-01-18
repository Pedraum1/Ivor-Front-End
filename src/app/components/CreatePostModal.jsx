"use client";
import { useState } from "react";
import ProfileImage from "./ProfileImage";

import { IoIosClose } from "react-icons/io";
import Button from "./Button";

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
        <Button action={showModal}>Postar</Button>
      </li>
      {isVisible === true ? (
        <>
          <div className="fixed top-0 left-0 z-10 bg-black w-full h-full bg-opacity-40 cursor-pointer" onClick={showModal}></div>
            <article
              className="absolute z-20 bg-ivor-800 py-6 px-12 w-2/5 top-1/3 left-1/2
                      -translate-x-1/2 -translate-y-1/2 text-ivor-50 rounded-xl
                      opacity-100 flex flex-col"
            >
              <section className="flex flex-row justify-between items-center">
                <ProfileImage />
                <div className="cursor-pointer">
                  <IoIosClose className="text-4xl" onClick={showModal} />
                </div>
              </section>
              <section className="mt-6">
                <textarea
                  name=""
                  className="w-full bg-transparent focus:outline-none text-xl
                          resize-none border-b"
                  rows={6}
                  placeholder="Digite algo..."
                ></textarea>
              </section>
              <section className="flex flex-row justify-between">
                <div></div>
                <div className="w-fit pt-4">
                  <button
                    className="bg-ivor-400 hover:bg-ivor-500 transition-colors
                                  duration-300 ease-out px-4 py-2 rounded-lg"
                  >
                    Enviar
                  </button>
                </div>
              </section>
            </article>
        </>
      ) : (
        ""
      )}
    </>
  );
}
