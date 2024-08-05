<script lang="ts" setup>
import * as THREE from "three";
import {Clock} from "three";
// @ts-ignore
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";


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
  const diamond = await loader.loadAsync('/diamond.glb');
  diamond.scene.position.set(0, 0, 0);
  diamond.scene.rotation.set(0, 0, 0.5);
  scene.add(diamond.scene);

  const light1 = new THREE.DirectionalLight(0xc27ab1, 5);
  scene.add(light1);
  const light2 = new THREE.SpotLight(0x4140ff, 10);
  light2.position.set(0, 2, 2);
  scene.add(light2);
  const light3 = new THREE.SpotLight(0x35ecff, 10);
  light3.position.set(2, 2, 0);
  scene.add(light3);
  const light4 = new THREE.SpotLight(0xff4f55, 10);
  light4.position.set(-2, -2, -2);
  scene.add(light4);

  renderer.render(scene, camera);

  const clock = new Clock();
  const tick = () => {
    requestAnimationFrame(tick);

    diamond.scene.rotation.y += 0.01;
    const deltaTime = clock.getElapsedTime();
    diamond.scene.position.y = Math.sin(deltaTime) * 0.2 - 0.3;
    light1.position.set(camera.position.x + 1, camera.position.y, camera.position.z);
    controls.update();

    renderer.render(scene, camera);
  }


  window.addEventListener("resize", () => {
    renderer.setSize(0, 0);
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