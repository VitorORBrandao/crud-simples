import { useQuery } from "@tanstack/react-query";

export const useCustomQuery = (queryKey: string, endereco: string) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await fetch(endereco);
      return response.json();
    },
  });
};
