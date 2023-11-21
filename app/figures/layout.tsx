import { PropsWithChildren } from "react";
import { Header } from "../components/header";

export default function FiguresLayout(props: PropsWithChildren) {
  return <Header title="Figures">{props.children}</Header>;
}
