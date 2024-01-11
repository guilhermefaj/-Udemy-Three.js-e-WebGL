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
  new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide })
);

floor.receiveShadow = true;
floor.rotation.x = THREE.Math.degToRad(-90);
scene.add(floor);

const shadowLight = new THREE.PointLight(0xffffff, 0.3, 1000); //color, intensity, distance, decay
shadowLight.position.y = 3;
shadowLight.castShadow = true;
scene.add(shadowLight);

x3.add(shadowLight, { helper: { visible: false } });

renderer.setAnimationLoop(() => {
  x3.tick();
  x3.fps(() => {
    renderer.render(scene, camera);
  });
});
