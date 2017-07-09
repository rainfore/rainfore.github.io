<template>
<figure>
    <canvas ref="canvas" :width="width" :height="height"></canvas>
</figure>
</template>

<script>
import Vue from 'vue';
import * as THREE from 'three';
import OrbitControls from 'src/lib/OrbitControls';

export default Vue.extend({
    data() {
        return { width: 900, height: 300 };
    },
    mounted() {
        // 场景
        this.scene = new THREE.Scene();

        // 摄像机
        this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
        this.camera.position.y = 3;
        this.camera.position.x = 3;
        this.camera.position.z = 3;
        this.camera.lookAt({
            x: 0,
            y: 0,
            z: 0,
        });

        // 旋转控制
        this.controls = new OrbitControls(this.camera, this.$refs.canvas);
        this.controls.enableZoom = false;

        // 渲染器
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.$refs.canvas,
            antialias: true,
        });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0xFFFFFF, 1);

        //
        this.initScene();

        this.animate = this.animate.bind(this);
        this.animate();
    },
    methods: {
        superAnimate() {
            this.controls.update();
            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(this.animate);
        },
    },
});
</script>
