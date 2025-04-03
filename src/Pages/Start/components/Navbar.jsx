import { Link } from "react-router";
import Title from "../../../components/Title.jsx";
import LoginIcon from "@mui/icons-material/Login";
import GitHubIcon from "@mui/icons-material/GitHub";

function Navbar() {
  return (
    <nav className="w-3/4 mx-auto">
      <ul className="py-3 flex flex-row items-center justify-between">
        <li>
          <Link to="/">
            <Title />
          </Link>
        </li>
        <li className="flex flex-row justify-around items-center gap-x-5">
          <Link to="https://github.com/Pedraum1/Ivor-Front-End">
            <p
              className="hidden md:block text-ivor-100 hover:text-ivor-200
                            transition-colors ease-in-out"
            >
              <GitHubIcon /> GitHub
            </p>
          </Link>
          <Link to="/login">
            <div
              className="text-ivor-100 hover:text-ivor-200
                            transition-colors ease-in-out flex flex-row
                            items-center gap-x-1"
            >
              <p className="text-normal hidden md:block ">
                <LoginIcon /> Login
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
