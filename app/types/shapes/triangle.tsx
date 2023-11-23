import { Shape } from "@/app/types/shape";
import React from "react";
import dynamic from "next/dynamic";

const TriangleCanvas = dynamic(
  () => import("@/app/shapes/components/triangle_canvas"),
  {
    ssr: false,
  },
);
export class RightTriangle extends Shape {
  get area(): number {
    return 0.5 * this.a * this.b;
  }

  get perimeter(): number {
    return (
      this.a + this.b + Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2))
    );
  }

  previewShape(maxHeight: number): React.ReactNode {
    return (
      <TriangleCanvas
        width={this.a}
        height={this.b}
        maxHeight={maxHeight}
        color={this.color}
      />
    );
  }
}
