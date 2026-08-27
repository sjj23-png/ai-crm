import { useEffect, useRef } from "react";

interface AuthBackgroundProps {
  children?: React.ReactNode;
}

export function AuthBackground({ children }: AuthBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let currentX = targetX;
    let currentY = targetY;

    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updateGlowPosition = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 250}px, ${
          currentY - 250
        }px, 0px)`;
      }

      animationFrameId = requestAnimationFrame(updateGlowPosition);
    };

    window.addEventListener("pointermove", handlePointerMove);
    animationFrameId = requestAnimationFrame(updateGlowPosition);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 text-slate-100 transition-colors duration-500 selection:bg-purple-500/30 selection:text-purple-200"
    >
      {/* Dynamic Cursor Ambient Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-purple-600/20 via-indigo-500/15 to-pink-500/10 blur-[120px] will-change-transform"
        style={{ transform: "translate3d(0px, 0px, 0px)" }}
      />

      {/* Fixed Ambient Light Orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-purple-600/15 blur-[140px] dark:bg-purple-900/25 animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-indigo-600/15 blur-[140px] dark:bg-indigo-900/25" />
      <div className="pointer-events-none absolute top-1/3 right-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />

      {/* Subtle Mesh Grid Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Main Content Layer */}
      <div className="relative z-10 w-full flex items-center justify-center px-4 py-8 md:py-12">
        {children}
      </div>
    </div>
  );
}
