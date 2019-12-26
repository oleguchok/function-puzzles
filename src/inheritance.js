class Shape {
    constructor(name) {
        this.name = name;
    }

    getPerimeter() {

    }

    getArea() {

    }
}

class Rectangle extends Shape {
    constructor(width, height, name) {
        super(name);
        this.width = width;
        this.height = height;
    }
}

class Square extends Shape {
    constructor(sideLength, name) {
        super(name);
        this.sideLength = sideLength;
    }
}
