"use client";
import { getIn, useFormikContext } from "formik";
import { Input, InputProps } from "@nextui-org/input";

type FormikInputProps = InputProps & { propertyKey: string };

export const FormikInput = (props: FormikInputProps) => {
  const formik = useFormikContext();
  const value = getIn(formik.values, props.propertyKey);

  const errorMessage = getIn(formik.errors, props.propertyKey);

  return (
    <Input
      id={props.propertyKey}
      value={value}
      onChange={(event) => {
        formik.setFieldValue(props.propertyKey, event.target.value);
        formik.setFieldTouched(props.propertyKey);
      }}
      onBlur={formik.handleBlur}
      color={errorMessage && "danger"}
      errorMessage={errorMessage}
      labelPlacement="outside"
      variant="flat"
      type={props.type}
      label={props.label}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
    />
  );
};
