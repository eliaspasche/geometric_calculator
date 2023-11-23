import { GeometricFigure } from "@/app/types/geometric_figure";

export class SolidFigure extends GeometricFigure {
  protected _surfaceArea: number = 0;
  protected _volume: number = 0;

  get surfaceArea(): number {
    return this._surfaceArea;
  }

  set surfaceArea(value: number) {
    this._surfaceArea = value;
  }

  get volume(): number {
    return this._volume;
  }

  set volume(value: number) {
    this._volume = value;
  }

  calculateVolume(a: number, b: number, c: number): number {
    return a * b * c;
  }

  calculateSurfaceArea(a: number, b: number, c: number): number {
    return 2 * a * b + 2 * b * c + 2 * c * a;
  }
}
