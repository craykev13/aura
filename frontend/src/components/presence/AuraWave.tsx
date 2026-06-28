import { useEffect, useRef } from "react";

type AuraWaveProps = {
  state?: "idle" | "loading" | "thinking" | "success" | "error";
};

export default function AuraWave({ state = "loading" }: AuraWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    let time = 0;

    const settings = {
      idle: {
        amplitude: 18,
        speed: 0.018,
        glow: 18,
        colorA: "rgba(72, 139, 255, 0.95)",
        colorB: "rgba(172, 92, 255, 0.85)",
      },
      loading: {
        amplitude: 28,
        speed: 0.028,
        glow: 26,
        colorA: "rgba(78, 150, 255, 1)",
        colorB: "rgba(170, 95, 255, 0.95)",
      },
      thinking: {
        amplitude: 34,
        speed: 0.038,
        glow: 32,
        colorA: "rgba(68, 189, 255, 1)",
        colorB: "rgba(190, 100, 255, 1)",
      },
      success: {
        amplitude: 22,
        speed: 0.022,
        glow: 24,
        colorA: "rgba(74, 222, 128, 1)",
        colorB: "rgba(45, 212, 191, 0.9)",
      },
      error: {
        amplitude: 26,
        speed: 0.026,
        glow: 26,
        colorA: "rgba(248, 113, 113, 1)",
        colorB: "rgba(168, 85, 247, 0.65)",
      },
    }[state];

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawWave(
      offset: number,
      alpha: number,
      lineWidth: number,
      amplitudeModifier: number,
    ) {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const centerY = height / 2;

      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, "rgba(255,255,255,0)");
      gradient.addColorStop(0.18, settings.colorA);
      gradient.addColorStop(0.5, settings.colorB);
      gradient.addColorStop(0.82, settings.colorA);
      gradient.addColorStop(1, "rgba(255,255,255,0)");

      ctx.beginPath();

      for (let x = 0; x <= width; x += 2) {
        const progress = x / width;

        const envelope =
          Math.sin(progress * Math.PI) * Math.sin(progress * Math.PI);

        const y =
          centerY +
          Math.sin(x * 0.018 + time + offset) *
            settings.amplitude *
            amplitudeModifier *
            envelope +
          Math.sin(x * 0.038 + time * 0.7 + offset) * 8 * envelope;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = gradient;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = lineWidth;
      ctx.shadowBlur = settings.glow;
      ctx.shadowColor = settings.colorB;
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    }

    function animate() {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);

      time += settings.speed;

      drawWave(0, 0.85, 2.2, 1);
      drawWave(1.7, 0.35, 1.4, 0.72);
      drawWave(-1.9, 0.22, 1, 1.25);

      animationFrame = requestAnimationFrame(animate);
    }

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [state]);

  return <canvas className="aura-wave" ref={canvasRef} />;
}
