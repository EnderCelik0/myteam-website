import { NavLink } from "react-router-dom";
import logoMain from "../assets/logo/logo-main.svg";

export default function Nav() {
  return (
    <nav className="py-10">
      <div className="flex items-center justify-between">
        <div className="flex gap-16">
          <div>
            <NavLink to="/">
              <img src={logoMain} alt="myteam-logo" className="" />
            </NavLink>
          </div>

          <ul className="text-white flex items-center gap-9 text-semi-bold-sm font-semibold">
            <li className="transition-colors duration-200 hover:text-light-coral">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-light-coral" : "text-white"
                }
              >
                home
              </NavLink>
            </li>
            <li className="transition-colors duration-200 hover:text-light-coral">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-light-coral" : "text-white"
                }
              >
                about
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <NavLink to="/contact">
            <button className="text-semibold-sm border-white text-white hover:bg-white hover:text-dark-green flex items-center gap-2 rounded-3xl border-2 px-8 py-2 font-semibold transition-colors duration-200">
              contact us
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
