// 1. Copy and paste your prototype in here and refactor into class syntax.
class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    
    volume() {
        return this.length * this.width * this.height
    }
    
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

class Cube extends Cuboid {
    constructor(length, width, height) {
        super(length, width, height);
    }
    
    volume() {
        return this.length * 3;
    }
    
    surfaceArea() {
        return (this.length * this.length) * 6;
    }
    
    hi() {
        return 'hi';
    }
}


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


let will = new Cube(4,4,4);
console.log(will.volume()); 
console.log(will.surfaceArea());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.