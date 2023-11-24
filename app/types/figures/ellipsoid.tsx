import { SolidFigure } from "@/app/types/solid_figure";
import React from "react";

export class Ellipsoid extends SolidFigure {
  get surfaceArea(): number {
    return (
      4 *
      Math.PI *
      Math.pow(
        (Math.pow(this.a * this.b, 8 / 5) +
          Math.pow(this.b * this.c, 8 / 5) +
          Math.pow(this.c * this.a, 8 / 5)) /
          3,
        5 / 8,
      )
    );
  }

  get volume(): number {
    return (4 / 3) * Math.PI * this.a * this.b * this.c;
  }

  preview(): React.ReactNode {
    return <></>;
  }
}
