import { useMemo } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";

const extrudeSettings = {
  depth: 2,
  bevelEnabled: true,
  bevelThickness: 0.4,
  bevelSize: 0.3,
  bevelSegments: 3,
};

// Extrudes a flat brand-icon SVG path into a real 3D mesh so logos without a
// ready-made .glb model still get the same floating/rotating card treatment.
const SvgIconModel = ({ path, color, scale = 0.08, rotation = [0, 0, 0] }) => {
  const geometries = useMemo(() => {
    const loader = new SVGLoader();
    const svgData = loader.parse(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${path}"/></svg>`
    );

    const geoms = svgData.paths.flatMap((svgPath) =>
      SVGLoader.createShapes(svgPath).map(
        (shape) => new THREE.ExtrudeGeometry(shape, extrudeSettings)
      )
    );

    const box = new THREE.Box3();
    geoms.forEach((geometry) => {
      geometry.computeBoundingBox();
      box.union(geometry.boundingBox);
    });
    const center = box.getCenter(new THREE.Vector3());
    geoms.forEach((geometry) => geometry.translate(-center.x, -center.y, -center.z));

    return geoms;
  }, [path]);

  return (
    <group scale={[scale, -scale, scale]} rotation={rotation}>
      {geometries.map((geometry, index) => (
        <mesh key={index} geometry={geometry} castShadow receiveShadow>
          <meshStandardMaterial color={color} metalness={0.2} roughness={0.35} />
        </mesh>
      ))}
    </group>
  );
};

export default SvgIconModel;
