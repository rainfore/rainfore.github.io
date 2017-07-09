<template>
<u-article>
    <figure>
        <canvas ref="canvas" :class="$style.root" :width="width" :height="height"></canvas>
    </figure>
</u-article>
</template>

<script>
import * as THREE from 'three';
import OrbitControls from 'src/lib/OrbitControls';

export default {
    data() {
        return {
            width: 900,
            height: 600,
        };
    },
    created() {
        const center = new THREE.Vector4(1 / 2, Math.sqrt(3) / 6, Math.sqrt(6) / 12, Math.sqrt(10) / 4);
        this.vertices = [
            new THREE.Vector4(0, 0, 0, 0).sub(center).multiplyScalar(2),
            new THREE.Vector4(1, 0, 0, 0).sub(center).multiplyScalar(2),
            new THREE.Vector4(1 / 2, Math.sqrt(3) / 2, 0, 0).sub(center).multiplyScalar(2),
            new THREE.Vector4(1 / 2, Math.sqrt(3) / 6, Math.sqrt(6) / 3, 0).sub(center).multiplyScalar(2),
            new THREE.Vector4(0, 0, 0, 0),
        ];
        const theta = Math.PI / 180 / 4;
        this.rotation = new THREE.Matrix4();
        this.rotation.set(
            Math.cos(theta), -Math.sin(theta), 0, 0,
            Math.sin(theta), Math.cos(theta), 0, 0,
            0, 0, Math.cos(theta), -Math.sin(theta),
            0, 0, Math.sin(theta), Math.cos(theta),
        );
    },
    mounted() {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
        this.camera.position.y = 3;
        this.camera.position.x = 6;
        this.camera.position.z = 6;
        this.camera.lookAt({
            x: 0,
            y: 0,
            z: 0,
        });

        const cubeCamera = this.cubeCamera = new THREE.CubeCamera(0.1, 1000, 128);
        this.scene.add(cubeCamera);

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.$refs.canvas,
            antialias: true,
        });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0xFFFFFF, 1);

        this.controls = new OrbitControls(this.camera, this.$refs.canvas);
        this.controls.enableZoom = false;

        // LIGHTS
        const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
        this.scene.add(ambientLight);
        const light = new THREE.DirectionalLight(0xFFFFFF, 1);
        light.position.set(4, 2, 4);
        this.scene.add(light);

        // for (let i = 0; i < 160; i++)
        //     this.rotate();

        const geometry = this.geometry = new THREE.Geometry();
        geometry.vertices.push(...this.getVertices());
        geometry.faces.push(
            new THREE.Face3(0, 2, 1),
            new THREE.Face3(0, 1, 3),
            new THREE.Face3(0, 1, 4),
            new THREE.Face3(0, 3, 2),
            new THREE.Face3(0, 4, 2),
            new THREE.Face3(0, 3, 4),
            new THREE.Face3(1, 2, 3),
            new THREE.Face3(1, 2, 4),
            new THREE.Face3(1, 3, 4),
            new THREE.Face3(2, 4, 3),
        );

        const material = new THREE.MeshLambertMaterial({
            color: 0x0099FF,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.2,
            envMap: cubeCamera.renderTarget.texture,
            // reflectivity: 0,
            // refractionRatio: 0,
            depthTest: false,
            // wireframe: true,
            // wireframeLinewidth: 10,
        });
        this.geo = new THREE.Mesh(geometry, material);
        this.scene.add(this.geo);

        const edges = this.edges = new THREE.Geometry();
        edges.vertices.push(
            geometry.vertices[0],
            geometry.vertices[1],
            geometry.vertices[0],
            geometry.vertices[2],
            geometry.vertices[0],
            geometry.vertices[3],
            geometry.vertices[0],
            geometry.vertices[4],
            geometry.vertices[1],
            geometry.vertices[2],
            geometry.vertices[1],
            geometry.vertices[3],
            geometry.vertices[1],
            geometry.vertices[4],
            geometry.vertices[2],
            geometry.vertices[3],
            geometry.vertices[2],
            geometry.vertices[4],
            geometry.vertices[3],
            geometry.vertices[4],
        );

        this.line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x0099FF }));
        this.scene.add(this.line);

        this.scene.add(new THREE.AxisHelper(20));

        this.animate = this.animate.bind(this);
        this.animate();
    },
    methods: {
        getVertices() {
            return this.vertices.map((vector) => new THREE.Vector3(...vector.toArray()));
        },
        rotate() {
            this.vertices.forEach((vector) => vector.applyMatrix4(this.rotation));
        },
        rotateAndUpdate() {
            this.vertices.forEach((vector, index) => {
                vector.applyMatrix4(this.rotation);
                this.geometry.vertices[index].fromArray(vector.toArray());
            });
        },
        animate() {
            this.rotateAndUpdate();
            this.geometry.dynamic = true;
            this.geometry.verticesNeedUpdate = true;
            this.geometry.computeVertexNormals();
            this.geometry.computeFaceNormals();
            this.geometry.computeBoundingSphere();
            this.edges.dynamic = true;
            this.edges.verticesNeedUpdate = true;
            this.edges.computeVertexNormals();
            this.edges.computeFaceNormals();
            this.edges.computeBoundingSphere();
            this.cubeCamera.updateCubeMap(this.renderer, this.scene);

            this.controls.update();
            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(this.animate);
        },
    },
};
</script>

<style module>
.root {}
</style>
