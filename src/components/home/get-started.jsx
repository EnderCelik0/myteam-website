import { NavLink } from "react-router-dom";

export default function GetStarted() {
  return (
    <div className="flex h-[12.5rem] items-center justify-center text-state-green">
      <div className="flex w-full items-center justify-between px-20">
        <h1 className="z-10 text-bold-sm font-bold">Ready to get started?</h1>

        <div>
          <NavLink to="/contact">
            <button className="text-semibold-sm  hover:text-white flex items-center gap-2 rounded-3xl border-2 border-state-green px-8 py-2 font-semibold transition-colors duration-200 hover:bg-state-green">
              contact us
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
