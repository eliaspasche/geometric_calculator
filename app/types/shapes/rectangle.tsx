import { Shape } from "@/app/types/shape";
import React from "react";
import dynamic from "next/dynamic";

const RectangleCanvas = dynamic(
  () => import("@/app/shapes/components/rectangle_canvas"),
  {
    ssr: false,
  },
);

export class Rectangle extends Shape {
  get area(): number {
    return this.a * this.b;
  }

  get perimeter(): number {
    return 2 * this.a + 2 * this.b;
  }

  previewShape(maxHeight: number): React.ReactNode {
    return (
      <RectangleCanvas
        width={this.a}
        height={this.b}
        maxHeight={maxHeight}
        color={this.color}
      />
    );
  }
}
