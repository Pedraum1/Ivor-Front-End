import Link from "next/link";
import Navbar from "./components/Navbar";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div
        className="bg-gradient-to-b from-ivor-900 via-ivor-600
                 to-ivor-900 min-h-screen text-ivor-950"
      >
        <header>
          <Navbar />
        </header>

        <main>
          <article
            className="my-48 flex flex-col items-start justify-between w-[90%] sm:w-5/6
                       md:w-3/4 lg:w-7/12 mx-auto"
          >
            <h1
              className="xl:text-[6rem] lg:text-[5rem] md:text-[4rem] text-[3rem]
                         font-bold xl:tracking-tight text-center leading-none
                         text-ivor-100 mx-auto"
            >
              Conecte-se ao mundo com a Ivor
            </h1>

            <section className="mx-auto font-semibold flex flex-row gap-x-4 mt-12">
              <Link href="/register">
                <button
                  className="px-4 py-3 bg-ivor-200 hover:bg-ivor-300
                             rounded-full transition-all ease-in-out
                             hover:-translate-y-1 active:translate-y-0
                             active:ease-out"
                >
                  Criar conta
                </button>
              </Link>
              <Link href="https://github.com/Pedraum1/Ivor-Front-End">
                <button
                  className="flex flex-row items-center gap-x-1 bg-ivor-500
                         hover:bg-ivor-600 px-4 py-3 rounded-full
                           transition-all ease-in-out hover:-translate-y-1
                           active:translate-y-0 active:ease-out"
                >
                  <p>GitHub</p> <FaArrowUpRightFromSquare />
                </button>
              </Link>
            </section>
          </article>
        </main>
        <article
          className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-5
                   text-ivor-100"
        >
          Developed by Vikings - Web Developer
        </article>
      </div>
    </>
  );
}
