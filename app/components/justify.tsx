import { PropsWithChildren } from "react";

export const Justify = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col justify-center items-center">{children}</div>
  );
};
