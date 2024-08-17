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

          <ul className="flex items-center gap-9 text-semi-bold-sm font-semibold text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-light-coral" : "text-white"
              }
            >
              <li className="transition-colors duration-200 hover:text-light-coral">
                home
              </li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-light-coral" : "text-white"
              }
            >
              <li className="transition-colors duration-200 hover:text-light-coral">
                about
              </li>
            </NavLink>
          </ul>
        </div>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive && "rounded-3xl bg-white text-state-green"
          }
        >
          <li className="text-semibold-sm flex items-center gap-2 rounded-3xl border-2 px-8 py-2 font-semibold text-white transition-colors duration-200">
            contact us
          </li>
        </NavLink>
      </div>
    </nav>
  );
}
