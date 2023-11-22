class SolidFigure extends GeometricFigure {
  surfaceArea: number;
  volume: number;

  constructor(
    name: string,
    color: string,
    surfaceArea: number,
    volume: number
  ) {
    super(name, color);
    this.surfaceArea = surfaceArea;
    this.volume = volume;
  }
}
