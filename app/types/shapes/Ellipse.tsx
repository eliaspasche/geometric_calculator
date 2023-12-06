import { Shape } from "@/app/types/Shape";
import React from "react";
import EllipseCanvas from "@/app/shapes/components/canvas/EllipseCanvas";

export class Ellipse extends Shape {
  get area(): number {
    return this.a * this.b * Math.PI;
  }
  get perimeter(): number {
    return Math.PI * Math.sqrt(2 * (Math.pow(this.a, 2) + Math.pow(this.b, 2)));
  }

  preview(): React.ReactNode {
    return <EllipseCanvas width={this.a} height={this.b} color={this.color} />;
  }
}
