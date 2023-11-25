import { PropsWithChildren } from "react";
import { Header } from "@/app/components/header";

export default function AboutLayout(props: PropsWithChildren) {
  return <Header title="About">{props.children}</Header>;
}
