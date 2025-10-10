import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import useConfiguracaoColunas from "./ConfigaracaoColunas";
import Paginacao from "./Paginacao";
import type { produtosEstoque } from "../../types/produtosEstoque.types";

export const Tabela = ({
  data,
}: {
  data: Omit<produtosEstoque, "porcentual_lucro">[];
}) => {
  const columns = useConfiguracaoColunas();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w-full h-full flex flex-col justify-between overflow-y-scroll">
      <table className="w-full border-colapse">
        <thead className="border-0 h-12 border-b border-t border-gray-300 bg-gray-200">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="font-medium">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, idx) => (
            <tr
              key={row.id}
              className={
                idx % 2 != 0
                  ? "bg-gray-100 border-b border-gray-200"
                  : " border-b border-gray-200"
              }
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="max-h-1 px-2 py-1 text-center font-light font-noto"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Paginacao table={table} />
    </div>
  );
};

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
