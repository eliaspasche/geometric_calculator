import { Shape } from "@/app/types/Shape";
import React from "react";
import RectangleCanvas from "@/app/shapes/components/canvas/RectangleCanvas";

export class Rectangle extends Shape {
  get area(): number {
    return this.a * this.b;
  }

  get perimeter(): number {
    return 2 * this.a + 2 * this.b;
  }

  preview(): React.ReactNode {
    return (
      <RectangleCanvas width={this.a} height={this.b} color={this.color} />
    );
  }
}
