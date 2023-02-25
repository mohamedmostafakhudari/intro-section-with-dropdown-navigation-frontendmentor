import React from "react";
import useWidth from "../hooks/useWidth";
import { useState, useMemo } from "react";
import Menu from "./Menu";
import NavItem from "./NavItem";

const initialNav = [
  {
    title: "Features",
    inner: [
      {
        subTitle: "Todo List",
        iconSrc: "icon-todo.svg",
        iconDesc: "todo",
      },
      {
        subTitle: "Calendar",
        iconSrc: "icon-calendar.svg",
        iconDesc: "calendar",
      },
      {
        subTitle: "Reminders",
        iconSrc: "icon-reminders.svg",
        iconDesc: "reminder",
      },
      {
        subTitle: "Planning",
        iconSrc: "icon-planning.svg",
        iconDesc: "planning",
      },
    ],
    active: false,
  },
  {
    title: "Company",
    inner: [
      {
        subTitle: "History",
        iconSrc: "",
        iconDesc: "",
      },
      {
        subTitle: "Our Team",
        iconSrc: "",
        iconDesc: "",
      },
      {
        subTitle: "Blog",
        iconSrc: "",
        iconDesc: "",
      },
    ],
    active: false,
  },
  {
    title: "Careers",
    inner: [],
    active: false,
  },
  {
    title: "About",
    inner: [],
    active: false,
  },
];
export default function Navbar({
  showMenu,
  setShowMenu,
  navItems,
  setNavItems,
  isMobile,
  onActivateNav,
}) {
  return (
    <nav className="py-4 text-mediumGray">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        {isMobile ? (
          <>
            <div>
              <img src="./assets/images/logo.svg" alt="logo" />
            </div>
            <div onClick={() => setShowMenu(true)} className="cursor-pointer">
              <img src="./assets/images/icon-menu.svg" alt="menu" />
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center">
              <div>
                <img src="./assets/images/logo.svg" alt="logo" />
              </div>
              <ul className="flex items-center gap-8 ml-16">
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
            </div>
            <div className="flex items-center gap-10">
              <button className="duration-200 ease-in-out hover:text-almostBlack">
                <a href="#">Login</a>
              </button>
              <button className="border border-mediumGray rounded-[15px] p-2 px-6 duration-200 ease-in-out hover:text-almostBlack hover:border-almostBlack">
                <a href="#">Register</a>
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
