<template>
<div>
    <h2></h2>
</div>
</template>

<script>
// 零维空间，点
{
    const dimension = 0;
    const vertices = [new Vector0()];
}

// 一维空间，线段
{
    const dimension = 1;
    const vertices = [
        new Vector1(0),
        new Vector1(1),
    ];
}

// 二维空间，正三角形
{
    const dimension = 2;
    const vertices = [
        new Vector2(0, 0),
        new Vector2(1, 0),
        new Vector2(1 / 2, Math.sqrt(3) / 2),
    ];
}

// 三维空间，正四面体
{
    const dimension = 3;
    const vertices = [
        new Vector2(1, 0, 0),
        new Vector2(Math.cos(Math.PI * 2 / 3), Math.sin(Math.PI * 2 / 3)),
        new Vector2(Math.cos(Math.PI * 4 / 3), Math.sin(Math.PI * 4 / 3)),
    ];
}
</script>

<style>
</style>
