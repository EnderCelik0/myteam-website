import { NavLink } from "react-router-dom";
import logoMain from "../assets/logo/logo-main.svg";
import pinterest from "../assets//icon/icon-pinterest.svg";
import facebook from "../assets//icon/icon-facebook.svg";
import twitter from "../assets//icon/icon-twitter.svg";

export default function Footer() {
  return (
    <footer className="text-white flex h-[12.25rem] items-center">
      <div className="flex w-full justify-between">
        <div className="flex gap-[7.813rem]">
          <div className="flex flex-col gap-6">
            <img src={logoMain} alt="myteam-logo" className="max-w-full" />
            <ul className="flex justify-between gap-4 pr-3">
              <li>
                <NavLink to="/">home</NavLink>
              </li>
              <li>
                <NavLink to="/about">about</NavLink>
              </li>
            </ul>
          </div>

          <div className="text-white/30 flex flex-col text-semi-bold-xs">
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us: 949-833-7432</p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex gap-4 self-end">
            <img src={facebook} alt="pinterest" />
            <img src={pinterest} alt="pinterest" />
            <img src={twitter} alt="pinterest" />
          </div>
          <div>
            <p className="text-white text-semi-bold-xs">
              Copyright 2020. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
