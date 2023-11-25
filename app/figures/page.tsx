"use client";

import { number, object } from "yup";
import { Formik } from "formik";
import React from "react";
import { FigureForm } from "@/app/figures/components/figure_form";
import { FigurePreview } from "@/app/figures/components/figure_preview";
import {
  GeometricFigureDisplay,
  GeometricFigureParams,
  GeometricFigurePreview,
} from "@/app/components/figure/figure_panel";

export interface FiguresFormType {
  name: string;
  figure: string;
  color: string;
  a: number | null;
  b: number | null;
  c: number | null;
}

const initialValues: FiguresFormType = {
  color: "#2C8696",
  name: "",
  figure: "",
  a: 5,
  b: 5,
  c: 5,
};

const validationSchema = object({
  a: number().nullable().positive("Value has to be positive."),
  b: number().nullable().positive("Value has to be positive."),
  c: number().nullable().positive("Value has to be positive."),
});

export default function Figures() {
  return (
    <Formik<FiguresFormType>
      enableReinitialize
      validateOnMount={false}
      validateOnChange={false}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      <GeometricFigureDisplay>
        <GeometricFigureParams>
          <FigureForm />
        </GeometricFigureParams>

        <GeometricFigurePreview>
          <FigurePreview />
        </GeometricFigurePreview>
      </GeometricFigureDisplay>
    </Formik>
  );
}
