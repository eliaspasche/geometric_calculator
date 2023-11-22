import { ReactNode } from "react";

interface PropsType {
  label: string;
  value: ReactNode;
}

export const ValueTile = (props: PropsType) => {
  return (
    <div>
      <p className="text-sm font-light">{props.label}</p>
      <p className="text-medium font-bold">{props.value}</p>
    </div>
  );
};
