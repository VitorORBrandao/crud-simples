import {
  PiCaretDoubleLeftBold,
  PiCaretDoubleRightBold,
  PiCaretLeftBold,
  PiCaretRightBold,
} from "react-icons/pi";

type Props = {
  table: any;
};

const Paginacao = ({ table }: Props) => {
  return (
    <div id="pagination" className="p-6 border-t border-gray-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <p className="text-gray-500">Resultados por página:</p>
          <select
            className="border p-1 rounded w-16 border-gray-300 h-9"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <p className="text-gray-500">Ir para</p>
          <span className="">
            <input
              type="number"
              min="1"
              max={table.getPageCount()}
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16 border-gray-300 h-9"
            />
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="cursor-pointer text-gray-500"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <PiCaretDoubleLeftBold />
          </button>
          <button
            className="cursor-pointer text-gray-500"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <PiCaretLeftBold />
          </button>
          <span className="flex items-center gap-1">
            {table.getState().pagination.pageIndex + 1} de{" "}
            {table.getPageCount().toLocaleString()}
          </span>
          <button
            className="cursor-pointer text-gray-500"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <PiCaretRightBold />
          </button>
          <button
            className="cursor-pointer text-gray-500"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            <PiCaretDoubleRightBold />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paginacao;
