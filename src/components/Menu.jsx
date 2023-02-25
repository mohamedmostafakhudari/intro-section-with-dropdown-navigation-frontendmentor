import React from "react";
import { useState } from "react";
import NavItem from "./NavItem";
import { createPortal } from "react-dom";
// export default function Menu({ children }) {
//   return <>{createPortal(children, document.getElementById("menu"))}</>;
// }
export default function Menu({
  showMenu,
  setShowMenu,
  navItems,
  isMobile,
  onActivateNav,
}) {
  return (
    <>
      {" "}
      {showMenu && <div className="absolute inset-0 bg-black/60"></div>}
      <div
        className={`absolute bg-white w-[65vw] right-0 px-5 inset-y-0 duration-200 ease-in-out origin-right ${
          showMenu ? "scale-x-100" : "scale-x-0"
        }`}
      >
        <div className="py-5 flex justify-end">
          <div onClick={() => setShowMenu(false)} className="cursor-pointer">
            <img src="./assets/images/icon-close-menu.svg" alt="close" />
          </div>
        </div>
        <ul className="text-primary text-mediumGray flex flex-col gap-5">
          {navItems.map((navItem) => (
            <NavItem
              key={navItem.title}
              title={navItem.title}
              inner={navItem.inner}
              active={navItem.active}
              handleActivate={() => onActivateNav(navItem.title)}
              isMobile={isMobile}
            />
          ))}
        </ul>
        <div className="flex flex-col gap-4 text-mediumGray py-4 text-primary">
          <button>
            <a
              href="#"
              className="duration-200 ease-in-out hover:text-almostBlack"
            >
              Login
            </a>
          </button>
          <button className="border border-mediumGray rounded-[15px] py-1 duration-200 ease-in-out hover:border-almostBlack hover:text-almostBlack">
            <a href="#">Register</a>
          </button>
        </div>
      </div>
    </>
  );
}
