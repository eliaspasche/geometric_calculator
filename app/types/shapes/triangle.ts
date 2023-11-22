import { Shape } from "@/app/types/shape";

export class RightTriangle extends Shape {
  calculateArea(a: number, b: number): number {
    return 0.5 * a * b;
  }

  calculatePerimeter(a: number, b: number): number {
    return a + b + Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  }
}
