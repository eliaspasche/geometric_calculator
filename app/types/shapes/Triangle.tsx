import { Shape } from "@/app/types/Shape";
import React from "react";
import TriangleCanvas from "@/app/shapes/components/canvas/TriangleCanvas";

export class RightTriangle extends Shape {
  get area(): number {
    return 0.5 * this.a * this.b;
  }

  get perimeter(): number {
    return (
      this.a + this.b + Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2))
    );
  }

  preview(): React.ReactNode {
    return <TriangleCanvas width={this.a} height={this.b} color={this.color} />;
  }
}
