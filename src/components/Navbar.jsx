import React from "react";
import useWidth from "../hooks/useWidth";
import { useState, useMemo } from "react";
import Menu from "./Menu";
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
export default function Navbar() {
  const { width } = useWidth();
  const [showMenu, setShowMenu] = useState(false);
  const [navItems, setNavItems] = useState(initialNav);
  const isMobile = useMemo(() => {
    return width <= 768;
  }, [width]);
  function handleActivate(title) {
    const newNavItems = navItems.map((item) => {
      if (item.title === title) {
        return {
          ...item,
          active: !item.active,
        };
      } else {
        return item;
      }
    });
    setNavItems(newNavItems);
  }
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
            <Menu>
              {showMenu && <div className="absolute inset-0 bg-black/60"></div>}
              <div
                className={`absolute bg-white w-[65vw] right-0 px-5 inset-y-0 duration-200 ease-in-out translate-x-full ${
                  showMenu && "translate-x-1"
                }`}
              >
                <div className="py-5 flex justify-end">
                  <div
                    onClick={() => setShowMenu(false)}
                    className="cursor-pointer"
                  >
                    <img
                      src="./assets/images/icon-close-menu.svg"
                      alt="close"
                    />
                  </div>
                </div>
                <ul className="text-primary text-mediumGray flex flex-col gap-5">
                  {navItems.map((navItem) => (
                    <NavItem
                      key={navItem.title}
                      title={navItem.title}
                      inner={navItem.inner}
                      active={navItem.active}
                      handleActivate={() => handleActivate(navItem.title)}
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
                  <button className="border border-mediumGray rounded-[15px] py-2 duration-200 ease-in-out hover:border-almostBlack hover:text-almostBlack">
                    <a href="#">Register</a>
                  </button>
                </div>
              </div>
            </Menu>
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
                    handleActivate={() => handleActivate(navItem.title)}
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

function NavItem({ title, inner, active, isMobile, handleActivate }) {
  return (
    <li
      onClick={handleActivate}
      className={`flex flex-col items-start gap-2 cursor-pointer relative select-none group duration-200 ease-in-out ${
        active && inner.length > 0 && "text-almostBlack"
      } hover:text-almostBlack md:flex-row md:items-center`}
    >
      <div className="flex items-center gap-4">
        <div>{title}</div>
        {inner.length > 0 && (
          <>
            <div>
              <img
                src={`./assets/images/${
                  active ? "icon-arrow-up" : "icon-arrow-down"
                }.svg`}
                alt=""
                className=""
                style={{
                  filter: `${
                    active
                      ? "invert(0%) sepia(2%) saturate(8%) hue-rotate(346deg) brightness(50%) contrast(102%)"
                      : ""
                  }`,
                }}
              />
            </div>
          </>
        )}
      </div>
      {inner.length > 0 && (
        <>
          <div
            className={`bg-white rounded-lg top-0 right-0 duration-200 ease-in-out min-w-[140px] text-mediumGray overflow-hidden opacity-0 pointer-events-none -translate-y-10 ${
              active && "opacity-100 translate-y-0 md:translate-y-10"
            }  group-even:left-0 pointer-events-auto md:shadow-xl md:absolute`}
          >
            <InnerItems items={inner} active={active} />
          </div>
        </>
      )}
    </li>
  );
}
function InnerItems({ items, active }) {
  return (
    <ul className={`flex flex-col gap-3 py-3 ${!active && "hidden"} md:py-5`}>
      {items.map(({ iconSrc, iconDesc, subTitle }) => (
        <InnerItem
          key={subTitle}
          iconSrc={iconSrc}
          iconDesc={iconDesc}
          subTitle={subTitle}
        />
      ))}
    </ul>
  );
}
function InnerItem({ iconSrc, iconDesc, subTitle }) {
  return (
    <li className="flex gap-4 items-center px-6">
      {iconSrc !== "" && (
        <>
          {" "}
          <div className="w-[17px] text-center">
            <img
              src={`./assets/images/${iconSrc}`}
              alt={iconDesc}
              className="w-full"
            />
          </div>
        </>
      )}

      <div className="whitespace-nowrap">{subTitle}</div>
    </li>
  );
}
