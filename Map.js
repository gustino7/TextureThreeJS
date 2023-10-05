import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
const light = new THREE.PointLight(0xffffff, 1);

light.position.set(0, 5, 2);
scene.add(light);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const img = new THREE.TextureLoader().load("./texture/grass.jpg");
const box = new THREE.BoxGeometry(1, 1, 1);

//map
const material = new THREE.MeshPhongMaterial({
  map: img,
  shininess: 250,
  bumpMap: img, // seolah-oleh memberikan kedalaman pada texturenya sehigga terlihat 3d warna putih akan timbul dan hitam akan tenggelam
  bumpScale: 100, // semakin besar nilai bumpScale maka semakin dalam kedalaman yang terlihat
  // displacementMap: img, //dapat menempelkan texture dengan scale tertentu
  // displacementScale: 1, // semakin besar nilai displacementScale maka semakin jauh texture yang ditempelkan pada object
  // lightMap: img, //menambahkan cahaya pada texturenya sendiri
  // lightMapIntensity: 1 //semakin besar intensity maka semakin terang
});

camera.position.z = 5;
const mesh = new THREE.Mesh(box, material);
scene.add(mesh);

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.005;
  mesh.rotation.z += 0.005;
  mesh.rotation.y -= 0.0008;

  renderer.render(scene, camera);
}
animate();
