import { Outlet } from "react-router";

function Button({ onClick, type = "button", className, children }) {
  return (
    <button
      type={type}
      className={
        `w-full text-center bg-ivor-100 text-ivor-950 px-6 py-3 rounded-full` +
        className
      }
      onClick={onClick}
    >
      { children }
    </button>
  );
}

export default Button;
