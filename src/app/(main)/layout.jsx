import LeftBar from "./layout_components/LeftBar.jsx";
import RightBar from "./layout_components/RightBar.jsx";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-screen flex flex-row bg-ivor-950 text-ivor-50 z-0">
        <aside className="min-h-screen w-1/3 flex justify-end pt-5">
          <LeftBar />
        </aside>

        <main className="min-h-screen w-1/3 border-x-2 border-ivor-700">
          {children}
        </main>

        <aside className="min-h-screen w-1/3 flex justify-start pt-5">
          <RightBar />
        </aside>
      </div>
    </>
  );
}
