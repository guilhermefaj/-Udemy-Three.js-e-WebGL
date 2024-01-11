const geometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0xffffff });

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

x3.add(cube, { label: "cube" });

renderer.setAnimationLoop(() => {
  cube.rotation.x += 0.0005;
  cube.rotation.y -= 0.002;

  x3.tick();
  x3.fps(() => {
    renderer.render(scene, camera);
  });

  renderer.render(scene, camera);
});

x3.add(camera, { open: false });
x3.add(light, { helper: { visible: false } });
