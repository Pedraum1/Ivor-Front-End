import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div className="max-h-screen min-h-screen bg-gradient-to-bl from-ivor-600 to-ivor-900 text-ivor-950">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
