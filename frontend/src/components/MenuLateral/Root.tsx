import logo from "../../assets/logo.svg";

type RootProps = {
  children?: React.ReactNode;
};

export const Root = ({ children }: RootProps) => {
  return (
    <div className="h-full min-h-screen flex flex-col border-r px-4 bg-white w-72">
      <img src={logo} alt="Logo" className="w-full" />
      <div className="px-10  grow flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};
