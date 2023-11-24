"use client";

import { number, object } from "yup";
import { Formik } from "formik";
import React from "react";
import { FigureForm } from "@/app/figures/components/figure_form";
import { FigurePreview } from "@/app/figures/components/figure_preview";

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
      <div className="w-full grid md:grid-cols-2 border-x-1">
        <div className="md:border-r-1 px-8">
          <p className="text-xl font-bold mb-4">Parameters</p>
          <FigureForm />
        </div>
        <div className="px-8">
          <p className="text-xl font-bold mb-4">Preview</p>
          <FigurePreview />
        </div>
      </div>
    </Formik>
  );
}
