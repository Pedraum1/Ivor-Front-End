import CloseIcon from "@mui/icons-material/Close";

function CloseButton({ className = "", onClick = () => {} }) {
  return (
    <span className={`cursor-pointer ` + className} onClick={onClick}>
      <CloseIcon />
    </span>
  );
}

export default CloseButton;
