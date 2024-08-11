export default function Header() {
  return (
    <div className="grid grid-cols-2 items-end pb-52 pt-28">
      <div>
        <h1 className="text-white flex flex-col text-bold-lg leading-none">
          Find the
          <span>
            best{" "}
            <span className="text-light-coral selection:text-light-coral">
              talent
            </span>
          </span>
        </h1>
      </div>
      <div className="px-20 before:absolute before:top-1/4 before:h-1 before:w-12 before:bg-rapture-blue">
        <p className="text-white">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
    </div>
  );
}
