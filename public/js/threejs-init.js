import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.137.5/build/three.module.js";

let scene, camera, renderer, clock, mesh;
let mouse = new THREE.Vector2();

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document
    .getElementById("threejs-background")
    .appendChild(renderer.domElement);

  clock = new THREE.Clock();

  const geometry = new THREE.PlaneGeometry(20, 20, 64, 64);

  const vertexShader = `
        uniform float time;
        uniform vec2 mouse;
        varying vec2 vUv;
        void main() {
            vUv = uv;
            vec3 pos = position;
            float dist = distance(uv, mouse);
            pos.z += sin(pos.x * 5.0 + time * 2.0) * 0.5;
            pos.z += sin(pos.y * 5.0 + time * 2.0) * 0.5;
            pos.z += cos(pos.x * 5.0 + time * 3.0) * 0.3;
            pos.z += cos(pos.y * 5.0 + time * 3.0) * 0.3;
            pos.z += 1.0 * exp(-5.0 * dist); 
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `;

  const fragmentShader = `
        varying vec2 vUv;
        void main() {
            vec3 color1 = vec3(0.8, 0.2, 0.4); // Darker Pink
            vec3 color2 = vec3(0.1, 0.1, 0.3); // Dark Blue
            vec3 color = mix(color1, color2, vUv.y);
            gl_FragColor = vec4(color, 1.0);
        }
    `;

  const uniforms = {
    time: { value: 0 },
    mouse: { value: new THREE.Vector2() },
  };

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
  });

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  window.addEventListener("mousemove", onMouseMove, false);
  window.addEventListener("resize", onWindowResize, false);

  animate();
}

function onMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  mesh.material.uniforms.mouse.value.set(
    mouse.x * 0.5 + 0.5,
    mouse.y * 0.5 + 0.5
  );
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  mesh.material.uniforms.time.value = clock.getElapsedTime();

  renderer.render(scene, camera);
}

init();
