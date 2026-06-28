import { useEffect, useRef } from "react";

type AuraWaveProps = {
  state?: "idle" | "loading" | "thinking" | "success" | "error";
};

const waveSettings = {
  loading: {
    amplitude: 28,
    speed: 0.028,
    glow: 26,
    colorA: "rgba(78, 150, 255, 1)",
    colorB: "rgba(170, 95, 255, 0.95)",
  },
  success: {
    amplitude: 22,
    speed: 0.022,
    glow: 26,
    colorA: "rgba(74, 222, 128, 1)",
    colorB: "rgba(45, 212, 191, 0.95)",
  },
};

export default function AuraWave({ state = "loading" }: AuraWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const successProgressRef = useRef(0);
  const previousStateRef = useRef(state);

  useEffect(() => {
    if (state === "success" && previousStateRef.current !== "success") {
      successProgressRef.current = 0;
    }

    previousStateRef.current = state;
  }, [state]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    let time = 0;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawWaveLayer(
      colors: typeof waveSettings.loading,
      alpha: number,
      lineWidth: number,
      offset: number,
      amplitudeModifier: number,
      clipFromRight = 0,
    ) {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const centerY = height / 2;

      ctx.save();

      if (clipFromRight > 0) {
        const revealWidth = width * clipFromRight;
        ctx.beginPath();
        ctx.rect(width - revealWidth, 0, revealWidth, height);
        ctx.clip();
      }

      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, "rgba(255,255,255,0)");
      gradient.addColorStop(0.18, colors.colorA);
      gradient.addColorStop(0.5, colors.colorB);
      gradient.addColorStop(0.82, colors.colorA);
      gradient.addColorStop(1, "rgba(255,255,255,0)");

      ctx.beginPath();

      for (let x = 0; x <= width; x += 2) {
        const progress = x / width;
        const envelope = Math.sin(progress * Math.PI) ** 2;

        const y =
          centerY +
          Math.sin(x * 0.018 + time + offset) *
            colors.amplitude *
            amplitudeModifier *
            envelope +
          Math.sin(x * 0.038 + time * 0.7 + offset) * 8 * envelope;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = gradient;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = lineWidth;
      ctx.shadowBlur = colors.glow;
      ctx.shadowColor = colors.colorB;
      ctx.stroke();

      ctx.restore();

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    }

    function animate() {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);

      time += state === "success" ? 0.022 : 0.028;

      if (state === "success") {
        successProgressRef.current = Math.min(
          successProgressRef.current + 0.0035,
          1,
        );
      }

      const successProgress = successProgressRef.current;

      drawWaveLayer(waveSettings.loading, 0.8, 2.2, 0, 1);
      drawWaveLayer(waveSettings.loading, 0.3, 1.4, 1.7, 0.72);
      drawWaveLayer(waveSettings.loading, 0.18, 1, -1.9, 1.25);

      if (state === "success") {
        drawWaveLayer(waveSettings.success, 0.95, 2.4, 0, 1, successProgress);
        drawWaveLayer(waveSettings.success, 0.42, 1.6, 1.7, 0.72, successProgress);
        drawWaveLayer(waveSettings.success, 0.26, 1.1, -1.9, 1.25, successProgress);
      }

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