"use client";

import { useRouter } from "next/navigation";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function Return() {
  const router = useRouter();
  const getBack = () => {
    router.back();
  };

  return (
    <>
      <button onClick={getBack}>
        <FaLongArrowAltLeft className="text-xl" />
      </button>
    </>
  );
}
