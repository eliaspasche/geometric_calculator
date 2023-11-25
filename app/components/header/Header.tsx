import { PropsWithChildren } from "react";

interface PropsType {
  title: string;
}

export const Header = ({ title, children }: PropsWithChildren<PropsType>) => {
  return (
    <>
      <header
        className="container max-w-screen-xl mx-auto pt-1 pb-2 md:py-8 border-b-1 md:border-0"
        color="content2"
      >
        <p className="text-lg md:text-2xl font-bold md:ml-4">{title}</p>
      </header>
      <div className="container max-w-screen-xl mx-auto py-4 md:py-8">
        {children}
      </div>
    </>
  );
};
