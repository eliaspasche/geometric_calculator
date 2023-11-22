import { Shape } from "@/app/types/shape";

export class Ellipse extends Shape {
  calculateArea(a: number, b: number): number {
    return a * b * Math.PI;
  }

  calculatePerimeter(a: number, b: number): number {
    return Math.PI * Math.sqrt(2 * (Math.pow(a, 2) + Math.pow(b, 2)));
  }
}
