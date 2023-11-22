"use client";
import { getIn, useFormikContext } from "formik";
import { PropsWithChildren } from "react";
import { Select, SelectProps } from "@nextui-org/react";

type FormikSelectProps = SelectProps & { propertyKey: string };

export const FormikSelect = (props: PropsWithChildren<FormikSelectProps>) => {
  const formik = useFormikContext();
  const value = getIn(formik.values, props.propertyKey);

  const errorMessage = getIn(formik.errors, props.propertyKey);

  return (
    <Select
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
    >
      {props.children}
    </Select>
  );
};
