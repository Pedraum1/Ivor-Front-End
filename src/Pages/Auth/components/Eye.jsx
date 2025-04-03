import { Visibility, VisibilityOff } from "@mui/icons-material";

function Eye({ hidden = true, onClick }) {
  return (
    <span
      className="absolute right-2 bottom-1/3 cursor-pointer"
      onClick={onClick}
    >
      {hidden ? <Visibility /> : <VisibilityOff />}
    </span>
  );
}

export default Eye;
