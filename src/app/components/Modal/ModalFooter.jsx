export default function ModalFooter({ onSubmit = () => {} }) {
  return (
    <>
      <footer className="flex flex-row justify-between">
        <div></div>
        <div className="w-fit pt-4">
          <button
            className="bg-ivor-400 hover:bg-ivor-500 transition-colors
                                      duration-300 ease-out px-4 py-2 rounded-lg"
            onClick={onSubmit}
          >
            Enviar
          </button>
        </div>
      </footer>
    </>
  );
}
