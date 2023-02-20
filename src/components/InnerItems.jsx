import InnerItem from "./InnerItem";

export default function InnerItems({ items, active }) {
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
