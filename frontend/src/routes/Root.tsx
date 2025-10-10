import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="flex h-dvh bg-slate-200 font-roboto">
      <Outlet />
    </div>
  );
};
