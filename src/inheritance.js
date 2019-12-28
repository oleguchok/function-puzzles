class Shape {
    constructor(name) {
        this.name = name;
    }
}

class Rectangle extends Shape {
    constructor(width, height, name) {
        super(name);
        this.width = width;
        this.height = height;
    }

    getPerimeter() {
        return this.width*2 + this.height*2;
    }
}

class Square extends Shape {
    constructor(sideLength, name) {
        super(name);
        this.sideLength = sideLength;
    }

    getArea() {
        return this.sideLength ** 2;
    }
}

class ShapesStore {
    constructor(...shapes) {
        this.shapes = shapes;
    }

    getRectanglesTotalPerimeter() {
        return this.shapes
            .filter(s => s instanceof Rectangle)
            .reduce((acc, cur) => acc + cur.getPerimeter(), 0);
    }
}
