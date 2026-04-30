import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

const ParticleSwarm = ({ darkMode }) => {
  const mountRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const count = 150000;
  
  // Create geometry and initial data
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    const c = new Float32Array(count * 3);
    const s = new Float32Array(count); // Speeds
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 500;
      p[i * 3 + 1] = (Math.random() - 0.5) * 500;
      p[i * 3 + 2] = (Math.random() - 0.5) * 500;
      s[i] = 0.5 + Math.random() * 2.5; // Slightly wider speed range
    }
    return { positions: p, colors: c, speeds: s };
  }, [count]);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 3000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(points.positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(points.colors, 3));

    // Create a glowing soft dot texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 1.5, // Slightly larger for more 'fill'
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 1.0, // Maximum opacity
      blending: THREE.AdditiveBlending,
      depthTest: false,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    const target = new THREE.Vector3();
    const color = new THREE.Color();
    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.002; // Slightly faster but still smooth

      const positions = geometry.attributes.position.array;
      const colors = geometry.attributes.color.array;

      const mx = mouse.current.x * 250;
      const my = mouse.current.y * 250;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // --- MAXIMIZED LIQUEFIED SCATTER ---
        const strandId = i % 120; 
        const t = time * points.speeds[i] + (i * 0.005);
        
        // Very wide base scatter
        const xInitial = ((i % 200) / 200 - 0.5) * 1600; 
        const yInitial = (Math.floor(i / 200) / (count/200) - 0.5) * 1200;
        
        // Aggressive liquefied offsets (Curl-like motion)
        const noiseScale = 0.003;
        const driftX = Math.sin(yInitial * noiseScale + t) * 200;
        const driftY = Math.cos(xInitial * noiseScale - t) * 200;
        const driftZ = Math.sin(t * 0.8 + i * 0.001) * 400;
        
        let x = xInitial + driftX;
        let y = yInitial + driftY;
        let z = driftZ;

        // Interaction: High-impact mouse distortion
        const dx = x - mx;
        const dy = y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 350) {
          const force = (350 - d) / 350;
          x += dx * force * 1.5;
          y += dy * force * 1.5;
        }

        positions[i3] = x;
        positions[i3 + 1] = y;
        positions[i3 + 2] = z;

        // --- INTENSE FIERY COLORING ---
        // Increase red/orange saturation
        const heat = Math.abs(Math.sin(t * 0.4 + i * 0.0001));
        
        if (heat > 0.5) {
          // Glow Orange-Yellow
          color.setRGB(1, 0.4 + heat * 0.4, 0.1); 
        } else if (heat > 0.2) {
          // Intense Studio Red
          color.setRGB(1, 0, 0); 
        } else {
          // Deep Crimson (Bad Company Brand)
          color.setRGB(0.8, 0.1, 0.1); 
        }
        
        // Distance-based fade
        const distFromCenter = Math.sqrt(x*x + y*y) / 600;
        const opacity = Math.max(0, 1.2 - distFromCenter);
        
        colors[i3] = color.r * opacity;
        colors[i3 + 1] = color.g * opacity;
        colors[i3 + 2] = color.b * opacity;
      }

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.color.needsUpdate = true;

      // Smooth camera tilt
      camera.position.x += (mouse.current.x * 100 - camera.position.x) * 0.05;
      camera.position.y += (mouse.current.y * 100 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      texture.dispose();
    };
  }, [points]);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none opacity-80 dark:opacity-90" />;
};

export default ParticleSwarm;
