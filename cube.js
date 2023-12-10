import * as THREE from 'https://unpkg.com/three/build/three.module.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 300,300);
document.body.appendChild( renderer.domElement );
document.getElementById('canvas-container').appendChild(renderer.domElement);

const geometry = new THREE.OctahedronGeometry( 1, 0 );
const material = new THREE.LineBasicMaterial( {
	color: 0xffffff,	
} );
const cube = new THREE.LineSegments( new THREE.EdgesGeometry(geometry),
 material );

scene.add( cube );

camera.position.z = 2;
camera.position.y = 0.3;

function animate() {

    requestAnimationFrame( animate );   
    cube.rotation.y += 0.010; 
    renderer.render( scene, camera );

}

animate();