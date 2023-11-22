"use client";

import { Form } from "formik";
import { SelectItem } from "@nextui-org/select";
import { FormikInput } from "@/app/components/form_components/input";
import React from "react";
import { FormikSelect } from "@/app/components/form_components/select";
import { Rectangle } from "@/app/types/shapes/rectangle";
import { Ellipse } from "@/app/types/shapes/ellipse";
import { RightTriangle } from "@/app/types/shapes/triangle";
import { Shape } from "@/app/types/shape";
import { FormikSlider } from "@/app/components/form_components/slider";

export const AVAILABLE_SHAPES: { shape: Shape; key: string; label: string }[] =
  [
    { shape: Rectangle.prototype, key: "rectangle", label: "Rectangle" },
    { shape: Ellipse.prototype, key: "ellipse", label: "Ellipse" },
    {
      shape: RightTriangle.prototype,
      key: "triangle",
      label: "Right Triangle",
    },
  ];
export const ShapesForm = () => {
  return (
    <div>
      <Form>
        <div className="flex w-full flex-wrap gap-4">
          <FormikSelect
            propertyKey="shape"
            label="Shape"
            placeholder="Please select a shape"
          >
            {AVAILABLE_SHAPES.map((shape) => (
              <SelectItem key={shape.key} value={shape.key}>
                {shape.label}
              </SelectItem>
            ))}
          </FormikSelect>
          <FormikInput
            propertyKey="name"
            type="text"
            label="Name"
            placeholder="Enter a name"
          />
          <FormikInput propertyKey="color" type="color" label="Color" />
          <FormikSlider
            propertyKey="a"
            label="Side Length (a)"
            minValue={1}
            maxValue={100}
          />
          <FormikSlider
            propertyKey="b"
            label="Side Length (b)"
            minValue={1}
            maxValue={100}
          />
        </div>
      </Form>
    </div>
  );
};
