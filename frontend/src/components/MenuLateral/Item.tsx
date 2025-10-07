import type { JSX } from "react";
import { Link } from "react-router-dom";

type MenuItemProps = {
  name?: string;
  path?: string;
  icon?: JSX.Element;
};

export const Item = ({ icon, name = "Home", path = "/" }: MenuItemProps) => {
  return (
    <div className="w-full h-12 border-r-3 border-blue-500 flex gap-3 items-center p-4 bg-blue-500/12 hover:underline text-gray-800 text-lg">
      {icon && <>{icon}</>}
      <Link to={path}>{name}</Link>
    </div>
  );
};
