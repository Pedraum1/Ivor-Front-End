"use client";

import { useState, useRef } from "react";
import { IoIosClose } from "react-icons/io";

export default function PhotoInput() {
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(e.target.result);
    };

    reader.onerror = () => {
      console.error("Erro ao ler o arquivo");
    };

    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        <div htmlFor="photo" className="cursor-pointer" onClick={handleClick}>
          <img
            src={image ? image : "/general/noProfile.webp"}
            className="h-40 object-cover max-w-40 rounded-full"
            alt="Foto de perfil"
          />
        </div>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
          ref={inputRef}
        />
        {image && (
          <button
            type="button"
            className="absolute p-2 rounded-full bg-neutral-800 bg-opacity-70"
            onClick={handleRemoveImage}
          >
            <IoIosClose className="text-4xl" />
          </button>
        )}
      </div>
    </>
  );
}
