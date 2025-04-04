import CloseButton from "./CloseButton.jsx";

function Modal({
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
            className="fixed top-0 left-0 z-10 bg-black w-full h-full opacity-40 cursor-pointer"
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

function ModalHeader({ title, onClick }) {
  return (
    <header className="flex flex-row justify-between items-center">
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="cursor-pointer">
        <CloseButton onClick={onClick} />
      </div>
    </header>
  );
}

function ModalFooter({ onSubmit = () => {} }) {
  return (
    <footer className="flex flex-row justify-between">
      <div></div>
      <div className="w-fit pt-4">
        <button
          className="bg-ivor-400 hover:bg-ivor-500 transition-colors duration-300 ease-out px-4 py-2 rounded-lg cursor-pointer"
          onClick={onSubmit}
        >
          Enviar
        </button>
      </div>
    </footer>
  );
}

export default Modal;
