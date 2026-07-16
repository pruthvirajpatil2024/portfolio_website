import { Environment, Float, OrbitControls, View, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

import SvgIconModel from "./SvgIconModel";

const GltfLogo = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  return (
    <group scale={model.scale} rotation={model.rotation}>
      <primitive object={scene.scene} />
    </group>
  );
};

const TechIconCardExperience = ({ model }) => {
  return (
    <View className="w-full h-full">
      {/*
        Each card gets its own Suspense boundary so a slow-loading Environment
        map in one card can't block the other cards sharing the same canvas.
      */}
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <spotLight
          position={[10, 15, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
        />
        <Environment preset="city" />

        {/*
          The Float component from @react-three/drei is used to
          create a simple animation of the model floating in space.
          The rotationIntensity and floatIntensity props control the
          speed of the rotation and float animations respectively.

          Cards backed by a .glb file render it via GltfLogo; cards without
          one (no ready-made 3D model) render a brand-icon SVG extruded into
          a real 3D mesh via SvgIconModel. Both share this same Float so
          every card animates identically regardless of source.
        */}
        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
          {model.iconPath ? (
            <SvgIconModel
              path={model.iconPath}
              color={model.iconColor}
              scale={model.scale}
              rotation={model.rotation}
            />
          ) : (
            <GltfLogo model={model} />
          )}
        </Float>

        <OrbitControls enableZoom={false} />
      </Suspense>
    </View>
  );
};

export default TechIconCardExperience;
