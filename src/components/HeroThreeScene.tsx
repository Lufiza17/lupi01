import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect WebGL capability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.5;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setHasWebGL(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Main 3D Tech Group
    const techGroup = new THREE.Group();
    scene.add(techGroup);

    // 1. Inner glowing core
    const coreGeo = new THREE.IcosahedronGeometry(0.8, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    techGroup.add(coreMesh);

    // 2. Middle Wireframe Sphere (Dodecahedron)
    const sphereGeo = new THREE.DodecahedronGeometry(1.4, 2);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, wireframeMat);
    techGroup.add(sphereMesh);

    // 3. Glowing Node Points on vertices
    const pointsGeo = new THREE.DodecahedronGeometry(1.4, 2);
    const pointsMat = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.055,
      transparent: true,
      opacity: 0.85,
    });
    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    techGroup.add(pointsMesh);

    // 4. Outer Holographic Orbital Rings
    const ring1Geo = new THREE.TorusGeometry(2.0, 0.018, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.6,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    techGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.3, 0.014, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 4;
    techGroup.add(ring2);

    // 5. Ambient Cloud Particles
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.4 + Math.random() * 0.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.035,
      transparent: true,
      opacity: 0.7,
    });
    const cloudParticles = new THREE.Points(particleGeo, particleMat);
    techGroup.add(cloudParticles);

    // Mouse Tracking with Smooth Interpolation
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - (rect.left + rect.width / 2);
      const clientY = e.clientY - (rect.top + rect.height / 2);
      targetX = (clientX / rect.width) * 1.8;
      targetY = (clientY / rect.height) * 1.8;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow (lerp)
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      // Base gentle rotation
      techGroup.rotation.y = elapsedTime * 0.25 + currentX;
      techGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.15 + currentY * 0.5;

      // Floating vertical bobbing
      techGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.12;

      // Rotate individual subcomponents
      sphereMesh.rotation.y -= 0.003;
      sphereMesh.rotation.z += 0.002;
      coreMesh.rotation.x += 0.006;
      coreMesh.rotation.y -= 0.005;
      ring1.rotation.z += 0.004;
      ring2.rotation.z -= 0.003;
      cloudParticles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer) {
        renderer.dispose();
      }
      if (container && renderer.domElement) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] lg:h-[540px] flex items-center justify-center">
      {/* Subtle background glow effect behind 3D object */}
      <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-600/30 via-cyan-500/25 to-violet-600/30 blur-3xl pointer-events-none animate-pulse-slow" />

      {hasWebGL ? (
        <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing relative z-10" />
      ) : (
        /* CSS 3D Animated Fallback */
        <div className="relative z-10 w-64 h-64 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-cyan-400/40 animate-spin" style={{ animationDuration: '14s' }} />
          <div className="absolute inset-4 rounded-full border border-violet-500/40 animate-spin" style={{ animationDuration: '9s', animationDirection: 'reverse' }} />
          <div className="absolute inset-10 rounded-full border border-blue-500/50 animate-pulse" />
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-violet-500 opacity-80 blur-sm animate-float" />
          <span className="relative z-20 text-xs font-mono font-bold tracking-widest text-cyan-300">LN • 2026</span>
        </div>
      )}

      {/* Interactive Micro-badge below 3D canvas */}
      <div className="absolute bottom-2 md:bottom-4 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-[11px] font-mono text-cyan-300/80 flex items-center gap-1.5 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        Interactive 3D Matrix • Drag or move mouse
      </div>
    </div>
  );
};
