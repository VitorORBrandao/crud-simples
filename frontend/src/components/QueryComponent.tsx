import { Spinner } from "./Spinner";
import { Tabela } from "./Tabela/Tabela";

type Props = {
  queryFunction: () => {
    data: any;
    isFetching: boolean;
    isSuccess: boolean;
    isError: boolean;
  };
};
export const QueryComponent = ({ queryFunction }: Props) => {
  const { data, isFetching, isSuccess } = queryFunction();

  return (
    <>
      {isFetching && <Spinner />}
      {isSuccess && <Tabela data={data} />}
      {!isFetching && !isSuccess && <p>Erro ao carregar os dados.</p>}
    </>
  );
};
