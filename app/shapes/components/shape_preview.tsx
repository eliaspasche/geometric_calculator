"use client";
import { useFormikContext } from "formik";
import { ShapesFormType } from "@/app/shapes/page";
import { AVAILABLE_SHAPES } from "@/app/shapes/components/shape_form";
import { Shape } from "@/app/types/shape";
import { useMemo } from "react";
import { ValueTile } from "@/app/components/ValueTile";
import { Justify } from "@/app/components/justify";

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
    return <div className="w-full text-center">Please select a shape.</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-medium font-bold">{shape.name}</p>
      {shape.a && shape.b && (
        <>
          <div className="my-4">{shape.previewShape(400)}</div>
          <div className="grid grid-cols-2 w-full ">
            <Justify>
              <ValueTile label={"Area"} value={shape.area.toFixed(2)} />
            </Justify>
            <Justify>
              <ValueTile
                label={"Perimeter"}
                value={shape.perimeter.toFixed(2)}
              />
            </Justify>
          </div>
        </>
      )}
    </div>
  );
};
