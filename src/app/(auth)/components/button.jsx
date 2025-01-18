export default function Button({ title }) {
  return (
    <>
      <button
        type="submit"
        className="text-center bg-ivor-500 py-3 text-ivor-50 w-full mt-12
                 hover:bg-ivor-600 transition-colors duration-300 ease-out
                 active:bg-ivor-500"
      >
        <p className="text-xl">{title}</p>
      </button>
    </>
  );
}
