export default function InnerItem({ iconSrc, iconDesc, subTitle }) {
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
