interface IFigureWithPrintMethod {
  print(): void;
}

interface ICircle {
  radius: number
}

interface IRectangle extends IFigureWithPrintMethod {
  width: number,
  height: number
}

interface ISquare extends IFigureWithPrintMethod {
  x: number
}

interface ITriangle {
  x: number,
  y: number, 
  z: number
}

abstract class Figure {
  abstract color: string;
  abstract name: string;
  abstract calculateArea(): void;
}

class Circle extends Figure implements ICircle{
  constructor(
    public radius: number,
    public readonly color: string,
    public readonly name: string
  ) {
    super();
  }

  calculateArea(): void {
    const circleArea = this.radius * Math.pow(Math.PI, 2);
    console.log("area of Circle is", circleArea);
  }
}

class Rectangle extends Figure implements IRectangle {
  constructor(
    public width: number,
    public height: number,
    public readonly color: string,
    public readonly name: string
  ) {
    super();
  }

  calculateArea(): void {
    const rectangleArea = this.width * this.height;
    console.log("area of Rectangle is", rectangleArea);
  }

  print(): void {
    console.log(
      `Area of rectangle = one side ${this.width} * perpendicular second side ${this.height}`
    );
  }
}

class Square extends Figure implements ISquare {
  constructor(
    public x: number,
    public readonly color: string,
    public readonly name: string
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

class Triangle extends Figure implements ITriangle {
  constructor(
    public x: number,
    public y: number,
    public z: number,
    public readonly color: string,
    public readonly name: string
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