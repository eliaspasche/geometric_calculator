import { Justify } from "@/app/components/justify";

interface PropsType {
  label: string;
  value: string;
  justify?: boolean;
  textEnd?: boolean;
}

export const ValueTile = (props: PropsType) => {
  const valueTile = (
    <div>
      <p className={`text-sm font-light ${props.textEnd && "text-end"}`}>
        {props.label}
      </p>
      <p className={`text-medium font-bold ${props.textEnd && "text-end"}`}>
        {props.value}
      </p>
    </div>
  );

  if (props.justify) {
    return <Justify>{valueTile}</Justify>;
  }

  return valueTile;
};
