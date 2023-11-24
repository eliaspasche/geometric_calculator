"use client";
import { useFormikContext } from "formik";
import { useMemo } from "react";
import { ValueTile } from "@/app/components/ValueTile";
import { Justify } from "@/app/components/justify";
import { AVAILABLE_FIGURES } from "@/app/figures/components/figure_form";
import { SolidFigure } from "@/app/types/solid_figure";
import { FiguresFormType } from "@/app/figures/page";
import { Canvas } from "@react-three/fiber";

export const FigurePreview = () => {
  const formik = useFormikContext<FiguresFormType>();

  const selected = AVAILABLE_FIGURES.find(
    (item) => item.key === formik.values.figure,
  );

  const figure: SolidFigure | null = useMemo(() => {
    if (selected) {
      const createdFigure: SolidFigure = Object.create(selected.figure);
      createdFigure.name = formik.values.name;
      createdFigure.color = formik.values.color;
      createdFigure.a = formik.values.a || 0;
      createdFigure.b = formik.values.b || 0;
      createdFigure.c = formik.values.c || 0;

      return createdFigure;
    }

    return null;
  }, [selected, formik.values]);

  if (!figure) {
    return (
      <div className="w-full text-center font-light">
        No Solid Figure Selected.
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-medium font-bold">{figure.name}</p>
      {figure.a && figure.b && (
        <>
          <div className="my-4 w-full aspect-square bg-gray-100">
            <Canvas>{figure.preview()}</Canvas>
          </div>
          <div className="grid grid-cols-2 w-full ">
            <Justify>
              <ValueTile label={"Volume"} value={figure.volume.toFixed(2)} />
            </Justify>
            <Justify>
              <ValueTile
                label={"Surface Area"}
                value={figure.surfaceArea.toFixed(2)}
              />
            </Justify>
          </div>
        </>
      )}
    </div>
  );
};
