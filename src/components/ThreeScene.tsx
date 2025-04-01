"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  EffectComposer,
  RenderPass,
  BloomEffect,
  EffectPass,
} from "postprocessing";
import lSystemRules from "@/data/lSystem-rules.json";

export default function ThreeScene() {
  // Define Ref type
  const mountRef = useRef<HTMLDivElement>(null);
  // const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    if (!currentMount) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 80;
    camera.position.y = 70;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    renderer.setSize(width, height);

    currentMount.appendChild(renderer.domElement);

    // EffectComposer
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomEffect = new BloomEffect({
      luminanceThreshold: 0.8,
      luminanceSmoothing: 0.75,
      intensity: 0.5,
    });

    const effectPass = new EffectPass(camera, bloomEffect);
    effectPass.renderToScreen = true;

    composer.addPass(effectPass);

    const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

    const fragmentShader = `
varying vec2 vUv;
uniform float time;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
  float grain = random(vUv * time); // 控制 grain 强度
  float opacity = smoothstep(0.0, 1.0, grain);
  vec3 color = vec3(1.0 - grain); // 白底黑点
  gl_FragColor = vec4(color, 1.0);
}
`;

    // Add a tree group
    const tree = new THREE.Group();
    scene.add(tree);

    // Light
    // 方向光
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(100, 100, 100);
    scene.add(dirLight);

    // 环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // L-System Parameters
    const lSystemRuleIndex = Math.floor(Math.random()*lSystemRules.length);
    const treeParams = {
      length: 1,
      angle: Math.PI / (3 + 3*Math.random()),
      axiom: lSystemRules[lSystemRuleIndex].axiom,
      iterations: 5,
      startingRadius: 13.0,
      taperRate: 0.95
    };

    let lString = treeParams.axiom;
    for (let i = 0; i < treeParams.iterations; i++) {
      for (let j=0; j < lSystemRules[lSystemRuleIndex].rules.length; j++) {
        lString = lString.replaceAll(lSystemRules[lSystemRuleIndex].rules[j].original, lSystemRules[lSystemRuleIndex].rules[j].replacement);
      }
    }

    let cursor = new THREE.Object3D();
    tree.add(cursor);

    // 随机选择旋转轴
    const randomAxisRotation = (angle: number) => {
      const axes = ["x", "y", "z"];
      const axis = axes[Math.floor(Math.random() * axes.length)];

      switch (axis) {
        case "x":
          cursor.rotateX(angle);
          break;
        case "y":
          cursor.rotateY(angle);
          break;
        case "z":
          cursor.rotateZ(angle);
          break;
      }
    };

    const materialList: THREE.ShaderMaterial[] = [];
    const drawBranch = (depth: number, prevRadiusTop: number = 1.0) => {
      const radiusTop = prevRadiusTop * treeParams.taperRate;
      const radiusBottom = prevRadiusTop;

      const minRadius = 0.2;

      const finalRadiusTop = Math.max(radiusTop, minRadius);
      const finalRadiusBottom = Math.max(radiusBottom, minRadius);
      const branchLength = treeParams.length - depth * 0.1;

      const geometry = new THREE.CylinderGeometry(
        finalRadiusTop,
        finalRadiusBottom,
        branchLength,
        6
      );

      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          time: { value: 0.0 },
        },
      });

      materialList.push(material);
      const branch = new THREE.Mesh(geometry, material);

      branch.position.y = branchLength / 2;

      const branchGroup = new THREE.Object3D();
      branchGroup.add(branch);
      cursor.add(branchGroup);

      const newCursor = new THREE.Object3D();
      newCursor.position.y = branchLength;
      branchGroup.add(newCursor);

      return newCursor;
    };

    const treeStack: {
      matrix: THREE.Matrix4;
      parent: THREE.Object3D;
      currentRadius: number;
    }[] = [];

    const interpretLSystem = () => {
      let depth = 0;
      let currentRadius = treeParams.startingRadius;
      
      for (let i = 0; i < lString.length; i++) {
        const char = lString[i];

        switch (char) {
          case "F":
            cursor = drawBranch(depth, currentRadius);
            currentRadius *= treeParams.taperRate;
            break;

          case "X":
            const leafGeometry = new THREE.SphereGeometry(
              0.2 + 0.5 * Math.random(),
              6,
              6
            );
            const leafMaterial = new THREE.MeshStandardMaterial({
              color: 0x333333,
            });
            const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
            leaf.position.y = treeParams.length - depth * 0.1 + Math.random() * 5;
            leaf.position.x = (Math.random() - 0.5) * 1.0;
            leaf.position.z = (Math.random() - 0.5) * 1.0;

            cursor.add(leaf);
            break;

          case "+":
            randomAxisRotation(treeParams.angle);
            break;

          case "-":
            randomAxisRotation(-treeParams.angle);
            break;

          case "[":
            cursor.updateMatrixWorld();
            treeStack.push({
              matrix: cursor.matrixWorld.clone(),
              parent: cursor.parent!,
              currentRadius: currentRadius,
            });
            depth++;
            break;

          case "]":
            const restored = treeStack.pop();
            if (restored) {
              cursor = new THREE.Object3D();
              restored.parent.add(cursor);
              const parentInverseMatrix = new THREE.Matrix4()
                .copy(restored.parent.matrixWorld)
                .invert();
              const localMatrix = new THREE.Matrix4()
                .copy(restored.matrix)
                .premultiply(parentInverseMatrix);

              cursor.applyMatrix4(localMatrix);

              currentRadius = restored.currentRadius;
            }
            depth--;
            break;
        }
      }
    };

    interpretLSystem();

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      tree.rotation.y += 0.005;
      materialList.forEach((mat) => {
        mat.uniforms.time.value += 0.05;
      });

      composer.render();

      // renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-screen" />;
}
