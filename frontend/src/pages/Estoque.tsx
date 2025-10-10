import { FiSearch } from "react-icons/fi";
import { PiPlus } from "react-icons/pi";
import { QueryBoundary } from "../components/QueryComponent";
import { Tabela } from "@/components/Tabela/Tabela";
import { useEstoqueQuery } from "@/hooks/useEstoqueQuery";

export const EstoquePage = () => {
  const { data, isLoading, isError, error } = useEstoqueQuery();

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
        <QueryBoundary
          data={data}
          isLoading={isLoading}
          isError={isError}
          error={error}
          emptyState={<p>Nenhum item no estoque.</p>}
        >
          {(data) => <Tabela data={data} />}
        </QueryBoundary>
      </main>
    </div>
  );
};
