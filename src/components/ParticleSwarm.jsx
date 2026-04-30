import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

const ParticleSwarm = ({ darkMode }) => {
  const mountRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const count = 60000;
  
  // Create geometry and initial data
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    const c = new Float32Array(count * 3);
    const s = new Float32Array(count); // Speeds
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 500;
      p[i * 3 + 1] = (Math.random() - 0.5) * 500;
      p[i * 3 + 2] = (Math.random() - 0.5) * 500;
      s[i] = 0.5 + Math.random() * 2;
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

    // Create a glowing star texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    const drawStar = (cx, cy, spikes, outerRadius, innerRadius) => {
      let rot = Math.PI / 2 * 3;
      let x = cx;
      let y = cy;
      let step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fillStyle = 'white';
      ctx.fill();
    };

    drawStar(32, 32, 5, 25, 10);
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 2.2,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
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
      time += 0.0015; // Slower time increment

      const positions = geometry.attributes.position.array;
      const colors = geometry.attributes.color.array;

      const mx = mouse.current.x * 200;
      const my = mouse.current.y * 200;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // --- MAXIMIZED SCATTER FLOW ---
        // Instead of a single circle, we use a wide, noisy base distribution
        const strandId = i % 150; // More strands
        const t = time * points.speeds[i] + (i * 0.005);
        
        // Very wide base scatter
        const xInitial = ((i % 200) / 200 - 0.5) * 1400; 
        const yInitial = (Math.floor(i / 200) / (count/200) - 0.5) * 1000;
        
        // Noisy liquefied offsets
        const noiseScale = 0.002;
        const driftX = Math.sin(yInitial * noiseScale + t) * 150;
        const driftY = Math.cos(xInitial * noiseScale - t) * 150;
        const driftZ = Math.sin(t * 0.5 + i * 0.001) * 300;
        
        let x = xInitial + driftX;
        let y = yInitial + driftY;
        let z = driftZ;

        // Interaction: Stronger mouse pull/push
        const dx = x - mx;
        const dy = y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 300) {
          const force = (300 - d) / 300;
          x += dx * force * 1.2;
          y += dy * force * 1.2;
        }

        positions[i3] = x;
        positions[i3 + 1] = y;
        positions[i3 + 2] = z;

        // --- CINEMATIC COLORING (Red/Orange/Yellow Glow) ---
        // Map distance and time to a fiery palette
        const heat = Math.abs(Math.sin(t * 0.2 + i * 0.0001));
        
        if (heat > 0.6) {
          color.setRGB(1, 0.2 + heat * 0.5, 0); // Yellow-Orange
        } else {
          color.setRGB(0.86, 0.15, 0.15); // The Bad Company Red
        }
        
        // Fade out based on distance from center for a soft edge
        const distFromCenter = Math.sqrt(x*x + y*y) / 400;
        const opacity = Math.max(0, 1 - distFromCenter);
        
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
