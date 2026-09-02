"use client";

import React, { useEffect, useRef } from "react";

interface GlobeProps {
  direction?: "left" | "right";
  dots?: {
    color?: string;
    size?: number;
    density?: number;
    allDots?: boolean;
  };
  speed?: number;
  oceanColor?: string;
}

const ASSET_PATH = "/originkit/features-02/world-map.svg";

export default function Globe({
  direction = "right",
  dots = { color: "#60a5fa", size: 10, density: 4 },
  speed = 1,
  oceanColor = "#05070c",
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = ASSET_PATH;

    img.onload = () => {
      // 1. Render map to offscreen canvas to sample continent pixels
      const offCanvas = document.createElement("canvas");
      const offCtx = offCanvas.getContext("2d");
      const sampleWidth = 200;
      const sampleHeight = 100;
      offCanvas.width = sampleWidth;
      offCanvas.height = sampleHeight;

      if (!offCtx) return;
      offCtx.drawImage(img, 0, 0, sampleWidth, sampleHeight);

      const imgData = offCtx.getImageData(0, 0, sampleWidth, sampleHeight).data;
      const continentDots: { x: number; y: number; z: number; size: number }[] =
        [];

      // 2. Convert map pixels into 3D sphere points
      const step = Math.max(1, Math.floor(6 - (dots.density || 4) / 2));

      for (let y = 0; y < sampleHeight; y += step) {
        for (let x = 0; x < sampleWidth; x += step) {
          const index = (y * sampleWidth + x) * 4;
          const alpha = imgData[index + 3];

          // If pixel exists on the SVG continent map
          if (alpha > 50) {
            const lat = (y / sampleHeight) * Math.PI - Math.PI / 2;
            const lon = (x / sampleWidth) * (Math.PI * 2) - Math.PI;

            continentDots.push({
              x: Math.cos(lat) * Math.sin(lon),
              y: -Math.sin(lat),
              z: Math.cos(lat) * Math.cos(lon),
              size: (dots.size || 10) / 4,
            });
          }
        }
      }

      // 3. Render 3D animated globe loop
      const render = () => {
        const width = canvas.width;
        const height = canvas.height;
        const radius = Math.min(width, height) / 2.3;
        const centerX = width / 2;
        const centerY = height / 2;

        ctx.clearRect(0, 0, width, height);

        // Ocean Background
        if (oceanColor) {
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.fillStyle = oceanColor;
          ctx.fill();
        }

        // Atmosphere Ring
        ctx.strokeStyle = "rgba(59, 130, 246, 0.25)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Rotation Calculation
        const dirMult = direction === "left" ? -1 : 1;
        rotation += 0.006 * speed * dirMult;

        const cosR = Math.cos(rotation);
        const sinR = Math.sin(rotation);

        continentDots.forEach((dot) => {
          const rx = dot.x * cosR - dot.z * sinR;
          const rz = dot.x * sinR + dot.z * cosR;
          const ry = dot.y;

          // Render front-facing dots
          if (rz > -0.1) {
            const scale = (rz + 1.5) / 2.5;
            const px = centerX + rx * radius;
            const py = centerY + ry * radius;
            const alpha = Math.max(0.2, (rz + 0.2) / 1.2);

            ctx.beginPath();
            ctx.arc(px, py, dot.size * scale, 0, Math.PI * 2);
            ctx.fillStyle = dots.color || "#60a5fa";
            ctx.globalAlpha = alpha;
            ctx.fill();
          }
        });

        ctx.globalAlpha = 1;
        animationFrameId = requestAnimationFrame(render);
      };

      render();
    };

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [direction, dots, speed, oceanColor]);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      className="w-full h-full object-contain pointer-events-none"
    />
  );
}
