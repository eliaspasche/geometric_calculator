"use client";
import { getIn, useFormikContext } from "formik";
import { PropsWithChildren } from "react";
import { Slider, SliderProps } from "@nextui-org/react";

type SliderInputProps = SliderProps & { propertyKey: string };

export const FormikSlider = (props: PropsWithChildren<SliderInputProps>) => {
  const formik = useFormikContext();
  const value = getIn(formik.values, props.propertyKey);

  return (
    <Slider
      id={props.propertyKey}
      {...props}
      value={value}
      onChange={(value) => {
        formik.setFieldValue(props.propertyKey, value);
        formik.setFieldTouched(props.propertyKey);
      }}
      onBlur={formik.handleBlur}
      color={"primary"}
      variant="bordered"
    />
  );
};
