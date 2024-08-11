export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 font-livvic selection:bg-midnight-green">
      <h1 className="selection:text-white text-bold-md">Contact</h1>
      <p className="text-semi-bold-sm font-semibold">
        If you have any questions or feedback, please don&apos;t hesitate to
        contact us.
      </p>
      <p className="opacity-60 rounde">
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
