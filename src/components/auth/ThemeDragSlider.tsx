import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ThemeDragSliderProps {
  currentTheme: "dark" | "light";
  onThemeToggle: (newTheme: "dark" | "light") => void;
}

export function ThemeDragSlider({
  currentTheme,
  onThemeToggle,
}: ThemeDragSliderProps) {
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);
    startXRef.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;

    // In dark mode: arrow is on right edge, pulling left (negative deltaX)
    // In light mode: arrow is on left edge, pulling right (positive deltaX)
    if (currentTheme === "dark") {
      setDragOffset(Math.min(0, Math.max(-250, deltaX)));
    } else {
      setDragOffset(Math.max(0, Math.min(250, deltaX)));
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);

    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Fallback
    }

    // Threshold check (pulling 100px triggers theme switch)
    if (currentTheme === "dark" && dragOffset < -100) {
      onThemeToggle("light");
    } else if (currentTheme === "light" && dragOffset > 100) {
      onThemeToggle("dark");
    }

    // Reset offset with smooth animation
    setDragOffset(0);
  };

  const isDark = currentTheme === "dark";

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{
        transform: `translate3d(${dragOffset}px, -50%, 0px)`,
        transition: isDragging ? "none" : "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      className={`fixed top-1/2 z-30 flex items-center gap-2 cursor-grab active:cursor-grabbing select-none py-3 px-2 rounded-full border shadow-xl backdrop-blur-md transition-colors duration-300 ${
        isDark
          ? "right-3 border-purple-500/40 bg-slate-900/80 text-purple-300 shadow-purple-950/50 hover:bg-slate-800"
          : "left-3 border-rose-400/50 bg-white/90 text-rose-600 shadow-rose-950/20 hover:bg-slate-50"
      }`}
      title={isDark ? "Drag Left to Switch to Light Theme" : "Drag Right to Switch to Dark Theme"}
    >
      {isDark ? (
        <>
          <ChevronLeft className="h-5 w-5 animate-pulse" />
          <span className="text-xs font-semibold pr-1 hidden sm:inline">Theme</span>
        </>
      ) : (
        <>
          <span className="text-xs font-semibold pl-1 hidden sm:inline">Theme</span>
          <ChevronRight className="h-5 w-5 animate-pulse" />
        </>
      )}
    </div>
  );
}
