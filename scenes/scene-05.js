const loader = new THREE.TextureLoader();

const polyester = new THREE.MeshStandardMaterial({
  map: loader.load("./textures/polyester_basecolor.jpg"),
  normalMap: loader.load(
    "https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/normal.jpg"
  ),
});

const ball = new THREE.Mesh(
  new THREE.SphereBufferGeometry(2, 60, 60),
  polyester
);

const wood = new THREE.MeshStandardMaterial({
  map: loader.load(
    "https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/basecolor.jpg"
  ),
  normalMap: loader.load(
    "https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/normal.jpg"
  ),
});

const metal = new THREE.MeshStandardMaterial({
  transparent: true,
  side: THREE.DoubleSide,
  map: loader.load(
    "https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/basecolor.jpg"
  ), // Cria apenas a cor base
  alphaMap: loader.load(
    "https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/opacity.jpg"
  ), // Cria a opacidade (transparência)
  metalnessMap: loader.load(
    "https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/metallic.jpg"
  ), // Cria o metal (brilho)
  emissiveMap: loader.load(
    "https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/emissive.jpg"
  ), // Cria a emissão (brilho)
  normalMap: loader.load(
    "https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/normal.jpg"
  ), // Cria a profundidade
  aoMap: loader.load(
    "https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/occlusion.jpg"
  ), // Cria a oclusão (sombra)
  roughnessMap: loader.load(
    "https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/roughness.jpg"
  ), // Cria a rugosidade (fosco/brilhante)
});

ball.position.x = 1;
ball.position.y = 2;
ball.castShadow = true;
scene.add(ball);

const floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(10, 10), metal);

floor.receiveShadow = true;
floor.rotation.x = THREE.Math.degToRad(-90);
scene.add(floor);

const shadowLight = new THREE.PointLight(0xffffff, 9);
shadowLight.position.y = 7;
shadowLight.castShadow = true;
shadowLight.target = ball;
scene.add(shadowLight);

x3.add(ball, { label: "ball" });
x3.add(floor, { label: "floor" });
x3.add(shadowLight, { label: "shadowLight" });

renderer.setAnimationLoop(() => {
  x3.tick();
  x3.fps(() => {
    renderer.render(scene, camera);
  });
});
