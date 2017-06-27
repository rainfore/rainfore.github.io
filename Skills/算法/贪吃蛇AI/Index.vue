<template>
<section>
    <h1>贪吃蛇AI</h1>
    <u-snake-game :width="12" :height="12"></u-snake-game>
    <h3>单纯寻路</h3>
    <h4>容易进入死胡同</h4>
    <u-snake-game :width="6" :height="6" :body="[
        { x: 3, y: 1 },
        { x: 2, y: 1 },
        { x: 1, y: 1 },
        { x: 0, y: 1 },
        { x: 0, y: 2 },
        { x: 0, y: 3 },
        { x: 1, y: 3 },
        { x: 2, y: 3 },
        { x: 3, y: 3 },
        { x: 4, y: 3 },
        { x: 5, y: 3 },
    ]" :first-food="{ x: 1, y: 2 }" :food-count="1"></u-snake-game>
    <p></p>
    <u-snake-game :width="6" :height="6" :body="[
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 3, y: 1 },
        { x: 3, y: 2 },
        { x: 3, y: 3 },
        { x: 3, y: 4 },
        { x: 2, y: 4 },
        { x: 1, y: 4 },
        { x: 0, y: 4 },
        { x: 0, y: 3 },
        { x: 1, y: 3 },
        { x: 1, y: 2 },
    ]" :first-food="{ x: 0, y: 2 }" :food-count="1" debug></u-snake-game>
    <h4>能吃的情况一定有最短路径，障碍物要动态分析</h4>
    <u-snake-game :width="6" :height="6" :body="[
        { x: 4, y: 2 },
        { x: 4, y: 1 },
        { x: 3, y: 1 },
        { x: 2, y: 1 },
        { x: 1, y: 1 },
        { x: 0, y: 1 },
    ]" :first-food="{ x: 0, y: 0 }" :food-count="1"></u-snake-game>
    <h4>能活下来的充分条件是有通向尾巴的路径</h4>
    <p>每一步行动都把这个充分条件作为判断依据</p>
    <h4>无脑模式</h4>
    <u-snake-game :width="6" :height="6" :body="[{ x: 0, y: 0 }]" nobrain></u-snake-game>
    <ul>
        <li>智能checkNext</li>
        <li>智能判断封闭路径</li>
        <li>3D贪吃蛇</li>
    </ul>
</section>
</template>

<script>
import SnakeGame from './SnakeGame.vue';

export default {
    components: {
        [SnakeGame.name]: SnakeGame,
    },
};
</script>

<style module>
$game-width: 10;
$game-height: 10;
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
