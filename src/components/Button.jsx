function Button({
  children,
  onClick = () => {},
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      className={
        `text-center bg-ivor-100 text-ivor-950 hover:bg-ivor-50 hover:text-ivor-900 active:bg-ivor-200 active:text-ivor-950 ease-in-out duration-150 px-6 py-3 rounded-full cursor-pointer ` +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
