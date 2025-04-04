import { Link } from "react-router";

function Logo() {
  return (
    <Link to="/feed">
      <img src="/logos/logo.png" className="h-24 w-24" />
    </Link>
  );
}

export default Logo;
