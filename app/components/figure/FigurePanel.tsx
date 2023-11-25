import React, { PropsWithChildren } from "react";

export const GeometricFigureDisplay = ({ children }: PropsWithChildren) => {
  return <div className="w-full grid md:grid-cols-2 ">{children}</div>;
};

export const GeometricFigureParams = ({ children }: PropsWithChildren) => {
  return (
    <div className="md:px-8">
      <p className="text-xl font-bold mb-4">Parameters</p>
      {children}
    </div>
  );
};

export const GeometricFigurePreview = ({ children }: PropsWithChildren) => {
  return <div className="my-8 md:my-0 md:px-8">{children}</div>;
};
