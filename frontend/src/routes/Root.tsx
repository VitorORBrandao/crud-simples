import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex h-dvh bg-blue-50">
      <Outlet />
    </div>
  );
};

export default Root;
