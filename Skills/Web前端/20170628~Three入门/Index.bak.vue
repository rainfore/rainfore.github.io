<template>
    <canvas ref="canvas" :class="$style.root" :width="width" :height="height"></canvas>
</template>

<script>
import * as THREE from 'three';

export default {
    data() {
        return {
            width: 640,
            height: 480,
        };
    },
    mounted() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.$refs.canvas,
        });
        this.renderer.setSize(this.width, this.height);

        // LIGHTS
        const ambientLight = new THREE.AmbientLight(0x333333, 5);	// 0.2
        const light = new THREE.DirectionalLight(0xFFFFFF, 10);
        light.position.y = 5;

        const geometry = new THREE.Geometry();
        geometry.vertices.push(
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(1, 0, 0),
            new THREE.Vector3(1 / 2, Math.sqrt(3) / 2, 0),
            new THREE.Vector3(1 / 2, Math.sqrt(3) / 6, Math.sqrt(6) / 3)
        );
        geometry.faces.push(
            new THREE.Face3(0, 2, 1),
            new THREE.Face3(0, 1, 3),
            new THREE.Face3(0, 3, 2),
            new THREE.Face3(1, 2, 3),
        );

        const material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
        this.geo = new THREE.Mesh(geometry, material);
        this.scene.add(this.geo);
        this.scene.add(ambientLight);
        this.scene.add(light);

        this.camera.position.z = 5;

        this.animate = this.animate.bind(this);
        this.animate();
    },
    methods: {
        animate() {
            this.geo.rotation.x += 0.01;
            this.geo.rotation.y += 0.02;

            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(this.animate);
        },
    },
};
</script>

<style module>
.root {}
</style>
