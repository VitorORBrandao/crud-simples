import type { ReactNode } from "react";
import logo from "../assets/logo.svg";

type MenuLateralProps = {
  children: ReactNode;
};

const MenuLateral = ({ children }: MenuLateralProps) => {
  return (
    <div className="h-full min-h-screen flex flex-col border-r px-4 bg-white">
      <img src={logo} alt="Logo" className="w-full" />
      <div className="px-10  grow flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default MenuLateral;
