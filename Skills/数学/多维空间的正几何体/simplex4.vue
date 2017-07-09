<script>
import Base from './base.vue';
import * as THREE from 'three';

export default Base.extend({
    methods: {
        initData() {
            const scalar = 2;
            const center = new THREE.Vector4(1 / 2, Math.sqrt(3) / 6, Math.sqrt(6) / 12, Math.sqrt(10) / 20);
            this.vertices = [
                new THREE.Vector4(0, 0, 0, 0).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(1, 0, 0, 0).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(1 / 2, Math.sqrt(3) / 2, 0, 0).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(1 / 2, Math.sqrt(3) / 6, Math.sqrt(6) / 3, 0).sub(center).multiplyScalar(scalar),
                new THREE.Vector4(1 / 2, Math.sqrt(3) / 6, Math.sqrt(6) / 12, Math.sqrt(10) / 4).sub(center).multiplyScalar(scalar),
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
        initScene() {
            this.initData();

            // 镜面摄像机
            this.cubeCamera = new THREE.CubeCamera(0.1, 1000, 128);
            this.scene.add(this.cubeCamera);

            // LIGHTS
            const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
            this.scene.add(ambientLight);
            const light = new THREE.DirectionalLight(0xFFFFFF, 1);
            light.position.set(3, 3, 3);
            this.scene.add(light);

            // GEOMETRY
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
            geometry.computeVertexNormals();
            geometry.computeFaceNormals();

            const material = new THREE.MeshLambertMaterial({
                color: 0x0099FF,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.2,
                envMap: this.cubeCamera.renderTarget.texture,
                // reflectivity: 0,
                // refractionRatio: 0,
                depthTest: false,
                // wireframe: true,
                // wireframeLinewidth: 10,
            });
            const mesh = new THREE.Mesh(geometry, material);
            this.scene.add(mesh);

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
            edges.computeVertexNormals();
            edges.computeFaceNormals();

            this.scene.add(new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x0099FF })));

            this.scene.add(new THREE.AxisHelper(2));
            // this.scene.add(new THREE.FaceNormalsHelper(mesh, 1, 0xff0000, 3));
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
