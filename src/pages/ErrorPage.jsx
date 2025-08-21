import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Oops! An error occurred.</h1>
      {error && <p className="text-red-500">{error.data}</p>}
      <NavLink to="/">
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Go Home</button>
      </NavLink>
    </section>
  );
};
