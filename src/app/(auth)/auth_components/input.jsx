"use client";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useState } from "react";

export default function Input({ type, name, title }) {
  const [inputType, setInputType] = useState(type);

  return (
    <>
      <div>
        <label htmlFor={name} className="text-start text-xl font-medium ms-4">
          {title}
        </label>

        <div className="relative">
          <input
            type={inputType}
            name={name}
            id={name}
            className="w-full border-b bg-ivor-50 border-ivor-200 pt-3 px-4 pb-1
                   focus:outline-none text-lg font-medium focus:border-ivor-500
                   mb-8 block"
          />
          {type == "password" ? (
            inputType == "password" ? (
              <IoEyeOutline
                className="absolute right-5 -translate-y-1/2 top-1/2 text-2xl
                           cursor-pointer"
                onClick={() => setInputType(hidePassword(inputType))}
              />
            ) : (
              <IoEyeOffOutline
                className="absolute right-5 -translate-y-1/2 top-1/2 text-2xl
                           cursor-pointer"
                onClick={() => setInputType(hidePassword(inputType))}
              />
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

function hidePassword(currentType) {
  if (currentType == "password") {
    return "text";
  }

  if (currentType == "text") {
    return "password";
  }
}
