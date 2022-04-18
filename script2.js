//Initialisation SCENE, CAMERA, RENDER
scene = new THREE.Scene();
bgTexture = new THREE.TextureLoader().load('textures/space.jpg');
scene.background = bgTexture;

camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Controle Camera
controls = new THREE.OrbitControls( camera, renderer.domElement );

controls.minDistance = 5;
controls.maxDistance = 31;

controls.rotateSpeed = 0;
//controls.maxPolarAngle = 1.57;
//controls.minPolarAngle = 1.57;


//Ajout Cube
const cubeGeometry = new THREE.BoxGeometry( 3.5, 2, 0.001 );
const cubeMaterial = new THREE.MeshNormalMaterial( {  flatShading: true } );

const cube1Texture = new THREE.TextureLoader().load( 'textures/pan1.jpg');
const cube1Material = new THREE.MeshBasicMaterial( { map: cube1Texture } );
const cube1 = new THREE.Mesh( cubeGeometry, cube1Material );
scene.add( cube1 );
cube1.position.z = 8;

const cube2Texture = new THREE.TextureLoader().load( 'textures/pan2.jpg');
const cube2Material = new THREE.MeshBasicMaterial( { map: cube2Texture } );
const cube2 = new THREE.Mesh( cubeGeometry, cube2Material );
scene.add( cube2 );
cube2.position.z = 18;

const cube3Texture = new THREE.TextureLoader().load( 'textures/pan.png');
const cube3Material = new THREE.MeshBasicMaterial( { map: cube3Texture } );
const cube3 = new THREE.Mesh( cubeGeometry, cube3Material );
scene.add( cube3 );
cube3.position.z = 28;

//Terre
const sphereGeometry = new THREE.SphereGeometry(2, 60, 60);
const sphereTexture = new THREE.TextureLoader().load( 'textures/earth.jpg');
const sphereMaterial = new THREE.MeshBasicMaterial( { map: sphereTexture } );
terre = new THREE.Mesh( sphereGeometry, sphereMaterial);
scene.add( terre );

//Lune
const sphereGeometry2 = new THREE.SphereGeometry(0.3, 20, 20);
const sphereTexture2 = new THREE.TextureLoader().load( 'textures/moon.jpg');
const sphereMaterial2 = new THREE.MeshBasicMaterial( { map: sphereTexture2 } );
lune = new THREE.Mesh( sphereGeometry2, sphereMaterial2);
scene.add( lune );
lune.position.x = 4;
lune.position.y = 0.5;

function animate()
{

    terre.rotation.y += 0.003;
    lune.rotation.y -= 0.002

    controls.update(); //controls.enableDamping = true
                       //controls.autoRotate = true

    renderer.render( scene, camera );
    requestAnimationFrame( animate );

}

animate();