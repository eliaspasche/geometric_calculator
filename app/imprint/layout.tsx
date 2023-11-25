import { PropsWithChildren } from "react";
import { Header } from "@/app/components/header/Header";

export default function AboutLayout(props: PropsWithChildren) {
  return <Header title="About">{props.children}</Header>;
}
