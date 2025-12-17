'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './BackgroundFX.module.css';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  hue: number;
};

const isReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const isCoarsePointer = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(pointer: coarse), (hover: none)').matches;

export default function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (isReducedMotion() || isCoarsePointer()) {
      setEnabled(false);
      return;
    }

    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let lastTs = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, window.innerWidth);
      height = Math.max(1, window.innerHeight);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointerMove = (e: PointerEvent) => {
      pointerRef.current = { x: e.clientX, y: e.clientY, active: true };

      const hueBase = 190;
      const spread = 70;

      particlesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        life: 1,
        size: 26 + Math.random() * 18,
        hue: hueBase + (Math.random() - 0.5) * spread,
      });

      if (particlesRef.current.length > 90) {
        particlesRef.current.splice(0, particlesRef.current.length - 90);
      }
    };

    const onPointerLeave = () => {
      pointerRef.current.active = false;
    };

    const step = (ts: number) => {
      rafRef.current = window.requestAnimationFrame(step);

      if (document.visibilityState !== 'visible') return;

      const delta = ts - lastTs;
      if (delta < 1000 / 30) return;
      lastTs = ts;

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const pointer = pointerRef.current;
      if (particles.length === 0 && !pointer.active) return;

      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const p = particles[i];
        p.life *= 0.93;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.985;

        if (p.life < 0.02) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = Math.min(0.28, p.life * 0.28);
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, `hsla(${p.hue}, 90%, 70%, ${alpha})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 90%, 60%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      if (pointer.active) {
        const halo = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 240);
        halo.addColorStop(0, 'rgba(110, 231, 255, 0.05)');
        halo.addColorStop(1, 'rgba(110, 231, 255, 0)');
        ctx.fillStyle = halo;
        ctx.fillRect(0, 0, width, height);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave, { passive: true });

    rafRef.current = window.requestAnimationFrame(step);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      particlesRef.current = [];
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className={styles.fx} aria-hidden>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
