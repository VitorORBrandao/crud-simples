import { useQuery } from "@tanstack/react-query";
import { FiSearch } from "react-icons/fi";
import { PiPlus } from "react-icons/pi";
import { Tabela } from "../components/Tabela/Tabela";

export const EstoquePage = () => {
  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ["estoque"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/estoque");
      return response.json();
    },
  });

  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <main className="w-full h-full bg-white flex flex-col rounded-lg border border-gray-300">
        <div className="w-full p-6 flex items-center justify-between">
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden h-10 gap-2 px-2">
            <FiSearch size={16} />
            <input
              aria-label="Buscar"
              className="flex-1 outline-none"
              placeholder="Buscar..."
            />
          </div>
          <button
            className="cursor-pointer"
            onClick={() => alert("Adicionar novo item")}
          >
            <PiPlus size={24} />
          </button>
        </div>
        {isFetching ? (
          <p>Carregando...</p>
        ) : isSuccess ? (
          <Tabela data={data} />
        ) : (
          <p>Erro ao carregar os dados.</p>
        )}
      </main>
    </div>
  );
};
