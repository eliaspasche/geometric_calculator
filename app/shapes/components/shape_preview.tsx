"use client";
import { useFormikContext } from "formik";
import { ShapesFormType } from "@/app/shapes/page";
import { AVAILABLE_SHAPES } from "@/app/shapes/components/shape_form";
import { Shape } from "@/app/types/shape";
import { useMemo } from "react";
import { ValueTile } from "@/app/components/ValueTile";
import { Justify } from "@/app/components/justify";
import { Rectangle } from "@/app/types/shapes/rectangle";
import { Ellipse } from "@/app/types/shapes/ellipse";
import dynamic from "next/dynamic";
import { RightTriangle } from "@/app/types/shapes/triangle";

const TriangleCanvas = dynamic(() => import("./triangle_canvas"), {
  ssr: false,
});

const EllipseCanvas = dynamic(() => import("./ellipse_canvas"), {
  ssr: false,
});

const RectangleCanvas = dynamic(() => import("./rectangle_canvas"), {
  ssr: false,
});

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
      {formik.values.a && formik.values.b && (
        <>
          <div className="my-4">
            <PreviewCanvas
              shape={shape}
              width={formik.values.a}
              height={formik.values.b}
              color={formik.values.color}
            />
          </div>
          <div className="grid grid-cols-2 w-full ">
            <Justify>
              <ValueTile
                label={"Area"}
                value={shape
                  .calculateArea(formik.values.a, formik.values.b)
                  .toFixed(2)}
              />
            </Justify>
            <Justify>
              <ValueTile
                label={"Perimeter"}
                value={shape
                  .calculatePerimeter(formik.values.a, formik.values.b)
                  .toFixed(2)}
              />
            </Justify>
          </div>
        </>
      )}
    </div>
  );
};

interface PreviewCanvasProps {
  shape: Shape;
  width: number;
  height: number;
  color: string;
}

const PreviewCanvas = ({ shape, width, height, color }: PreviewCanvasProps) => {
  const maxHeight = 400;

  if (shape instanceof Rectangle) {
    return (
      <RectangleCanvas
        width={width}
        height={height}
        maxHeight={maxHeight}
        color={color}
      />
    );
  }

  if (shape instanceof Ellipse) {
    return (
      <EllipseCanvas
        width={width}
        height={height}
        maxHeight={maxHeight}
        color={color}
      />
    );
  }

  if (shape instanceof RightTriangle) {
    return (
      <TriangleCanvas
        width={width}
        height={height}
        maxHeight={maxHeight}
        color={color}
      />
    );
  }

  return <></>;
};
