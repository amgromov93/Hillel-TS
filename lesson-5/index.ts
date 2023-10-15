interface IFigureWithPrintMethod {
  print(): void;
}

abstract class Figure {
  protected abstract color: string;
  protected abstract name: string;
  abstract calculateArea(): void;
}

class Circle extends Figure {
  constructor(
    public radius: number,
    protected color: string,
    protected name: string
  ) {
    super();
  }

  calculateArea(): void {
    const circleArea = this.radius * Math.pow(Math.PI, 2);
    console.log("area of Circle is", circleArea);
  }
}

class Rectangle extends Figure implements IFigureWithPrintMethod {
  constructor(
    public x: number,
    public y: number,
    protected color: string,
    protected name: string
  ) {
    super();
  }

  calculateArea(): void {
    const rectangleArea = this.x * this.y;
    console.log("area of Rectangle is", rectangleArea);
  }

  print(): void {
    console.log(
      `Area of rectangle = one side ${this.x} * perpendicular second side ${this.y}`
    );
  }
}

class Square extends Figure implements IFigureWithPrintMethod {
  constructor(
    public x: number,
    protected color: string,
    protected name: string
  ) {
    super();
  }

  calculateArea(): void {
    const squareArea = Math.pow(this.x, 2);
    console.log("area of Square is", squareArea);
  }

  print(): void {
    console.log(`Area of Square = length of one side squared ${this.x}`);
  }
}

class Triangle extends Figure {
  constructor(
    public x: number,
    public y: number,
    public z: number,
    protected color: string,
    protected name: string
  ) {
    super();
  }

  calculateArea(): void {
    const halfOfPerimeter = (this.x + this.y + this.z) / 2;
    const triangleArea = Math.sqrt(
      halfOfPerimeter *
        (halfOfPerimeter - this.x) *
        (halfOfPerimeter - this.y) *
        (halfOfPerimeter - this.z)
    );

    console.log("area of Square is", triangleArea);
  }
}