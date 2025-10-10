import React from "react";

interface QueryBoundaryProps<T> {
  /** React Query's data */
  data?: T;
  /** Is query currently loading? */
  isLoading: boolean;
  /** Is there an error? */
  isError: boolean;
  /** Optional error object */
  error?: Error | null;
  /** Render function for successful state */
  children: (data: T) => React.ReactNode;
  /** Optional UI for empty data */
  emptyState?: React.ReactNode;
  /** Optional UI override for loading state */
  loadingState?: React.ReactNode;
  /** Optional UI override for error state */
  errorState?: React.ReactNode;
  /** Function to define when data is considered empty */
  isEmpty?: (data: T) => boolean;
}

export function QueryBoundary<T>({
  data,
  isLoading,
  isError,
  error,
  children,
  emptyState,
  loadingState,
  errorState,
  isEmpty = (d) =>
    Array.isArray(d)
      ? d.length === 0
      : d == null || Object.keys(d).length === 0,
}: QueryBoundaryProps<T>) {
  if (isLoading)
    return (
      <div className="flex justify-center items-center py-6">
        {loadingState ?? (
          <p className="text-gray-500 animate-pulse">Carregando...</p>
        )}
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center py-6">
        {errorState ?? (
          <p className="text-red-500">
            Erro ao carregar dados: {error?.message ?? "Erro desconhecido"}
          </p>
        )}
      </div>
    );

  if (data && isEmpty(data))
    return (
      <div className="flex justify-center items-center py-6">
        {emptyState ?? <p className="text-gray-500">Nenhum dado encontrado.</p>}
      </div>
    );

  return <>{data && children(data)}</>;
}
