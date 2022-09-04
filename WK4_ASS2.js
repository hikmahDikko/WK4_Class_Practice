const shape = {
    type : "Triangle",
    a : 1,
    b : 2,
    c : 3,
    getType : function(){
        return `The shape type is a ${this.type} with the length sides of ${this.a}, ${this.b}, ${this.c} which makes the perimeter = ${this.a + this.b + this.c}`;
    }
}

function Triangle (side) {
        this.a = side.a;
        this.b = side.b;
        this.c = side.c;
        this.type = side.type;
        this.getPerimeter = side.getType;
}

const tri = new Triangle(shape);
console.log(tri.getPerimeter());

