import { GeometricFigure } from "@/app/types/geometric_figure";

export class Shape extends GeometricFigure {
  private _area: number = 0;
  private _perimeter: number = 0;

  get area(): number {
    return this._area;
  }

  set area(value: number) {
    this._area = value;
  }

  get perimeter(): number {
    return this._perimeter;
  }

  set perimeter(value: number) {
    this._perimeter = value;
  }

  calculateArea(a: number, b: number): number {
    return a * b;
  }

  calculatePerimeter(a: number, b: number): number {
    return 2 * a + 2 * b;
  }
}
