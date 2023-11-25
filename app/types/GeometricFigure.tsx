import React, { ReactNode } from "react";

export class GeometricFigure {
  protected _name: string = "";
  protected _color: string = "";

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  public preview(): ReactNode {
    return <></>;
  }
}
