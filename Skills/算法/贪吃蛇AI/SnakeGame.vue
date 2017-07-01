<template>
<div :class="$style.root" @keydown="onKeyDown" tabindex="1">
    <div :class="$style.area" :status="status" :style="{ width: areaWidth + 'px', height: areaHeight + 'px' }">
        <div :class="$style.point" v-for="point in pointMetrix" :role="getRole(point)" :path="isInPathThought(point)"></div>
    </div>
    <div :class="$style.foot">
        <u-button @click.native="playOrPause()">{{ playing ? '⏸' : '▶️'}}</u-button>
        <u-button @click.native="step()">下一步</u-button>
        <u-button @click.native="reset()">重置</u-button>
    </div>
    <div :class="$style.foot">
        步数：{{ stepCount }}, 长度：{{ snake.length }}
    </div>
</div>
</template>

<script>
import Point from './Point';
import LinkedPoint from './LinkedPoint';
import Snake from './Snake';

const KEY_CODES = ['left', 'up', 'right', 'down'];
const KEY_ENUM = {
    left: 0,
    up: 1,
    right: 2,
    down: 3,
};
const KEY_PRINT = ['←', '↑', '→', '↓'];

export default {
    name: 'u-snake-game',
    props: {
        width: { type: Number, default: 12 },
        height: { type: Number, default: 12 },
        body: { type: Array, default() {
            return [{ x: this.width / 2, y: this.height / 2 }];
        } },
        initialFood: { type: Array, default() {
            return [];
        } },
        foodCount: { type: Number, default: Infinity },
        manual: { type: Boolean, default: false },
        debug: { type: Boolean, default: false },
        nobrain: { type: Boolean, default: false },
        interval: { type: Number, default: 10 },
    },
    data() {
        const data = {
            pointMetrix: [],
            food: undefined,
            foodLeft: 0,
            snake: undefined,
            status: '',
            playing: false,
            stepCount: 0,
            pathThought: [],
        };

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++)
                data.pointMetrix.push(new Point({ x, y }));
        }

        return data;
    },
    computed: {
        areaWidth() { return 14 * this.width + 2; },
        areaHeight() { return 14 * this.height + 2; },
    },
    created() {
        this.reset();
    },
    methods: {
        reset() {
            this.snake = new Snake({
                direction: 0,
                body: this.body.map((point) => new Point(point)),
            });

            this.initialFood_ = this.initialFood.map((point) => new Point(point));

            Object.assign(this, {
                food: this.getFood(),
                foodLeft: this.foodCount,
                status: '',
                playing: false,
                stepCount: 0,
                pathThought: [],
            });

            !this.manual && this.think();
        },
        /**
         * @method feed()
         * @description 随机喂食物
        */
        getFood() {
            if (this.initialFood_.length)
                return this.initialFood_.shift();

            let index = Math.random() * (this.pointMetrix.length - this.snake.length) >> 0;
            for (let i = 0; i < this.pointMetrix.length; i++) {
                const point = this.pointMetrix[i];
                if (this.snake.isInBody(point))
                    continue;
                if (!index)
                    return this.food = point;
                index--;
            }
        },
        getRole(point) {
            if (this.food && this.food.is(point))
                return 'food';
            else if (this.snake.isHead(point))
                return 'head';
            else if (this.snake.isInBody(point))
                return 'body';
        },
        isInPathThought(point) {
            return this.pathThought.some((point2) => point2.is(point));
        },
        getAndCheckNext(current, direction, target) {
            const next = new Point(current);
            if (direction === KEY_ENUM.left)
                next.x--;
            else if (direction === KEY_ENUM.right)
                next.x++;
            else if (direction === KEY_ENUM.up)
                next.y--;
            else if (direction === KEY_ENUM.down)
                next.y++;

            if (target && next.is(target))
                return next;
            if (next.x < 0 || next.x >= this.width || next.y < 0 || next.y >= this.height)
                return false;
            if (this.snake.isInBody(next))
                return false;

            return next;
        },
        getAndCheckNext2(current, direction, target) {
            const next = new Point(current);
            if (direction === KEY_ENUM.left)
                next.x--;
            else if (direction === KEY_ENUM.right)
                next.x++;
            else if (direction === KEY_ENUM.up)
                next.y--;
            else if (direction === KEY_ENUM.down)
                next.y++;

            if (target && next.is(target))
                return next;
            if (next.x < 0 || next.x >= this.width || next.y < 0 || next.y >= this.height)
                return false;

            const body = this.getDynamicBody(current);
            if (body.some((point) => next.is(point)))
                return false;

            return next;
        },
        getDynamicBody(point, eat) {
            const body = [];
            while (point && point.prev) {
                body.push(point);
                point = point.prev;
            }
            return body.concat(this.snake.body).slice(0, eat ? this.snake.length + 1 : this.snake.length);
        },
        step() {
            const next = this.getAndCheckNext(this.snake.head, this.snake.direction);
            if (!next) {
                this.status = 'failed';
                this.playing = false;

                return false;
            } else {
                this.snake.unshift(next);
                if (this.food.is(next)) {
                    this.foodLeft--;

                    if (this.snake.length === this.width * this.height) {
                        this.food = undefined;
                        this.status = 'success';
                        this.playing = false;
                        return;
                    }

                    this.food = this.getFood();
                    if (!this.foodLeft) {
                        this.foodLeft = this.foodCount;
                        this.playing = false;
                    }
                } else
                    this.snake.pop();

                this.stepCount++;
                !this.manual && this.think();
                return true;
            }
        },
        playOrPause() {
            if (this.playing)
                this.playing = false;
            else if (!this.status) {
                this.playing = true;
                this.animate();
            }
        },
        animate() {
            this.step();
            this.playing && setTimeout(this.animate.bind(this), this.interval);
        },
        onKeyDown(e) {
            if (!this.manual)
                return;

            e.preventDefault();
            const direction = e.keyCode - 37;
            if (this.snake.length >= 2 && Math.abs(this.snake.direction - direction) === 2)
                return;

            this.snake.direction = direction;
            !this.playing && this.step();
        },
        think() {
            if (this.nobrain) {
                const head = this.snake.head;
                // const body = [head];
                // debugger;
                // let next = this.getAndCheckNext(head, KEY_ENUM.left);
                // if (next)
                //     this.snake.direction = KEY_ENUM.left;
                // else
                //     next = this.getAndCheckNext(head, KEY_ENUM.up);
                // if (next)
                //     this.snake.direction = KEY_ENUM.up;
                // else
                //     next = this.getAndCheckNext(head, KEY_ENUM.right);
                // if (next)
                //     this.snake.direction = KEY_ENUM.right;
                // else
                //     next = this.getAndCheckNext(head, KEY_ENUM.down);
                // if (next)
                //     this.snake.direction = KEY_ENUM.down;

                if (head.y === 0)
                    this.snake.direction = head.x === 0 ? KEY_ENUM.down : KEY_ENUM.left;
                else {
                    if (head.x % 2 === 0)
                        this.snake.direction = head.y === this.height - 1 ? KEY_ENUM.right : KEY_ENUM.down;
                    else
                        this.snake.direction = head.y === 1 && head.x !== this.width - 1 ? KEY_ENUM.right : KEY_ENUM.up;
                }

                return;
            }

            if (this.pathThought.length > 1) {
                const next = this.pathThought.shift();
                this.snake.direction = this.pathThought[0].direction;
                return;
            }

            // record
            this.pathThought = [];
            const head = Object.assign(new LinkedPoint(this.snake.head), {
                prev: null,
                distance: 0,
                direction: this.snake.getNaturalDirection(),
            });

            let end = this.bfs(head, this.food);
            if (!end)
                end = this.bfs(head, this.snake.tail);
            if (end) {
                let point = end;
                while (point && point.prev) {
                    this.pathThought.unshift(point);
                    point = point.prev;
                }
                this.snake.direction = this.pathThought[0].direction;
            } else {
                this.playing = false;
                for (const direction in KEY_ENUM) {
                    const next = this.getAndCheckNext(head, KEY_ENUM[direction]);
                    if (next) {
                        this.snake.direction = KEY_ENUM[direction];
                        break;
                    }
                }
            }
        },
        bfs(start, end, checkTail) {
            const marks = [];
            const getMark = (point) => marks[point.y * this.width + point.x];
            const setMark = (point) => marks[point.y * this.width + point.x] = point;

            setMark(start);
            const queue = [start];
            while (queue.length) {
                const current = queue.shift();
                for (const direction in KEY_ENUM) {
                    if (current.direction !== undefined && Math.abs(current.direction - KEY_ENUM[direction]) === 2)
                        continue;
                    let next = this.getAndCheckNext2(current, KEY_ENUM[direction], end);
                    if (!next)
                        continue;

                    next = Object.assign(new LinkedPoint(next), {
                        prev: current,
                        distance: current.distance + 1,
                        direction: KEY_ENUM[direction],
                    });

                    if (checkTail) {
                        const body = this.getDynamicBody(next, next.is(end));
                        const tail = body[body.length - 1];
                        const result = this.bfs(next, tail);
                        if (!result)
                            continue;

                        if (next.is(end)) {
                            if (this.debug)
                                debugger;
                            if (result.distanceOf(end) <= 1)
                                continue;
                            else
                                return next;
                        }
                    } else {
                        if (next.is(end))
                            return next;
                    }

                    const oldNext = getMark(next);
                    if (!oldNext || oldNext.distance > next.distance) {
                        queue.push(next);
                        setMark(next);
                    }
                }
            }
        },
    },
};
</script>

<style module>
$game-width: 10;
$game-height: 10;
$point-size: 12px;
$point-margin: 1px;

.root {}

.area {
    background: $background-color-base;
    margin: 0 auto;
    border: 1px solid $border-color-base;
}

.area[status="failed"] {
    border-color: $brand-primary;
}

.area[status="success"] {
    border-color: #41b883;
}

.foot {
    text-align: center;
    margin: 0 auto;
}

.point {
    float: left;
    width: $point-size;
    height: $point-size;
    margin: $point-margin;
    background: white;
    border-radius: 2px;
}

.point[role="body"] {
    background: #41b883;
}

.point[role="head"] {
    background: #35495e;
}

.point[path] {
    box-shadow: inset 0 0 10px 10px rgba(0,0,0,0.15);
}


.point[role="food"] {
    background: #e96900;
    border-radius: 100%;
    box-shadow: none;
}
</style>
