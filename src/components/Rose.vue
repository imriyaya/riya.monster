<script lang="ts" setup>
import * as THREE from "three";
import {Clock} from "three";
// @ts-expect-error
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
// @ts-expect-error
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {onMounted} from "vue";


onMounted(async () => {
  const canvasWrapper = document.querySelector("#canvas-wrapper") as HTMLDivElement;
  const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(canvasWrapper.clientWidth, canvasWrapper.clientHeight);
  renderer.setPixelRatio(devicePixelRatio);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
      45,
      canvasWrapper.clientWidth / canvasWrapper.clientHeight,
      1,
      10000
  );

  camera.position.set(0, 1.4, 3);
  camera.rotation.set(-0.4, 0, 0);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.minPolarAngle = Math.PI / 2 - 0.4;
  controls.maxPolarAngle = Math.PI / 2 - 0.4;

  const loader = new GLTFLoader();
  const object = await loader.loadAsync('/rose-lite.glb');
  object.scene.position.set(0, 0, 0);
  object.scene.rotation.set(0, 0, 0.5);
  object.scene.scale.set(0.8, 0.8, 0.8)
  scene.add(object.scene);

  const light1 = new THREE.DirectionalLight(0xffffff, 5);
  scene.add(light1);

  renderer.render(scene, camera);

  const clock = new Clock();
  const tick = () => {
    requestAnimationFrame(tick);

    object.scene.rotation.y += 0.01;
    const deltaTime = clock.getElapsedTime();
    object.scene.position.y = Math.sin(deltaTime) * 0.2;
    light1.position.set(camera.position.x + 1, camera.position.y, camera.position.z);
    controls.update();

    renderer.render(scene, camera);
  }

  window.addEventListener("resize", () => {
    renderer.setSize(canvasWrapper.clientWidth, canvasWrapper.clientHeight);
    camera.aspect = canvasWrapper.clientWidth / canvasWrapper.clientHeight;
    camera.updateProjectionMatrix();
  });
  tick();
});
</script>

<template>
  <div id="canvas-wrapper">
    <canvas id="canvas"/>
  </div>
</template>

<style scoped>

</style>