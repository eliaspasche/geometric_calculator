import { PropsWithChildren } from "react";
import { Header } from "../components/header";

export default function ShapesLayout(props: PropsWithChildren) {
  return <Header title="Shapes">{props.children}</Header>;
}
