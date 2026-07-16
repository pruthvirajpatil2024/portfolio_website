import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

const SharedCanvas = () => (
  <Canvas
    shadows
    eventSource={document.body}
    eventPrefix="client"
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 40,
      pointerEvents: "none",
    }}
  >
    <View.Port />
  </Canvas>
);

export default SharedCanvas;
