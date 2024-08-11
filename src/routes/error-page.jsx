import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="selection:text-white flex min-h-screen flex-col items-center justify-center gap-8 font-livvic selection:bg-midnight-green">
      <h1 className="text-bold-md">Oops!</h1>
      <p className="text-semi-bold-sm font-semibold">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="opacity-60">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        className="text-white rounded-3xl bg-midnight-green px-4 py-2 text-semi-bold-sm font-semibold transition-colors duration-300 hover:bg-police-blue"
      >
        Go back
      </Link>
    </div>
  );
}
