<template>
    <canvas ref="canvas" class="$style.root"></canvas>
</template>

<script>
import Base from 'u-base.vue';

const raf = (() => window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame
    || ((callback) => window.setTimeout(callback, 1000 / 60)))();

const ParticleCanvas = Base.extend({
    name: 'u-particle-canvas',

    mounted() {
        const $canvas = this.$refs.canvas;

        this.onResize = this.onResize.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseout = this.onMouseOut.bind(this);
        this.animate = this.animate.bind(this);

        window.addEventListener('resize', this.onResize);
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('mouseout', this.onMouseOut);
        this.onResize();

        this.warea = { x: null, y: null, max: 20000 };
        this.dots = [];
        for (let i = 0; i < 300; i++) {
            const x = Math.random() * $canvas.width;
            const y = Math.random() * $canvas.height;
            const xa = Math.random() * 2 - 1;
            const ya = Math.random() * 2 - 1;
            this.dots.push({ x, y, xa, ya, max: 6000 });
        }

        this.ctx = $canvas.getContext('2d');
        this.animate();
    },
    destroyed() {
        window.removeEventListener('resize', this.onResize);
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mouseout', this.onMouseOut);
    },
    methods: {
        onResize() {
            this.$refs.canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            this.$refs.canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        },
        onMouseMove(e) {
            this.warea.x = e.clientX;
            this.warea.y = e.clientY;
        },
        onMouseOut(e) {
            this.warea.x = null;
            this.warea.y = null;
        },
        animate() {
            const $canvas = this.$refs.canvas;

            this.ctx.clearRect(0, 0, $canvas.width, $canvas.height);

            // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
            const ndots = [this.warea].concat(this.dots);
            this.dots.forEach((dot) => {
                // 粒子位移
                dot.x += dot.xa;
                dot.y += dot.ya;
                // 遇到边界将加速度反向
                dot.xa *= (dot.x > $canvas.width || dot.x < 0) ? -1 : 1;
                dot.ya *= (dot.y > $canvas.height || dot.y < 0) ? -1 : 1;
                // 绘制点
                this.ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);
                // 循环比对粒子间的距离
                for (let i = 0; i < ndots.length; i++) {
                    const d2 = ndots[i];
                    if (dot === d2 || d2.x === null || d2.y === null)
                        continue;
                    const xc = dot.x - d2.x;
                    const yc = dot.y - d2.y;
                    // 两个粒子之间的距离
                    const dis = xc * xc + yc * yc;
                    // 距离比
                    let ratio;
                    // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
                    if (dis < d2.max) {
                        // 如果是鼠标，则让粒子向鼠标的位置移动
                        if (d2 === this.warea && dis > (d2.max / 2)) {
                            dot.x -= xc * 0.03;
                            dot.y -= yc * 0.03;
                        }
                        // 计算距离比
                        ratio = (d2.max - dis) / d2.max;
                        // 画线
                        this.ctx.beginPath();
                        this.ctx.lineWidth = ratio / 2;
                        this.ctx.strokeStyle = 'rgba(100,100,100,' + (ratio + 0.2) + ')';
                        this.ctx.moveTo(dot.x, dot.y);
                        this.ctx.lineTo(d2.x, d2.y);
                        this.ctx.stroke();
                    }
                }
                // 将已经计算过的粒子从数组中删除
                ndots.splice(ndots.indexOf(dot), 1);
            });

            raf(this.animate);
        },
    },
});

export default ParticleCanvas;
</script>

<style module>
.root {

}
</style>
