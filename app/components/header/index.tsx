import { PropsWithChildren } from "react";

interface PropsType {
  title: string;
}

export const Header = ({ title, children }: PropsWithChildren<PropsType>) => {
  return (
    <>
      <header className="px-8 py-5 text-xl border-b" color="content2">
        {title}
      </header>
      <div className="container mx-auto py-4">{children}</div>
    </>
  );
};
