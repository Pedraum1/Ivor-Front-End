import Title from "./Title";
import { FaGithub } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="w-3/4 mx-auto">
        <ul className="py-3 flex flex-row items-center justify-between">
          <li>
            <Link href="/">
              <Title />
            </Link>
          </li>
          <li className="flex flex-row justify-around items-center gap-x-5">
            <Link href="https://github.com/Pedraum1/Ivor-Front-End">
              <p
                className="hidden md:block text-4xl text-ivor-100 hover:text-ivor-200
                            transition-colors ease-in-out"
              >
                <FaGithub />
              </p>
            </Link>
            <Link href="/login">
              <div
                className="text-ivor-100 hover:text-ivor-200
                            transition-colors ease-in-out flex flex-row
                            items-center gap-x-1"
              >
                <FaUser className="text-3xl" />
                <p className="text-normal hidden md:block ">Login</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
