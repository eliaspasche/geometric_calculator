import { PropsWithChildren } from "react";

interface PropsType {
  title: string;
}

export const Header = ({ title, children }: PropsWithChildren<PropsType>) => {
  return (
    <>
      <header
        className="container max-w-screen-xl mx-auto py-8"
        color="content2"
      >
        <p className="text-2xl font-bold ml-4">{title}</p>
      </header>
      <div className="container max-w-screen-xl mx-auto py-8">{children}</div>
    </>
  );
};
