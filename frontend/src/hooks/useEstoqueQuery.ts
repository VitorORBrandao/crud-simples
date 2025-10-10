import { estoqueService } from "@/services/estoque.service";
import type { produtosEstoque } from "@/types/produtosEstoque.types";
import { useQuery } from "@tanstack/react-query";

export const useEstoqueQuery = (id?: number, enabled = true) => {
  return useQuery<Omit<produtosEstoque, "porcentual_lucro">[]>({
    queryKey: id ? ["estoque", { id }] : ["estoque"],
    queryFn: () => (id ? estoqueService.getById(id) : estoqueService.getAll()),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
    enabled,
  });
};
