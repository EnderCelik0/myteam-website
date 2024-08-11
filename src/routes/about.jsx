export default function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 font-livvic selection:bg-midnight-green">
      <h1 className="selection:text-white text-bold-md">About</h1>
      <p className="text-semi-bold-sm font-semibold">
        This is a simple website to demonstrate how to use the{" "}
        <a
          href="https://github.com/tailwindlabs/tailwindcss-typography"
          className="underline"
        >
          tailwindcss-typography
        </a>{" "}
        plugin.
      </p>
      <p className="opacity-80">
        <i>
          Made with ❤️ by{" "}
          <a href="https://twitter.com/tailwindcss" className="underline">
            Tailwind CSS
          </a>
        </i>
      </p>
    </div>
  );
}
