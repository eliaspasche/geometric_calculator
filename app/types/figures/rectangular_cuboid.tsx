import { SolidFigure } from "@/app/types/solid_figure";
import React from "react";
import CuboidCanvas from "@/app/figures/components/canvas/cuboid_canvas";

export class RectangularCuboid extends SolidFigure {
  get surfaceArea(): number {
    return 2 * (this.a * this.b + this.b * this.c + this.c * this.a);
  }

  get volume(): number {
    return this.a * this.b * this.c;
  }

  preview(): React.ReactNode {
    return (
      <CuboidCanvas
        length={this.a}
        width={this.b}
        height={this.c}
        color={this.color}
      />
    );
  }
}
