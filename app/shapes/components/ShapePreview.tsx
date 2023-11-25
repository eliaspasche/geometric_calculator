"use client";
import { useFormikContext } from "formik";
import { ShapesFormType } from "@/app/shapes/page";
import { AVAILABLE_SHAPES } from "@/app/shapes/components/ShapeForm";
import { Shape } from "@/app/types/Shape";
import { useMemo } from "react";
import { ValueTile } from "@/app/components/layout/ValueTile";
import { PreviewPanel } from "@/app/components/figure/PreviewPanel";

export const ShapesPreview = () => {
  const formik = useFormikContext<ShapesFormType>();

  const selectedShape = AVAILABLE_SHAPES.find(
    (availableShape) => availableShape.key === formik.values.shape,
  );

  const shape: Shape | null = useMemo(() => {
    if (selectedShape) {
      const createdShape: Shape = Object.create(selectedShape.shape);
      createdShape.name = formik.values.name;
      createdShape.color = formik.values.color;
      createdShape.a = formik.values.a || 0;
      createdShape.b = formik.values.b || 0;

      return createdShape;
    }

    return null;
  }, [selectedShape, formik.values]);

  if (!shape) {
    return (
      <div className="w-full text-center font-light">No Shape selected.</div>
    );
  }

  return (
    <PreviewPanel>
      <PreviewPanel.Name>
        <ValueTile label={"Name"} value={shape.name || "-"} textEnd />
      </PreviewPanel.Name>
      {shape.a && shape.b && (
        <PreviewPanel.Content>
          <PreviewPanel.Canvas>{shape.preview()}</PreviewPanel.Canvas>
          <PreviewPanel.Calculation>
            <ValueTile label={"Area"} value={shape.area.toFixed(2)} justify />
            <ValueTile
              label={"Perimeter"}
              value={shape.perimeter.toFixed(2)}
              justify
            />
          </PreviewPanel.Calculation>
        </PreviewPanel.Content>
      )}
    </PreviewPanel>
  );
};
