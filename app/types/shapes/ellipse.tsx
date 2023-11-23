import { Shape } from "@/app/types/shape";
import React from "react";
import dynamic from "next/dynamic";

const EllipseCanvas = dynamic(
  () => import("@/app/shapes/components/ellipse_canvas"),
  {
    ssr: false,
  },
);

export class Ellipse extends Shape {
  get area(): number {
    return this.a * this.b * Math.PI;
  }
  get perimeter(): number {
    return Math.PI * Math.sqrt(2 * (Math.pow(this.a, 2) + Math.pow(this.b, 2)));
  }

  previewShape(maxHeight: number): React.ReactNode {
    return (
      <EllipseCanvas
        width={this.a}
        height={this.b}
        maxHeight={maxHeight}
        color={this.color}
      />
    );
  }
}
