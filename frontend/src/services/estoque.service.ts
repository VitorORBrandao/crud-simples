import type { produtosEstoque } from "@/types/produtosEstoque.types";
import axios from "./axios";

export const estoqueService = {
  async getAll(): Promise<Omit<produtosEstoque, "porcentual_lucro">[]> {
    const res = await axios.get("/v1/estoque");
    return res.data;
  },

  async getById(
    id: number
  ): Promise<Omit<produtosEstoque, "porcentual_lucro">[]> {
    // const res = await axios.get(`/v1/estoque/${id}`);
    const res = await axios.get("/v1/estoque", { params: { id } });
    return [res.data];
  },

  async create(
    body: Omit<produtosEstoque, "id" & "porcentual_lucro">
  ): Promise<Omit<produtosEstoque, "porcentual_lucro">> {
    const res = await axios.post("/v1/estoque", { body });
    return res.data;
  },

  async update(
    id: number,
    body: Partial<produtosEstoque>
  ): Promise<Omit<produtosEstoque, "porcentual_lucro">> {
    const res = await axios.patch("/v1/estoque", { params: { id }, body });
    return res.data;
  },

  async delete(id: number): Promise<void> {
    await axios.delete("/v1/estoque", { params: { id } });
  },
};
