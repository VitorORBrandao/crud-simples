import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="flex h-dvh">
      <Outlet />
    </div>
  );
};
