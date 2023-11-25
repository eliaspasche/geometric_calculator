"use client";

import { Form, useFormikContext } from "formik";
import { SelectItem } from "@nextui-org/select";
import { FormikInput } from "@/app/components/form_components/input";
import React from "react";
import { FormikSelect } from "@/app/components/form_components/select";
import { Rectangle } from "@/app/types/shapes/rectangle";
import { Ellipse } from "@/app/types/shapes/ellipse";
import { RightTriangle } from "@/app/types/shapes/triangle";
import { Shape } from "@/app/types/shape";
import { FormikSlider } from "@/app/components/form_components/slider";
import { ShapesFormType } from "@/app/shapes/page";
import { FormPanel } from "@/app/components/figure/form_panel";

export const AVAILABLE_SHAPES: { shape: Shape; key: string; label: string }[] =
  [
    { shape: Ellipse.prototype, key: "ellipse", label: "Ellipse" },
    { shape: Rectangle.prototype, key: "rectangle", label: "Rectangle" },
    {
      shape: RightTriangle.prototype,
      key: "triangle",
      label: "Right Triangle",
    },
  ];
export const ShapesForm = () => {
  const formik = useFormikContext<ShapesFormType>();
  return (
    <Form>
      <FormPanel>
        <FormikSelect
          propertyKey="shape"
          label="Shape"
          placeholder="Please select a shape"
          onChange={() => formik.resetForm()}
        >
          {AVAILABLE_SHAPES.map((shape) => (
            <SelectItem key={shape.key} value={shape.key}>
              {shape.label}
            </SelectItem>
          ))}
        </FormikSelect>
        <FormPanel.Row>
          <FormikInput
            propertyKey="name"
            type="text"
            label="Name"
            placeholder="Enter a name"
            maxLength={40}
          />
          <FormikInput
            propertyKey="color"
            type="color"
            label="Color"
            maxLength={40}
          />
        </FormPanel.Row>
        <FormPanel.Row>
          <FormikSlider
            propertyKey="a"
            label="Side Length (a)"
            minValue={1}
            maxValue={10}
          />
          <FormikSlider
            propertyKey="b"
            label="Side Length (b)"
            minValue={1}
            maxValue={10}
          />
        </FormPanel.Row>
      </FormPanel>
    </Form>
  );
};
