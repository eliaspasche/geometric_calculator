import { GeometricFigure } from "@/app/types/geometric_figure";
import React, { ReactNode } from "react";

export class Shape extends GeometricFigure {
  private _a: number = 0;
  private _b: number = 0;

  get a(): number {
    return this._a;
  }

  set a(value: number) {
    this._a = value;
  }

  get b(): number {
    return this._b;
  }

  set b(value: number) {
    this._b = value;
  }

  get area(): number {
    return 0;
  }

  get perimeter(): number {
    return 0;
  }

  public previewShape(maxHeight: number): ReactNode {
    return <></>;
  }
}
