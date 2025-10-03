import logo from "../assets/logo.svg";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";

export const LoginPage = () => {
  return (
    <div className="bg-neutral-800 flex justify-center flex-col items-center w-full h-full min-h-screen">
      <img src={logo} alt="Logo" className=" absolute top-8" />

      <Card
        className="p-4 bg-white shadow-md rounded-md flex flex-col gap-4 items-center border border-orange-600 w-1/6 min-w-96"
        title="Login"
      >
        <Input
          label="Email"
          type="email"
          placeholder="Digite seu email"
          className="border border-gray-300 p-2 rounded-md w-full"
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          className="border border-gray-300 p-2 rounded-md w-full"
        />
        <Button
          label="Entrar"
          onClick={() => alert("Clicou no botão!")}
          className="bg-orange-600 text-white py-2 px-4 rounded-md w-full"
        />
      </Card>
    </div>
  );
};
