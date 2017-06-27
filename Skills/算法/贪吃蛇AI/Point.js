class Point {
    constructor(point) {
        this.x = point.x;
        this.y = point.y;
    }

    is(point) {
        return this.x === point.x && this.y === point.y;
    }

    distanceOf(point) {
        return Math.abs(this.x - point.x) + Math.abs(this.y - point.y);
    }
}

export default Point;
