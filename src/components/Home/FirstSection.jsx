import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Link } from "react-router-dom";

const generateSpherePoints = (numPoints, radius) => {
  const points = [];
  const spherical = new THREE.Spherical();

  for (let i = 0; i < numPoints; i++) {
    const phi = Math.acos(2 * Math.random() - 1); 
    const theta = 2 * Math.PI * Math.random(); 

    spherical.radius = radius;
    spherical.phi = phi;
    spherical.theta = theta;

    const position = new THREE.Vector3().setFromSpherical(spherical);
    points.push(position);
  }

  return points;
};

const DroneModel = React.forwardRef(({ scale, visible }, ref) => {
  const { scene } = useGLTF("/drone.glb");

  useFrame(() => {
    if (scene) {
      scene.rotation.y += 0.00;
      scene.rotation.x += 0.000;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={scale}
      visible={visible}
      position={[0, 0, 0]}
      rotation={[0, 3.14, 0]}
    />
  );
});

const ParticleSphere = () => {
  const [phase, setPhase] = useState(0); 
  const radius = 30; 
  const numPoints = 1200;
  const points = generateSpherePoints(numPoints, radius);

  const [showText, setShowText] = useState(false);

  return (
    <div className="relative flex justify-center items-center w-full h-screen bg-black">
      {/* Right Side: Canvas */}
      <div style={{ width: "100%", height: "100%" }}>
        <Canvas
          shadows
          camera={{ position: [0, 0, 75] }} 
          style={{ height: "100%" }}
        >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 10]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <spotLight
            position={[-10, 15, 10]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
          />
          <TransitionController
            points={points}
            radius={radius}
            numPoints={numPoints}
            phase={phase}
            setPhase={setPhase}
            setShowText={setShowText} 
          />
        </Canvas>
      </div>

      {/* Title, Description, and Button (will show after animation) */}
      {showText && (
        <div className="absolute text-white text-center">
          <h1
          className="mb-4 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
          style={{
            fontFamily: "Cabinet Grotesk, sans-serif",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", 
          }}
        >
          L'Art et la Créativité par Drone
        </h1>
        <p
          className="mb-6 text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          style={{
            fontFamily: "Sentient, serif",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
          }}
        >
          Des performances de drones spectaculaires aux services pratiques, pour répondre à vos besoins industriels, agricoles, et créatifs.
        </p>

            <button style={{ backgroundColor: "#48bdd2" }} className="relative px-6 py-3 text-white  rounded-full group focus:outline-none focus:ring-4 transition-all ml-5">
            <span className="text-white pr-5"><Link to="/contact">Contact-nous</Link></span>
            {/* Arrow */}
            <span
                className="absolute inset-y-0 right-4 flex items-center transition-transform duration-300 translate-x-0 group-hover:translate-x-2 "
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-white "
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                />
                </svg>
            </span>
            </button>
        </div>
      )}
    </div>
  );
};

const TransitionController = ({ points, radius, numPoints, phase, setPhase, setShowText }) => {
  const droneRef = useRef();
  const particlesRef = useRef();

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.005;
      particlesRef.current.rotation.x += 0.002; 
    }
  });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (phase === 0) {
      if (droneRef.current.scale.x > 0.05) {
        droneRef.current.scale.x -= 0.1;  
        droneRef.current.scale.y -= 0.1;
        droneRef.current.scale.z -= 0.1;
      } else {
        setPhase(0.5); 
      }
    }

    if (phase === 0.5) {
      if (t > 3) {
        setPhase(1); 
      }
    }


    if (phase === 1) {
        setPhase(2); 
    }


    if (phase === 2) {
      particlesRef.current.children.forEach((particle, idx) => {
        particle.position.lerp(points[idx], 0.05); 
      });
      setShowText(true);
    }
    
  });

  return (
    <>
      {/* Drone Model */}
      <DroneModel
        ref={droneRef}
        scale={[40, 40, 40]} 
        visible={phase === 0 || phase === 0.5}
        position={[0, 0, -10]}
      />

      <group ref={particlesRef} visible={phase >= 1}> 
        {points.map((point, idx) => (
          <GlowingParticle
            key={idx}
            position={new THREE.Vector3(0, 0, 0)}
            color={getHorizontalGradientColor(point.x, radius)}
          />
        ))}
      </group>
    </>
  );
};

const GlowingParticle = ({ position, color }) => {
  return (
    <mesh position={position} castShadow>
      <sphereGeometry args={[0.5, 16, 16]} /> 
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.8}
        color={color}
        depthTest={true}
      />
    </mesh>
  );
};


const getHorizontalGradientColor = (x, radius) => {
  const normalizedX = (x + radius) / (2 * radius);
  const color = new THREE.Color();
  color.setHSL(0.6 - normalizedX * 0.2, 1.0, 0.3); 
  return color;
};

export default ParticleSphere;
