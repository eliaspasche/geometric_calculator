import { GeometricFigure } from "@/app/types/geometric_figure";

export class SolidFigure extends GeometricFigure {
  private _a: number = 0;
  private _b: number = 0;
  private _c: number = 0;

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

  get c(): number {
    return this._c;
  }

  set c(value: number) {
    this._c = value;
  }

  get surfaceArea(): number {
    return 0;
  }

  get volume(): number {
    return 0;
  }
}
