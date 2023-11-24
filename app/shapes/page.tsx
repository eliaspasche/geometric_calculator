"use client";

import React from "react";
import { ShapesForm } from "@/app/shapes/components/shape_form";
import { Formik } from "formik";
import { number, object } from "yup";
import { ShapesPreview } from "@/app/shapes/components/shape_preview";

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
      <div className="w-full grid md:grid-cols-2 border-x-1">
        <div className="md:border-r-1 px-8">
          <p className="text-xl font-bold mb-4">Parameters</p>
          <ShapesForm />
        </div>
        <div className="px-8">
          <p className="text-xl font-bold mb-4">Preview</p>
          <ShapesPreview />
        </div>
      </div>
    </Formik>
  );
}
