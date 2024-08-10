// Import THREE.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.module.js';

let scene, camera, renderer;
let grid = [];
const gridSize = 10;
const boxSize = 1;
const spacing = 1.2;

init();
animate();

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 20;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

  for (let x = -gridSize; x <= gridSize; x++) {
    for (let y = -gridSize; y <= gridSize; y++) {
      for (let z = -gridSize; z <= gridSize; z++) {
        const box = new THREE.Mesh(geometry, material);
        box.position.set(x * spacing, y * spacing, z * spacing);
        grid.push(box);
        scene.add(box);
      }
    }
  }

  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  grid.forEach(box => {
    box.position.z += 0.01;
    if (box.position.z > gridSize * spacing) {
      box.position.z = -gridSize * spacing;
    }
  });

  renderer.render(scene, camera);
}