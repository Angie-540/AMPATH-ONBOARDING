//All this is stating is that every subclass/derived class should be substitutable for their base/parent class- a subclass should override the parent class methods in a way that does not break functionality from a client’s point of view.

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    get width() {
        return this.width
    }

    get height() {
        return this.height
    }

    set width(value) {
        this.width = value
    }

    set height(value) {
        this.height = value
    }

    getArea() {
        return this.width * this.height
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size)
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size)
    }

    set width(value) {
        this._width = this._height = value
    }

    set height(value) {
        this._width = this._height = value
    }
}