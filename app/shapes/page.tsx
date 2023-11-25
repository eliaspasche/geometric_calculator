"use client";

import React from "react";
import { ShapesForm } from "@/app/shapes/components/shape_form";
import { Formik } from "formik";
import { number, object } from "yup";
import { ShapesPreview } from "@/app/shapes/components/shape_preview";
import {
  GeometricFigureDisplay,
  GeometricFigureParams,
  GeometricFigurePreview,
} from "@/app/components/figure/figure_panel";

export interface ShapesFormType {
  name: string;
  shape: string;
  color: string;
  a: number | null;
  b: number | null;
}

const initialValues: ShapesFormType = {
  color: "#245058",
  name: "",
  shape: "",
  a: 5,
  b: 5,
};

const validationSchema = object({
  a: number().nullable().positive("Value has to be positive."),
  b: number().nullable().positive("Value has to be positive."),
});

export default function Shapes() {
  return (
    <Formik<ShapesFormType>
      enableReinitialize
      validateOnMount={false}
      validateOnChange={false}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      <GeometricFigureDisplay>
        <GeometricFigureParams>
          <ShapesForm />
        </GeometricFigureParams>

        <GeometricFigurePreview>
          <ShapesPreview />
        </GeometricFigurePreview>
      </GeometricFigureDisplay>
    </Formik>
  );
}
