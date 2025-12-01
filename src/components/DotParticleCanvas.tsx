"use client";
import { useEffect, useRef, useCallback } from "react";

interface DotParticleCanvasProps {
  backgroundColor?: string;
  particleColor?: string;
  animationSpeed?: number;
}

const DotParticleCanvas = ({
  backgroundColor = "15, 15, 15",
  particleColor = "255, 255, 255",
  animationSpeed = 0.006,
}: DotParticleCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const requestIdRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);
  const dprRef = useRef<number>(1);
  const particles = useRef<any[]>([]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const dpr = window.devicePixelRatio || 1;
    dprRef.current = dpr;

    const displayWidth = wrapper.clientWidth;
    const displayHeight = wrapper.clientHeight;

    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;

    canvas.style.width = displayWidth + "px";
    canvas.style.height = displayHeight + "px";

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset
      ctx.scale(dpr, dpr);
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    ctx.fillStyle = `rgb(${backgroundColor})`;
    ctx.fillRect(0, 0, width, height);

    // Add random particles
    if (Math.random() < 0.3) {
      const size = Math.random() * 2 + 1;
      particles.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size,
        life: 0,
        maxLife: 1000 + Math.random() * 1000,
      });
    }

    particles.current = particles.current.filter((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life += 16;

      const alpha = 1 - p.life / p.maxLife;
      if (alpha <= 0) return false;

      ctx.fillStyle = `rgba(${particleColor}, ${alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      return true;
    });

    requestIdRef.current = requestAnimationFrame(animate);
  }, [backgroundColor, particleColor]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    requestIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestIdRef.current) cancelAnimationFrame(requestIdRef.current);
    };
  }, [animate, resizeCanvas]);

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-0 w-full h-full"
      style={{ backgroundColor: `rgb(${backgroundColor})`, zIndex: 0 }}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full pointer-events-none"
      />
    </div>
  );
};

export default DotParticleCanvas;
