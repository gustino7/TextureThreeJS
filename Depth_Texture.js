import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//TEXTURE
const width = 32, height = 32;
const depthTexture = new THREE.DepthTexture(width, height);
depthTexture.type = THREE.UnsignedShortType;
depthTexture.format = THREE.DepthStencilFormat;
depthTexture.needsUpdate = true;

const geometry = new THREE.BoxGeometry(3,3,3);
const material = new THREE.MeshDepthMaterial({
	depthPacking: THREE.RGBADepthPacking,
	map: depthTexture
});

const cone = new THREE.Mesh(geometry, material);
scene.add(cone);

camera.position.z = 10;

function animate() {
	requestAnimationFrame( animate );

	cone.rotation.x += 0.005;
	cone.rotation.z += 0.005;
    cone.rotation.y -= 0.0008;

	renderer.render( scene, camera );
}

animate();
