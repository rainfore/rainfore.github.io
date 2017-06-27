class Snake {
    // direction
    // body

    constructor(snake) {
        Object.assign(this, snake);
    }

    get length() {
        return this.body.length;
    }

    get head() {
        return this.body[0];
    }

    get tail() {
        return this.body[this.length - 1];
    }

    isHead(point) {
        return this.head.is(point);
    }

    isInBody(point) {
        return this.body.some((point2) => point2.is(point));
    }

    unshift(point) {
        return this.body.unshift(point);
    }

    pop() {
        return this.body.pop();
    }

    getNaturalDirection() {
        const head = this.head;
        const neck = this.body[1];
        if (neck)
            return (head.x - neck.x + 1) * Math.abs(head.x - neck.x) + (head.y - neck.y + 2) * Math.abs(head.y - neck.y);
    }
}

export default Snake;
