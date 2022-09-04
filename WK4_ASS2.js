const triangle = {
    a : 1,
    b : 2,
    c : 3,
}

function Shape (side) {
        this.a = side.a;
        this.b = side.b;
        this.c = side.c;
        this.getType = side.getType;
        this.getArea = function(){
        console.log(`perimeter = ${this.a * this.b * this.c}`)
    }
}

const tri = new Shape(triangle);
tri.getArea();

