import React, { PropsWithChildren } from "react";
import { Canvas } from "@react-three/fiber";

export const PreviewPanel = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

const NamePanel = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex items-center justify-between w-full">
      <p className="text-xl font-bold mb-4 mr-8">Preview</p>
      <div className="text-medium font-bold overflow-hidden">{children}</div>
    </div>
  );
};

const Content = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col justify-center items-center">{children}</div>
  );
};

const CanvasPanel = ({ children }: PropsWithChildren) => {
  return (
    <div className="my-4 w-full aspect-square bg-gray-100">
      <Canvas>{children}</Canvas>
    </div>
  );
};

const CalculationPanel = ({ children }: PropsWithChildren) => {
  return <div className="grid grid-cols-2 w-full ">{children}</div>;
};

PreviewPanel.Name = NamePanel;
PreviewPanel.Content = Content;
PreviewPanel.Canvas = CanvasPanel;
PreviewPanel.Calculation = CalculationPanel;
