import { SolidFigure } from "@/app/types/solid_figure";
import React from "react";
import PyramidCanvas from "@/app/figures/components/canvas/pyramid_canvas";

export class RectangularPyramid extends SolidFigure {
  get surfaceArea(): number {
    return (
      this.a * this.b +
      (1 / 2) *
        this.a *
        Math.sqrt(4 * Math.pow(this.c, 2) + Math.pow(this.b, 2)) +
      (1 / 2) *
        this.b *
        Math.sqrt(4 * Math.pow(this.c, 2) + Math.pow(this.a, 2))
    );
  }

  get volume(): number {
    return (1 / 3) * this.a * this.b * this.c;
  }

  preview(): React.ReactNode {
    return (
      <PyramidCanvas
        length={this.a}
        width={this.b}
        height={this.c}
        color={this.color}
      />
    );
  }
}
