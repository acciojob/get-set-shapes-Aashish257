//complete this code
class Rectangle {
	constructor(width, height) {
		this._width = width;
		this._height = height;
	}

	get area() {
		return (this._width * this.height);
	}
}

class Square extends Animal {
	constructor(side) {
		super(side, side);
	}

	get Perimeter() {
		return (4 * width)
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
