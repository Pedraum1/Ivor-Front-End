import { Outlet } from "react-router";
import LeftBar from "./components/LeftBar.jsx";
import RightBar from "./components/RightBar.jsx";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-row bg-ivor-950 text-ivor-50 z-0">
      <aside className="min-h-screen w-1/3 flex justify-end pt-5">
        <LeftBar />
      </aside>

      <main className="min-h-screen w-1/3 border-x-2 border-ivor-700">
        <Outlet />
      </main>

      <aside className="min-h-screen w-1/3 flex justify-start pt-5">
        <RightBar />
      </aside>
    </div>
  );
}

export default AppLayout;
