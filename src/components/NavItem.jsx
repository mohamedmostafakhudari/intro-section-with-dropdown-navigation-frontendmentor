import InnerItems from "./InnerItems";
export default function NavItem({
  title,
  inner,
  active,
  isMobile,
  handleActivate,
}) {
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
