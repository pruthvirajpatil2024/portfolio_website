import { useEffect, useRef, useState } from "react";
import { Float, useTexture } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as THREE from "three";

import OutlinedPhoto from "./OutlinedPhoto";

const GROUND_Y = -1.8;
const ENTRY_Y = 3.5;
const ENTRY_X = -9;
const EXIT_X = 9;
const REST_X = 0;
const PEAK_Y = 0.5;
const PHOTO_HOLD_SECONDS = 4;

const CricketBallPhoto = () => {
  const ballRef = useRef(null);
  const photoRef = useRef(null);
  const texture = useTexture("/images/profile.png");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
  }, [texture]);

  // View (used outside a <Canvas>) tunnels its children into the shared
  // canvas a tick after this component mounts, so the mesh refs below aren't
  // attached yet on first render. Poll a couple of frames until they are.
  useEffect(() => {
    let frameId;
    const check = () => {
      if (ballRef.current && photoRef.current) {
        setReady(true);
      } else {
        frameId = requestAnimationFrame(check);
      }
    };
    check();
    return () => cancelAnimationFrame(frameId);
  }, []);

  useGSAP(() => {
    const ball = ballRef.current;
    const photo = photoRef.current;
    if (!ready || !ball || !photo) return;

    gsap.set(ball.position, { x: ENTRY_X, y: ENTRY_Y, z: 0 });
    gsap.set(ball.scale, { x: 1, y: 1, z: 1 });
    gsap.set(ball.rotation, { z: 0 });
    gsap.set(photo.scale, { x: 0, y: 0, z: 0 });
    ball.visible = true;
    photo.visible = false;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });

    // Ball flies in from the left and falls toward the ground (projectile arc)
    tl.to(ball.position, { x: REST_X, duration: 1.1, ease: "power1.out" })
      .to(ball.position, { y: GROUND_Y, duration: 1.1, ease: "power2.in" }, "<")
      .to(ball.rotation, { z: "-=6.28", duration: 1.1, ease: "none" }, "<");

    // Impact squash on the ground
    tl.to(ball.scale, { x: 1.3, y: 0.6, z: 1.3, duration: 0.12, ease: "power1.out" }).to(
      ball.scale,
      { x: 1, y: 1, z: 1, duration: 0.2, ease: "back.out(2)" }
    );

    // Bounce back up to half height
    tl.to(ball.position, { y: PEAK_Y, duration: 0.55, ease: "power2.out" }, "<").to(
      ball.rotation,
      { z: "-=3.14", duration: 0.55, ease: "none" },
      "<"
    );

    // Crossfade: ball shrinks away, photo grows in at the same spot
    tl.to(ball.scale, {
      x: 0,
      y: 0,
      z: 0,
      duration: 0.35,
      ease: "power1.in",
      onStart: () => {
        photo.visible = true;
      },
      onComplete: () => {
        ball.visible = false;
      },
    }).to(photo.scale, { x: 1, y: 1, z: 1, duration: 0.4, ease: "back.out(1.6)" }, "<");

    // Hold the photo on screen
    tl.to({}, { duration: PHOTO_HOLD_SECONDS });

    // Crossfade back: photo shrinks away, ball grows back in
    tl.to(photo.scale, {
      x: 0,
      y: 0,
      z: 0,
      duration: 0.3,
      ease: "power1.in",
      onStart: () => {
        ball.visible = true;
        ball.scale.set(0, 0, 0);
      },
      onComplete: () => {
        photo.visible = false;
      },
    }).to(ball.scale, { x: 1, y: 1, z: 1, duration: 0.35, ease: "back.out(1.6)" }, "<");

    // Roll off toward the rightmost edge of the site, dropping to the ground
    // as it goes, then disappear once it's off the right side
    tl.to(ball.position, { x: EXIT_X, y: GROUND_Y, duration: 1.1, ease: "power1.in" })
      .to(ball.rotation, { z: "-=6.28", duration: 1.1, ease: "none" }, "<")
      .to(ball.scale, { x: 0.3, y: 0.3, z: 0.3, duration: 0.25, ease: "power1.in" }, "-=0.25")
      .set(ball, { visible: false });

    // Reset instantly, ready for the next loop
    tl.set(ball.position, { x: ENTRY_X, y: ENTRY_Y });
    tl.set(ball.scale, { x: 1, y: 1, z: 1 });
    tl.set(ball.rotation, { z: 0 });
  }, [ready]);

  return (
    <>
      <group ref={ballRef}>
        <mesh castShadow>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshStandardMaterial color="#7A1414" roughness={0.35} metalness={0.15} />
        </mesh>
        {/* Stitched seam, two rings crossing the ball like a real cricket ball */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.55, 0.012, 8, 64]} />
          <meshStandardMaterial color="#f5f0e6" roughness={0.6} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.55, 0.012, 8, 64]} />
          <meshStandardMaterial color="#f5f0e6" roughness={0.6} />
        </mesh>
      </group>

      <group ref={photoRef} visible={false} position={[0, PEAK_Y, 0]}>
        <Float speed={2} rotationIntensity={0.15} floatIntensity={0.4}>
          <OutlinedPhoto texture={texture} width={3.86} height={4} />
        </Float>
      </group>
    </>
  );
};

export default CricketBallPhoto;
