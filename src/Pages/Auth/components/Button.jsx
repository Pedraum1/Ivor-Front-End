function Button({ onClick, type = "button", className = "", children }) {
  return (
    <button
      type={type}
      className={
        `w-full text-center bg-ivor-100 active:bg-ivor-200 text-ivor-950 px-6 py-3 hover:cursor-pointer ` +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
