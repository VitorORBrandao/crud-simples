import { useCustomQuery } from "../hooks/useCustomQuery";

export function useGetEstoque() {
  return useCustomQuery("estoque", "http://localhost:5000/estoque");
}
