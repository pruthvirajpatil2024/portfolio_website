import { ContactShadows, PerspectiveCamera, View } from "@react-three/drei";
import { Suspense } from "react";

import CricketBallPhoto from "./CricketBallPhoto";

const HeroBallExperience = () => {
  return (
    <View className="w-full h-full">
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0.6, 9]} fov={45} />

        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 6, 4]} intensity={1.8} castShadow />
        <directionalLight position={[-4, 2, 3]} intensity={0.5} />

        <CricketBallPhoto />

        <ContactShadows
          position={[0, -1.82, 0]}
          opacity={0.55}
          scale={7}
          blur={2.4}
          far={4}
        />
      </Suspense>
    </View>
  );
};

export default HeroBallExperience;
