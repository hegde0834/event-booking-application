import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Celebration3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || 450;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 24;

    // Renderer setup with alpha transparency
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xf59e0b, 3, 50); // Gold warm light
    pointLight1.position.set(12, 10, 15);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xe11d74, 3, 50); // Festive Rose light
    pointLight2.position.set(-12, -8, 12);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x7c3aed, 2, 50); // Royal violet light
    pointLight3.position.set(0, 12, 8);
    scene.add(pointLight3);

    // 3D Objects Group
    const group = new THREE.Group();
    scene.add(group);

    // Materials
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x78350f,
      emissiveIntensity: 0.2,
    });

    const rubyMaterial = new THREE.MeshStandardMaterial({
      color: 0xbe123c,
      metalness: 0.7,
      roughness: 0.25,
      emissive: 0x4c0519,
      emissiveIntensity: 0.3,
    });

    const emeraldMaterial = new THREE.MeshStandardMaterial({
      color: 0x0d9488,
      metalness: 0.8,
      roughness: 0.2,
    });

    const diamondMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.7,
      opacity: 1,
      transparent: true,
      roughness: 0.1,
      metalness: 0.1,
      ior: 1.5,
    });

    // 1. Interlocked Golden Wedding Rings
    const ringGeo1 = new THREE.TorusGeometry(3.2, 0.45, 24, 64);
    const ring1 = new THREE.Mesh(ringGeo1, goldMaterial);
    ring1.position.set(7.5, 2.5, -2);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.8, 0.4, 24, 64);
    const ring2 = new THREE.Mesh(ringGeo2, rubyMaterial);
    ring2.position.set(9.2, 1.2, 0);
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    // 2. 3D Floating Sparkling Diamonds & Gems
    const gemGeo = new THREE.OctahedronGeometry(1.6, 0);
    const gem1 = new THREE.Mesh(gemGeo, diamondMaterial);
    gem1.position.set(-8, 3, -1);
    group.add(gem1);

    const gem2 = new THREE.Mesh(gemGeo, emeraldMaterial);
    gem2.position.set(-6, -4, 2);
    gem2.scale.set(0.7, 0.7, 0.7);
    group.add(gem2);

    // 3. Floating 3D Star & Dodecahedron Celebrations
    const starGeo = new THREE.DodecahedronGeometry(1.3, 0);
    const star1 = new THREE.Mesh(starGeo, goldMaterial);
    star1.position.set(4, -4.5, 3);
    group.add(star1);

    const star2 = new THREE.Mesh(starGeo, rubyMaterial);
    star2.position.set(-10, 0, -4);
    star2.scale.set(0.8, 0.8, 0.8);
    group.add(star2);

    // 4. 3D Floating Particles / Sparkles Field
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 45;
      positions[i + 1] = (Math.random() - 0.5) * 25;
      positions[i + 2] = (Math.random() - 0.5) * 20;
      scales[i / 3] = Math.random();
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Particle texture
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.3, "rgba(245, 158, 11, 0.8)");
    gradient.addColorStop(1, "rgba(225, 29, 116, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    const pTexture = new THREE.CanvasTexture(canvas);
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.65,
      map: pTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouseX = (clientX / width - 0.5) * 2;
      mouseY = -(clientY / height - 0.5) * 2;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const newW = mount.clientWidth;
      const newH = mount.clientHeight || 450;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.y = targetX * 0.4 + elapsed * 0.15;
      group.rotation.x = -targetY * 0.3;

      // Rotate individual meshes
      ring1.rotation.z += 0.008;
      ring1.rotation.y += 0.012;
      ring2.rotation.x += 0.01;
      ring2.rotation.z += 0.007;

      gem1.rotation.y += 0.015;
      gem1.rotation.x += 0.01;
      gem2.rotation.y -= 0.012;

      star1.rotation.y += 0.01;
      star2.rotation.x -= 0.01;

      // Float effect on Y
      gem1.position.y = 3 + Math.sin(elapsed * 1.5) * 0.6;
      gem2.position.y = -4 + Math.cos(elapsed * 1.8) * 0.5;
      star1.position.y = -4.5 + Math.sin(elapsed * 2) * 0.4;
      ring1.position.y = 2.5 + Math.cos(elapsed * 1.2) * 0.4;

      // Particle subtle flow
      particles.rotation.y = elapsed * 0.03;
      particles.rotation.x = targetY * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="celebration-3d-canvas"
      aria-hidden="true"
    />
  );
}
