import type { ReactNode } from "react";

type MenuLateralProps = {
  children: ReactNode;
};

const MenuLateral = ({ children }: MenuLateralProps) => {
  return (
    <>
      <div className="px-10 border flex items-center">
        <p>menu lateral</p>
      </div>
      <div className="px-10 border grow flex justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default MenuLateral;
