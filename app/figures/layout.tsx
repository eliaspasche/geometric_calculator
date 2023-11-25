import { PropsWithChildren } from "react";
import { Header } from "../components/header/Header";

export default function FiguresLayout(props: PropsWithChildren) {
  return <Header title="Solid Figures">{props.children}</Header>;
}
