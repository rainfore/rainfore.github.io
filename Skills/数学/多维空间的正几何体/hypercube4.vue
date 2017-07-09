<script>
import Base from './base.vue';
import * as THREE from 'three';

export default Base.extend({
    methods: {
        initData() {
            const scalar = 2;
            const center = new THREE.Vector4(1 / 2, 1 / 2, 1 / 2, 1 / 2);
            this.vertices = [
                new THREE.Vector4(0, 0, 0, 0).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(1, 0, 0, 0).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(0, 1, 0, 0).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(1, 1, 0, 0).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(0, 0, 1, 0).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(1, 0, 1, 0).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(0, 1, 1, 0).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(1, 1, 1, 0).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(0, 0, 0, 1).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(1, 0, 0, 1).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(0, 1, 0, 1).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(1, 1, 0, 1).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(0, 0, 1, 1).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(1, 0, 1, 1).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(0, 1, 1, 1).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(1, 1, 1, 1).sub(center).multiplyScalar(scalar),
            ];

            const theta = Math.PI / 180 / 4;
            this.rotation = new THREE.Matrix4();
            this.rotation.set(
                Math.cos(theta), 0, 0, -Math.sin(theta),
                0, 1, 0, 0,
                0, 0, 1, 0,
                Math.sin(theta), 0, 0, Math.cos(theta),
            );
            this.rotation2 = new THREE.Matrix4();
            this.rotation2.set(
                1, 0, 0, 0,
                0, Math.cos(theta), 0, -Math.sin(theta),
                0, 0, 1, 0,
                0, Math.sin(theta), 0, Math.cos(theta),
            );
            this.rotation3 = new THREE.Matrix4();
            this.rotation3.set(
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, Math.cos(theta), -Math.sin(theta),
                0, 0, Math.sin(theta), Math.cos(theta),
            );
        },
        initScene() {
            this.initData();

            // 镜面摄像机
            this.cubeCamera = new THREE.CubeCamera(0.1, 1000, 128);
            this.scene.add(this.cubeCamera);

            // LIGHTS
            const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
            this.scene.add(ambientLight);
            const light = new THREE.DirectionalLight(0xFFFFFF, 1);
            light.position.set(4, 2, 4);
            this.scene.add(light);

            // GEOMETRY
            const geometry = this.geometry = new THREE.Geometry();
            geometry.vertices.push(...this.getVertices());
            geometry.faces.push(
                new THREE.Face3(0, 1, 2), new THREE.Face3(1, 3, 2),
                new THREE.Face3(0, 1, 4), new THREE.Face3(1, 5, 4),
                new THREE.Face3(0, 1, 8), new THREE.Face3(1, 9, 8),
                new THREE.Face3(0, 2, 4), new THREE.Face3(2, 6, 4),
                new THREE.Face3(0, 2, 8), new THREE.Face3(2, 10, 8),
                new THREE.Face3(0, 4, 8), new THREE.Face3(4, 12, 8),
                new THREE.Face3(1, 3, 5), new THREE.Face3(3, 7, 5),
                new THREE.Face3(1, 3, 9), new THREE.Face3(3, 11, 9),
                new THREE.Face3(1, 5, 9), new THREE.Face3(5, 13, 9),
                new THREE.Face3(2, 3, 6), new THREE.Face3(3, 7, 6),
                new THREE.Face3(2, 3, 10), new THREE.Face3(3, 11, 10),
                new THREE.Face3(2, 6, 10), new THREE.Face3(6, 14, 10),
                new THREE.Face3(3, 7, 11), new THREE.Face3(7, 15, 11),
                new THREE.Face3(4, 5, 6), new THREE.Face3(5, 7, 6),
                new THREE.Face3(4, 5, 12), new THREE.Face3(5, 13, 12),
                new THREE.Face3(4, 6, 12), new THREE.Face3(6, 14, 12),
                new THREE.Face3(5, 7, 13), new THREE.Face3(7, 15, 13),
                new THREE.Face3(6, 7, 14), new THREE.Face3(7, 15, 14),
                new THREE.Face3(8, 9, 10), new THREE.Face3(9, 11, 10),
                new THREE.Face3(8, 9, 12), new THREE.Face3(9, 13, 12),
                new THREE.Face3(8, 10, 12), new THREE.Face3(10, 14, 12),
                new THREE.Face3(10, 11, 14), new THREE.Face3(11, 15, 14),
                new THREE.Face3(9, 11, 13), new THREE.Face3(11, 15, 13),
                new THREE.Face3(12, 13, 14), new THREE.Face3(13, 15, 14),
            );
            geometry.computeVertexNormals();
            geometry.computeFaceNormals();

            const material = new THREE.MeshLambertMaterial({
                color: 0x0099FF,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.2,
                // envMap: this.cubeCamera.renderTarget.texture,
                // reflectivity: 0,
                // refractionRatio: 0,
                depthTest: false,
                // wireframe: true,
                // wireframeLinewidth: 10,
            });
            this.scene.add(new THREE.Mesh(geometry, material));

            const edges = this.edges = new THREE.Geometry();
            edges.vertices.push(
                    geometry.vertices[0], geometry.vertices[1],
                    geometry.vertices[0], geometry.vertices[2],
                    geometry.vertices[1], geometry.vertices[3],
                    geometry.vertices[2], geometry.vertices[3],
                    geometry.vertices[4], geometry.vertices[5],
                    geometry.vertices[4], geometry.vertices[6],
                    geometry.vertices[5], geometry.vertices[7],
                    geometry.vertices[6], geometry.vertices[7],

                    geometry.vertices[8], geometry.vertices[9],
                    geometry.vertices[8], geometry.vertices[10],
                    geometry.vertices[9], geometry.vertices[11],
                    geometry.vertices[10], geometry.vertices[11],
                    geometry.vertices[12], geometry.vertices[13],
                    geometry.vertices[12], geometry.vertices[14],
                    geometry.vertices[13], geometry.vertices[15],
                    geometry.vertices[14], geometry.vertices[15],

                    geometry.vertices[0], geometry.vertices[4],
                    geometry.vertices[1], geometry.vertices[5],
                    geometry.vertices[2], geometry.vertices[6],
                    geometry.vertices[3], geometry.vertices[7],
                    geometry.vertices[8], geometry.vertices[12],
                    geometry.vertices[9], geometry.vertices[13],
                    geometry.vertices[10], geometry.vertices[14],
                    geometry.vertices[11], geometry.vertices[15],

                    geometry.vertices[0], geometry.vertices[8],
                    geometry.vertices[1], geometry.vertices[9],
                    geometry.vertices[2], geometry.vertices[10],
                    geometry.vertices[3], geometry.vertices[11],
                    geometry.vertices[4], geometry.vertices[12],
                    geometry.vertices[5], geometry.vertices[13],
                    geometry.vertices[6], geometry.vertices[14],
                    geometry.vertices[7], geometry.vertices[15],
                );
            edges.computeVertexNormals();
            edges.computeFaceNormals();

            this.scene.add(new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x0099FF })));

            this.scene.add(new THREE.AxisHelper(2));
        },
        getVertices() {
            return this.vertices.map((vector) => new THREE.Vector3(...vector.toArray()));
        },
        rotate() {
            this.vertices.forEach((vector) => vector.applyMatrix4(this.rotation));
        },
        rotateAndUpdate() {
            this.vertices.forEach((vector, index) => {
                vector.applyMatrix4(this.rotation);
                vector.applyMatrix4(this.rotation2);
                vector.applyMatrix4(this.rotation3);
                this.geometry.vertices[index].fromArray(vector.toArray());
            });
        },
        animate() {
            this.rotateAndUpdate();
            this.geometry.dynamic = true;
            this.geometry.verticesNeedUpdate = true;
            this.edges.dynamic = true;
            this.edges.verticesNeedUpdate = true;
            this.cubeCamera.updateCubeMap(this.renderer, this.scene);

            this.superAnimate();
        },
    },
});
</script>
