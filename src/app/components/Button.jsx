export default function Button({ children, action }) {
  return (
    <>
      <button
        className="text-center bg-ivor-100 text-ivor-950 px-6 py-3 rounded-full"
        onClick={action}
      >
        {children}
      </button>
    </>
  );
}
