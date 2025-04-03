import { Link } from "react-router";
import Navbar from "./components/Navbar.jsx";
import LaunchIcon from "@mui/icons-material/Launch";

function App() {
  return (
    <>
      {/* Background container with gradient styling */}
      <div
        className="bg-gradient-to-b from-ivor-900 via-ivor-600
                 to-ivor-900 min-h-screen"
      >
        <header>
          <Navbar />
        </header>

        <main>
          {/* Article containing the main heading and action buttons */}
          <article
            className="my-48 flex flex-col items-start justify-between w-[90%] sm:w-5/6
                       md:w-3/4 lg:w-7/12 mx-auto"
          >
            {/* Main heading */}
            <h1
              className="xl:text-[6rem] lg:text-[5rem] md:text-[4rem] text-[3rem]
                         font-bold xl:tracking-tight text-center leading-none
                         text-ivor-100 mx-auto"
            >
              Conecte-se ao mundo com a Ivor
            </h1>

            {/* Section containing action buttons */}
            <section className="mx-auto font-semibold flex flex-row gap-x-4 mt-12">
              {/* Button to navigate to the registration page */}
              <Link to="/register">
                <button
                  className="px-4 py-3 bg-ivor-200 hover:bg-ivor-300
                             rounded-full transition-all ease-in-out
                             hover:-translate-y-1 active:translate-y-0
                             active:ease-out"
                >
                  Criar conta
                </button>
              </Link>
              {/* Button linking to the GitHub repository */}
              <Link to="https://github.com/Pedraum1/Ivor-Front-End">
                <button
                  className="flex flex-row items-center gap-x-1 bg-ivor-500
                         hover:bg-ivor-600 px-4 py-3 rounded-full
                           transition-all ease-in-out hover:-translate-y-1
                           active:translate-y-0 active:ease-out"
                >
                  <p>GitHub</p> <LaunchIcon />
                </button>
              </Link>
            </section>
          </article>
        </main>

        {/* Footer section with developer credits */}
        <article
          className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-5
                   text-ivor-100 text-sm md:text-lg w-full text-center"
        >
          Developed by Pedraum1
        </article>
      </div>
    </>
  );
}

// Export the App component as default
export default App;
