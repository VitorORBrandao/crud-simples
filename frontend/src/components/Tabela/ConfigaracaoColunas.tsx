import type { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { PiEye, PiPencil, PiTrash } from "react-icons/pi";
import type { produtosEstoque } from "../../types/produtosEstoque.types";

const useConfiguracaoColunas = (): ColumnDef<produtosEstoque>[] => {
  return useMemo(
    () => [
      // {
      //   header: "Produtos Estoque",
      //   id: "produtosEstoque",
      //   columns: [
      {
        header: "Nome Produto",
        accessorKey: "nome_produto",
        // size: 100,
        cell: (info) => (
          <span className="flex justify-start">{info.getValue<string>()}</span>
        ),
      },
      {
        header: "Quantidade",
        accessorKey: "quantidade",
        // size: 100,
        cell: (info) => info.getValue<number>(),
      },
      {
        header: "CUE",
        accessorKey: "cue",
        // size: 100,
        cell: (info) => {
          console.log(info.row.original);
          return info.getValue() ? (
            <span>
              {"R$ "}
              {Number(info.getValue()).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </span>
          ) : (
            "-"
          );
        },
      },
      {
        header: "MPM",
        accessorKey: "mpm",
        // size: 100,
        cell: (info) => {
          console.log(info.row.original);
          return info.getValue() ? (
            <span>
              {"R$ "}
              {Number(info.getValue()).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </span>
          ) : (
            "-"
          );
        },
      },
      {
        header: "Preço",
        accessorKey: "preco",
        // size: 100,
        cell: (info) => {
          console.log(info.row.original);
          return info.getValue() ? (
            <span>
              {"R$ "}
              {Number(info.getValue()).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </span>
          ) : (
            "-"
          );
        },
      },
      {
        header: "%",
        id: "porcentagem",
        // size: 100,
        cell: (info) => {
          const cost =
            info.row.original.cue > info.row.original.mpm
              ? info.row.original.cue
              : info.row.original.mpm;

          const margin =
            ((info.row.original.preco - cost) / info.row.original.preco) * 100;

          return (
            <span
              className={
                margin <= 25
                  ? "text-red-400"
                  : margin < 55
                  ? "text-yellow-400"
                  : "text-green-400"
              }
            >
              {margin.toLocaleString("pt-BR", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })}
              %
            </span>
          );
        },
      },
      {
        header: "Ações",
        id: "acoes",
        // size: 100,
        cell: (info) => (
          <div className="flex justify-center items-center gap-2">
            <button className="text-neutral-400 text-xl cursor-pointer hover:text-blue-500">
              <PiEye />
            </button>
            <button className="text-neutral-400 text-xl cursor-pointer hover:text-amber-500">
              <PiPencil />
            </button>
            <button className="text-neutral-400 text-xl cursor-pointer hover:text-red-500">
              <PiTrash />
            </button>
          </div>
        ),
      },
    ],
    //   },
    // ],
    []
  );
};

export default useConfiguracaoColunas;
