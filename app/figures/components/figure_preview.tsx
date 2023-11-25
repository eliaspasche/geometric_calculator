"use client";
import { useFormikContext } from "formik";
import { useMemo } from "react";
import { ValueTile } from "@/app/components/value_tile";
import { AVAILABLE_FIGURES } from "@/app/figures/components/figure_form";
import { SolidFigure } from "@/app/types/solid_figure";
import { FiguresFormType } from "@/app/figures/page";
import { PreviewPanel } from "@/app/components/figure/preview_panel";

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
    <PreviewPanel>
      <PreviewPanel.Name>
        <ValueTile label={"Name"} value={figure.name || "-"} textEnd />
      </PreviewPanel.Name>
      {figure.a && figure.b && (
        <PreviewPanel.Content>
          <PreviewPanel.Canvas>{figure.preview()}</PreviewPanel.Canvas>
          <PreviewPanel.Calculation>
            <ValueTile
              label={"Volume"}
              value={figure.volume.toFixed(2)}
              justify
            />
            <ValueTile
              label={"Surface Area"}
              value={figure.surfaceArea.toFixed(2)}
              justify
            />
          </PreviewPanel.Calculation>
        </PreviewPanel.Content>
      )}
    </PreviewPanel>
  );
};
