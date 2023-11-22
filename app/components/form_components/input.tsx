"use client";
import { Input, InputProps } from "@nextui-org/input";
import { getIn, useFormikContext } from "formik";
import { PropsWithChildren } from "react";

type FormikInputProps = InputProps & { propertyKey: string };

export const FormikInput = (props: PropsWithChildren<FormikInputProps>) => {
  const formik = useFormikContext();
  const value = getIn(formik.values, props.propertyKey);

  const errorMessage = getIn(formik.errors, props.propertyKey);

  return (
    <Input
      id={props.propertyKey}
      {...props}
      value={value}
      onChange={(event) => {
        formik.setFieldValue(props.propertyKey, event.target.value);
        formik.setFieldTouched(props.propertyKey);
      }}
      onBlur={formik.handleBlur}
      color={errorMessage && "danger"}
      errorMessage={errorMessage}
      labelPlacement="outside"
      variant="bordered"
    />
  );
};
