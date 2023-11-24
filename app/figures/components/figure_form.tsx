"use client";

import { Form } from "formik";
import { SelectItem } from "@nextui-org/select";
import { FormikInput } from "@/app/components/form_components/input";
import React from "react";
import { FormikSelect } from "@/app/components/form_components/select";
import { FormikSlider } from "@/app/components/form_components/slider";
import { SolidFigure } from "@/app/types/solid_figure";
import { Ellipsoid } from "@/app/types/figures/ellipsoid";
import { RectangularCuboid } from "@/app/types/figures/rectangular_cuboid";
import { RectangularPyramid } from "@/app/types/figures/rectangular_pyramid";

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
  return (
    <div>
      <Form>
        <div className="flex w-full flex-wrap gap-4">
          <FormikSelect
            propertyKey="figure"
            label="Solid Figure"
            placeholder="Please select a Solid Figure"
          >
            {AVAILABLE_FIGURES.map((shape) => (
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
            maxValue={10}
          />
          <FormikSlider
            propertyKey="b"
            label="Side Length (b)"
            minValue={1}
            maxValue={10}
          />
          <FormikSlider
            propertyKey="c"
            label="Side Length (c)"
            minValue={1}
            maxValue={10}
          />
        </div>
      </Form>
    </div>
  );
};
