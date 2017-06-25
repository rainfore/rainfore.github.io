<template>
<section>
    <h1>贪吃蛇AI</h1>
    <div :class="$style.area" :status="status">
        <div :class="$style.point" v-for="point in pointMetrix" :role="getRole(point)"></div>
    </div>
    <div :class="$style.foot">
        <u-button @click.native="playOrPause()">{{ playing ? '⏸' : '▶️'}}</u-button>
        <u-button @click.native="step()">下一步</u-button>
    </div>
    <div>3D贪吃蛇</div>
</section>
</template>

<script>
const WIDTH = 32;
const HEIGHT = 24;

const KEY_CODES = ['left', 'up', 'right', 'down'];
const KEY_ENUM = {
    left: 0,
    up: 1,
    right: 2,
    down: 3,
};
const KEY_PRINT = ['←', '↑', '→', '↓'];

export default {
    data() {
        return {
            pointMetrix: [],
            food: {
                x: Math.floor(Math.random() * WIDTH),
                y: Math.floor(Math.random() * HEIGHT),
            },
            snake: {
                direction: 0,
                body: [{ x: WIDTH / 2, y: HEIGHT / 2 }],
            },
            status: '',
            playing: false,
            useAI: true,
        };
    },
    created() {
        for (let y = 0; y < HEIGHT; y++) {
            for (let x = 0; x < WIDTH; x++)
                this.pointMetrix.push({ x, y });
        }

        this.onKeyDown = this.onKeyDown.bind(this);
        window.addEventListener('keydown', this.onKeyDown);
        this.feed();
    },
    destroyed() {
        window.removeEventListener('keydown', this.onKeyDown);
    },
    methods: {
        /**
         * @method feed()
         * @description 随机喂食物
        */
        feed() {
            const food = {
                x: Math.random() * WIDTH >> 0,
                y: Math.random() * HEIGHT >> 0,
            };

            if (this.isInBody(food))
                return this.feed();
            else
                return this.food = food;
        },
        isFood(point) {
            return point.x === this.food.x && point.y === this.food.y;
        },
        isInBody(point) {
            return this.snake.body.some((_point) => point.x === _point.x && point.y === _point.y);
        },
        isHead(point) {
            const head = this.snake.body[0];
            return point.x === head.x && point.y === head.y;
        },
        getRole(point) {
            if (this.isFood(point))
                return 'food';
            else if (this.isHead(point))
                return 'head';
            else if (this.isInBody(point))
                return 'body';
        },
        checkNext(head, direction) {
            const next = { x: head.x, y: head.y };
            if (direction === KEY_ENUM.left)
                next.x--;
            else if (direction === KEY_ENUM.right)
                next.x++;
            else if (direction === KEY_ENUM.up)
                next.y--;
            else if (direction === KEY_ENUM.down)
                next.y++;

            if (next.x < 0 || next.x >= WIDTH || next.y < 0 || next.y >= HEIGHT)
                return false;
            if (this.isInBody(next))
                return false;

            return next;
        },
        step() {
            const next = this.checkNext(this.snake.body[0], this.snake.direction);
            if (!next) {
                this.status = 'failed';
                this.playing = false;

                return false;
            } else {
                this.snake.body.unshift(next);
                if (this.isFood(next))
                    this.feed();
                else
                this.snake.body.pop();

                return true;
            }
        },
        playOrPause() {
            if (this.playing)
                this.playing = false;
            else if (!this.status) {
                this.playing = true;
                this.interval();
            }
        },
        interval() {
            if (!this.playing)
                return;

            this.useAI && this.think();
            this.step();

            setTimeout(this.interval.bind(this), 10);
        },
        onKeyDown(e) {
            if (this.useAI)
                return;

            e.preventDefault();
            const direction = e.keyCode - 37;
            if (this.snake.body.length >= 2 && Math.abs(this.snake.direction - direction) === 2)
                return;

            this.snake.direction = direction;
            !this.playing && this.step();
        },
        think() {
            let end = this.bfs(this.snake.body[0], this.food);
            if (!end)
                end = this.bfs(this.snake.body[0], this.snake.body[this.snake.body.length - 1]);
            if (end) {
                while (!this.isHead(end.parent))
                    end = end.parent;
                this.snake.direction = end.direction;
            }
        },
        bfs(start, end) {
            start = { x: start.x, y: start.y, distance: 0, parent: null };
            const marks = [];
            const getMark = (point) => marks[point.y * WIDTH + point.x];
            const setMark = (point) => marks[point.y * WIDTH + point.x] = point;

            setMark(start);
            const queue = [start];
            while (queue.length) {
                const current = queue.shift();
                for (const direction in KEY_ENUM) {
                    const next = this.checkNext(current, KEY_ENUM[direction]);
                    if (!next)
                        continue;

                    next.parent = current;
                    next.distance = current.distance + 1;
                    next.direction = KEY_ENUM[direction];

                    if (next.x === end.x && next.y === end.y)
                        return next;

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
$game-width: 32;
$game-height: 24;
$point-size: 12px;
$point-margin: 1px;

.area {
    width: calc(($point-size + $point-margin * 2) * $game-width + 2px);
    height: calc(($point-size + $point-margin * 2) * $game-height + 2px);
    background: $background-color-base;
    margin: 0 auto;
    border: 1px solid $border-color-base;
}

.area[status="failed"] {
    border-color: $brand-primary;
}

.foot {
    text-align: center;
    margin: 40px auto;
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
    background: #666;
}

.point[role="head"] {
    background: #222;
}

.point[role="food"] {
    background: $brand-primary;
    border-radius: 100%;
}

</style>
