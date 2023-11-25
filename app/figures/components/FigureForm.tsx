"use client";

import { Form, useFormikContext } from "formik";
import { SelectItem } from "@nextui-org/select";
import { FormikInput } from "@/app/components/form_components/Input";
import React from "react";
import { FormikSelect } from "@/app/components/form_components/Select";
import { FormikSlider } from "@/app/components/form_components/Slider";
import { SolidFigure } from "@/app/types/SolidFigure";
import { Ellipsoid } from "@/app/types/figures/Ellipsoid";
import { RectangularCuboid } from "@/app/types/figures/RectangluarCuboid";
import { RectangularPyramid } from "@/app/types/figures/RectangularPyramid";
import { FiguresFormType } from "@/app/figures/page";
import { FormPanel } from "@/app/components/figure/FormPanel";

export const AVAILABLE_FIGURES: {
  figure: SolidFigure;
  key: string;
  label: string;
}[] = [
  { figure: Ellipsoid.prototype, key: "ellipsoid", label: "Epllipsoid" },
  {
    figure: RectangularCuboid.prototype,
    key: "cuboid",
    label: "Rectangular Cuboid",
  },
  {
    figure: RectangularPyramid.prototype,
    key: "pyramid",
    label: "Rectangular Pyramid",
  },
];
export const FigureForm = () => {
  const formik = useFormikContext<FiguresFormType>();

  return (
    <Form>
      <FormPanel>
        <FormikSelect
          propertyKey="figure"
          label="Solid Figure"
          placeholder="Please select a Solid Figure"
          onChange={() => formik.resetForm()}
        >
          {AVAILABLE_FIGURES.map((shape) => (
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
        <FormPanel.Row>
          <FormikSlider
            propertyKey="c"
            label="Side Length (c)"
            minValue={1}
            maxValue={10}
          />
        </FormPanel.Row>
      </FormPanel>
    </Form>
  );
};
