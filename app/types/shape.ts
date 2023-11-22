class Shape extends GeometricFigure {
  area: number;
  perimeter: number;

  constructor(name: string, color: string, area: number, perimeter: number) {
    super(name, color);
    this.area = area;
    this.perimeter = perimeter;
  }

  calculateArea(a: number, b: number): number {
    return 0;
  }

  calculatePerimeter(a: number, b: number): number {
    return 0;
  }
}
