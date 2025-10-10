import { estoqueService } from "@/services/estoque.service";
import type { produtosEstoque } from "@/types/produtosEstoque.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEstoqueMutations = () => {
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: (item: Omit<produtosEstoque, "id" & "porcentual_lucro">) =>
      estoqueService.create(item),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["estoque"] });
    },
  });
  const update = useMutation({
    mutationFn: (payload: { id: number; item: Partial<produtosEstoque> }) =>
      estoqueService.update(payload.id, payload.item),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["estoque"] });
    },
  });
  const remove = useMutation({
    mutationFn: (id: number) => estoqueService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["estoque"] });
    },
  });

  return { create, update, remove };
};
