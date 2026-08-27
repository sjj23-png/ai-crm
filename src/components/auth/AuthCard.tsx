import { useState, useRef } from "react";

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AuthCard({ children, className = "" }: AuthCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 1.5;
    const rotateX = -((y - centerY) / centerY) * 1.5;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`);
    setGlowPos({
      x: Math.round((x / rect.width) * 100),
      y: Math.round((y / rect.height) * 100),
    });
  };

  const handlePointerLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
    setGlowPos({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        transform,
        transition: transform.includes("0deg")
          ? "transform 0.5s ease-out, box-shadow 0.5s ease-out"
          : "transform 0.1s ease-out",
      }}
      className={`relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 ${className}`}
    >
      {/* Interactive Surface Glass Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, rgba(139, 92, 246, 0.12), transparent 40%)`,
        }}
      />

      {/* Top Border Glow Accent Line */}
      <div className="pointer-events-none absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      {/* Internal Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
