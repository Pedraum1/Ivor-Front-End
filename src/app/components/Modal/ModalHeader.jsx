import { IoIosClose } from "react-icons/io";

export default function ModalHeader({ title, onClick = () => {} }) {
  return (
    <>
      <header className="flex flex-row justify-between items-center">
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="cursor-pointer">
          <IoIosClose className="text-4xl" onClick={onClick} />
        </div>
      </header>
    </>
  );
}
