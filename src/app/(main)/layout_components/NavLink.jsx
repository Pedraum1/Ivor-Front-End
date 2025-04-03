import Link from "next/link";

export default function NavLink({ route, children }) {
  return (
    <>
      <li
        className="hover:bg-ivor-800 mt-2 p-4 font-bold
                   text-xl me-16 cursor-pointer rounded-md transition-all
                   duration-150 ease-out"
      >
        <Link href={route}>{children}</Link>
      </li>
    </>
  );
}
