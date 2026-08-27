import { useState, useRef, useEffect } from "react";

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  createdAt: number;
}

interface DraggableOrbProps {
  theme?: "light" | "dark";
}

export function DraggableOrb({ theme }: DraggableOrbProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [particles, setParticles] = useState<TrailParticle[]>([]);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const particleIdRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  // Particle cleanup & spring return physics loop
  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      // Remove particles older than 4 seconds (4000ms) as requested
      setParticles((prev) => prev.filter((p) => now - p.createdAt < 4000));

      if (!isDragging) {
        setPosition((prev) => {
          const dx = -prev.x;
          const dy = -prev.y;

          // Spring return physics
          const nextX = prev.x + dx * 0.12;
          const nextY = prev.y + dy * 0.12;

          if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
            return { x: 0, y: 0 };
          }

          return { x: nextX, y: nextY };
        });
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isDragging]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragOffsetRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const newX = e.clientX - dragOffsetRef.current.x;
    const newY = e.clientY - dragOffsetRef.current.y;

    setPosition({ x: newX, y: newY });

    // Spawn glowing Yellow trail particles behind the dragged orb
    particleIdRef.current += 1;
    setParticles((prev) => [
      ...prev.slice(-30), // Allow up to 30 particles to support 4-second persistence
      {
        id: particleIdRef.current,
        x: newX + 24,
        y: newY + 24,
        size: Math.random() * 12 + 8,
        createdAt: Date.now(),
      },
    ]);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Fallback
    }
  };

  return (
    <>
      {/* Glowing Yellow Trail Particles (Persistent for 4 Seconds) */}
      {particles.map((p) => {
        const age = (Date.now() - p.createdAt) / 4000; // 4 second lifetime
        const opacity = Math.max(0, 1 - age);
        const scale = 1 - age * 0.4;

        return (
          <div
            key={p.id}
            style={{
              transform: `translate3d(${p.x}px, ${p.y}px, 0px) scale(${scale})`,
              opacity,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            className="pointer-events-none absolute top-12 left-8 md:top-16 md:left-24 z-15 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-400 to-yellow-200 blur-[2px] shadow-[0_0_14px_rgba(250,204,21,0.9)] transition-opacity duration-500"
          />
        );
      })}

      {/* Main Draggable Glass Orb with Yellow Accent */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0px) scale(${
            isDragging ? 1.15 : 1
          })`,
          transition: isDragging ? "transform 0.05s ease-out" : "none",
        }}
        className="absolute top-12 left-8 md:top-16 md:left-24 z-20 h-14 w-14 sm:h-16 sm:w-16 cursor-grab active:cursor-grabbing select-none rounded-full border border-yellow-400/50 bg-gradient-to-tr from-amber-500/30 via-yellow-400/30 to-amber-300/30 p-0.5 backdrop-blur-md shadow-[0_0_25px_rgba(250,204,21,0.5)] hover:shadow-[0_0_35px_rgba(250,204,21,0.7)]"
        title="Interactive Glass Orb (Drag me!)"
      >
        <div className="relative h-full w-full rounded-full bg-slate-900/40 flex items-center justify-center overflow-hidden">
          {/* Internal Glow & Specular Highlight */}
          <div className="absolute top-1 left-2 h-4 w-6 rounded-full bg-white/40 blur-[1px]" />
          <div className="absolute bottom-1 right-2 h-3 w-3 rounded-full bg-yellow-400/60 blur-[2px]" />
        </div>
      </div>
    </>
  );
}
