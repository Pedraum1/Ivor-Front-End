import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";

export default function Modal({
  showModal = false,
  title = "",
  onClick = () => {},
  onSubmit = () => {},
  children,
}) {
  return (
    <>
      {showModal === true ? (
        <>
          <div
            className="fixed top-0 left-0 z-10 bg-black w-full h-full bg-opacity-40 cursor-pointer"
            onClick={onClick}
          ></div>
          <article
            className="fixed z-20 bg-ivor-800 py-6 px-12 w-2/5 top-1/2 left-1/2
                          -translate-x-1/2 -translate-y-1/2 text-ivor-50 rounded-xl
                          opacity-100 flex flex-col transition-all duration-300 ease-out"
          >
            <ModalHeader title={title} onClick={onClick}></ModalHeader>
            <main className="pt-4">{children}</main>
            <ModalFooter onSubmit={onClick} />
          </article>
        </>
      ) : (
        ""
      )}
    </>
  );
}
