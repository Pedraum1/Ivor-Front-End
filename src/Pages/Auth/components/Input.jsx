import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

import Eye from "./Eye.jsx";

function Input({ type, className, title, value }) {
  const [hidden, setHidden] = useState(true);

  const changeVisibility = () => {
    setHidden(!hidden);
  };

  return (
    <div className="w-full">
      <label htmlFor={`${title}_input`}>
        <h4 className="text-lg font-medium">{title}</h4>
      </label>
      {type === "password" ? (
        <div className="relative">
          <input
            type={hidden ? "password" : "text"}
            className={`relative w-full mb-2 bg-transparent p-3 px-5 text-lg focus:outline-0 focus:ring-0 border-b border-ivor-300 focus:border-ivor-600 ${className}`}
            value={value}
            id={`${title}_input`}
          />
          <Eye hidden={hidden} onClick={changeVisibility} />
        </div>
      ) : (
        <input
          type={type}
          className={`w-full mb-2 bg-transparent p-3 px-5 text-lg focus:outline-0 focus:ring-0 border-b border-ivor-300 focus:border-ivor-600 ${className}`}
          value={value}
          id={`${title}_input`}
        />
      )}
    </div>
  );
}

export default Input;
