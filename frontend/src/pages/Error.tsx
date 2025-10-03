import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <>
      <p>Página Erro</p>
      <p>
        {error.internal
          ? `${error.status} - ${error.statusText}`
          : error.message}
      </p>
    </>
  );
};
