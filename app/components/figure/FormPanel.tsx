import { PropsWithChildren } from "react";

export const FormPanel = ({ children }: PropsWithChildren) => {
  return <div className="flex w-full flex-wrap gap-4">{children}</div>;
};

const FormRow = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-1 gap-4">
      {children}
    </div>
  );
};

FormPanel.Row = FormRow;
