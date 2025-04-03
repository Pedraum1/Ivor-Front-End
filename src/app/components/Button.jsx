export default function Button({ children, onClick, type = 'button', className }) {
  return (
    <>
      <button
        type={type}
        className={`text-center bg-ivor-100 text-ivor-950 px-6 py-3 rounded-full` + className}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
