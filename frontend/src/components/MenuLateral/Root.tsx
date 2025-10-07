import logo from "../../assets/logo.svg";

type RootProps = {
  children?: React.ReactNode;
};

export const Root = ({ children }: RootProps) => {
  return (
    <div className="h-full min-h-screen flex flex-col border-r border-gray-400 gap-2 bg-white w-72 min-w-72">
      <div className="bg-gradient-to-br from-gray-800 to-gray-800/75 w-full flex h-32 pl-4">
        <img src={logo} alt="Logo" className="w-2/3" />
      </div>
      {children}
    </div>
  );
};
