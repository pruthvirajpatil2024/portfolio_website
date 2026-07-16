import { useMemo } from "react";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Rather than framing the photo with a rectangular border, this samples a
// ring of points around each transparent pixel and paints it solid white
// whenever a nearby pixel is opaque - producing a bold outline that hugs the
// actual (curved, cut-out) silhouette of the subject, like a sticker edge.
const fragmentShader = /* glsl */ `
  uniform sampler2D map;
  uniform vec3 uColor;
  uniform float uOutline;
  uniform float uAspect;
  varying vec2 vUv;

  void main() {
    vec4 texel = texture2D(map, vUv);

    if (texel.a > 0.5) {
      gl_FragColor = vec4(texel.rgb, 1.0);
      return;
    }

    const int SAMPLES = 20;
    float maxAlpha = 0.0;
    for (int i = 0; i < SAMPLES; i++) {
      float angle = 6.28318530718 * float(i) / float(SAMPLES);
      vec2 offset = vec2(cos(angle) / uAspect, sin(angle)) * uOutline;
      maxAlpha = max(maxAlpha, texture2D(map, vUv + offset).a);
    }

    if (maxAlpha > 0.5) {
      gl_FragColor = vec4(uColor, 1.0);
    } else {
      discard;
    }
  }
`;

const OutlinedPhoto = ({
  texture,
  width,
  height,
  outlineWidth = 0.028,
  color = "#ffffff",
}) => {
  const uniforms = useMemo(
    () => ({
      map: { value: texture },
      uColor: { value: new THREE.Color(color) },
      uOutline: { value: outlineWidth },
      uAspect: { value: width / height },
    }),
    [texture, color, outlineWidth, width, height]
  );

  return (
    <mesh>
      <planeGeometry args={[width, height]} />
      <shaderMaterial
        transparent
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

export default OutlinedPhoto;
