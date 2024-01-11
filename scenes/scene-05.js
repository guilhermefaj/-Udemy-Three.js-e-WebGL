const ball = new THREE.Mesh(
  new THREE.SphereBufferGeometry(0.5, 60, 60),
  new THREE.MeshPhysicalMaterial({ color: 0xffffff })
);

ball.position.x = 1;
ball.position.y = 1;
ball.castShadow = true;
scene.add(ball);

const floor = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(10, 10),
  new THREE.MeshPhysicalMaterial({
    color: 0xff0909,
    side: THREE.DoubleSide,
    metalness: 0.2,
    roughness: 0.5,
  })
);

floor.receiveShadow = true;
floor.rotation.x = THREE.Math.degToRad(-90);
scene.add(floor);

const shadowLight = new THREE.PointLight(0xffffff, 3);
shadowLight.position.y = 5;
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
