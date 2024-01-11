const cube = new THREE.Mesh(
  new THREE.BoxBufferGeometry(),
  new THREE.MeshLambertMaterial({ color: 0x368ed1 })
);

cube.position.x = 1;
cube.position.y = 1;
cube.castShadow = true;
scene.add(cube);

const floor = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(10, 10),
  new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide })
);

floor.receiveShadow = true;
floor.rotation.x = THREE.Math.degToRad(-90);
scene.add(floor);

const shadowLight = new THREE.SpotLight(0xffffff, 2, 6, 0.5);
shadowLight.position.y = 5;
shadowLight.castShadow = true;
shadowLight.target = cube;
scene.add(shadowLight);

x3.add(shadowLight, { helper: false });
x3.add(cube);

renderer.setAnimationLoop(() => {
  x3.tick();
  x3.fps(() => {
    renderer.render(scene, camera);
  });
});
