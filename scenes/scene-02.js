const geometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshLambertMaterial({
  color: 0x348feb,
  side: THREE.DoubleSide,
});

const cube = new THREE.Mesh(
  // x, y, z
  new THREE.BoxBufferGeometry(1, 1, 1),
  material
);

const circle = new THREE.Mesh(
  // radius, segments
  new THREE.CircleBufferGeometry(1, 50),
  material
);

const cone = new THREE.Mesh(
  // radius, height, segments
  new THREE.ConeBufferGeometry(0.5, 1, 50),
  material
);

const cylinder = new THREE.Mesh(
  // radiusTop, radiusBottom, height, segments
  new THREE.CylinderBufferGeometry(0.5, 0.5, 1, 50),
  material
);

const plane = new THREE.Mesh(
  // width, height, segments
  new THREE.PlaneBufferGeometry(1, 1, 50),
  material
);

const sphere = new THREE.Mesh(
  // radius, widthSegments, heightSegments
  new THREE.SphereBufferGeometry(0.5, 50, 50),
  material
);

scene.add(cube);
scene.add(circle);
scene.add(cone);
scene.add(plane);
scene.add(cylinder);
scene.add(sphere);

circle.position.x = 2;
circle.rotation.x = THREE.Math.degToRad(-90);

cone.position.x = -2;

cylinder.position.z = -2;

plane.position.z = 2;
plane.rotation.x = THREE.Math.degToRad(-90);

sphere.position.y = 2;

x3.add(cube, { label: "cube" });
x3.add(circle, { label: "circle" });
x3.add(cone, { label: "cone" });
x3.add(cylinder, { label: "cylinder" });
x3.add(plane, { label: "plane" });
x3.add(sphere, { label: "sphere" });

renderer.setAnimationLoop(() => {
  x3.tick();
  x3.fps(() => {
    renderer.render(scene, camera);
  });

  renderer.render(scene, camera);
});

x3.add(camera, { open: false });
x3.add(light, { helper: { visible: false } });
