import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AuthBackground } from "./AuthBackground";
import { AuthCard } from "./AuthCard";
import { DraggableOrb } from "./DraggableOrb";

interface AuthThemeCurtainProps {
  renderForm: () => React.ReactNode;
}

export function AuthThemeCurtain({ renderForm }: AuthThemeCurtainProps) {
  // themePercent: 0 = 100% Dark Mode, 100 = 100% Light Mode
  const [themePercent, setThemePercent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const startPercentRef = useRef(0);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);
    startXRef.current = e.clientX;
    startPercentRef.current = themePercent;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    const windowWidth = window.innerWidth || 1000;

    // Dragging right-to-left (negative deltaX) increases light mode curtain percentage
    const deltaPercent = (-deltaX / windowWidth) * 100;
    const newPercent = Math.min(100, Math.max(0, startPercentRef.current + deltaPercent));

    setThemePercent(newPercent);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);

    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Fallback
    }

    // Snap to closest state (0% Dark or 100% Light) if past 35% threshold
    setThemePercent((prev) => {
      if (prev > 35) {
        document.documentElement.classList.remove("dark");
        return 100;
      } else {
        document.documentElement.classList.add("dark");
        return 0;
      }
    });
  };

  const isLightMode = themePercent > 50;

  return (
    <div className="relative min-h-screen w-full overflow-hidden select-none">
      {/* Single Interactive Draggable Glass Orb */}
      <DraggableOrb theme={isLightMode ? "light" : "dark"} />

      {/* 1. Base Layer: Dark Theme */}
      <div className="absolute inset-0">
        <AuthBackground>
          <div className="flex w-full max-w-5xl items-center justify-center gap-8 lg:justify-between">
            {/* Enterprise AI CRM Brand Panel (Dark Mode) */}
            <section className="hidden lg:flex flex-col justify-between p-10 rounded-3xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-2xl text-slate-100 max-w-lg min-h-[460px] shadow-2xl">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-400 mb-6">
                  ✨ AI-Powered CRM Platform
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-50 via-purple-200 to-indigo-300 bg-clip-text text-transparent">
                  Enterprise AI CRM
                </h1>

                <p className="mt-4 tracking-tight bg-gradient-to-r from-slate-50 via-purple-200 to-indigo-300 bg-clip-text text-transparent text-sm leading-relaxed">
                  Intelligent customer relationship management platform for enterprise organizations.
                </p>
              </div>

              <div className="pt-8 border-t border-slate-800/60">
                <p className="text-xs text-slate-500">
                  © 2026 Enterprise AI CRM. All rights reserved.
                </p>
              </div>
            </section>

            {/* Auth Form Container (Dark Mode) */}
            <AuthCard>
              {renderForm()}
            </AuthCard>
          </div>
        </AuthBackground>
      </div>

      {/* 2. Top Curtain Layer ("Parda"): Light Theme clipped by themePercent */}
      <div
        className="absolute inset-0 transition-[clip-path] duration-75"
        style={{
          clipPath: `polygon(${100 - themePercent}% 0, 100% 0, 100% 100%, ${100 - themePercent}% 100%)`,
          transition: isDragging ? "none" : "clip-path 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="relative min-h-screen w-full flex items-center justify-center bg-slate-50 text-slate-900 overflow-hidden">
          {/* Light Theme Background Ambient Glare */}
          <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-rose-400/20 blur-[140px]" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-amber-400/20 blur-[140px]" />

          {/* Main Layout Layer (Light Mode) */}
          <div className="relative z-10 w-full flex items-center justify-center px-4 py-8 md:py-12">
            <div className="flex w-full max-w-5xl items-center justify-center gap-8 lg:justify-between">
              {/* Enterprise AI CRM Brand Panel (Light Mode Curtain) */}
              <section className="hidden lg:flex flex-col justify-between p-10 rounded-3xl border border-slate-200/80 bg-white/70 backdrop-blur-2xl text-slate-900 max-w-lg min-h-[460px] shadow-xl">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 border border-rose-500/30 text-rose-600 mb-6">
                    ✨ AI-Powered CRM Platform
                  </div>
                  <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-rose-900 to-amber-900 bg-clip-text text-transparent">
                    Enterprise AI CRM
                  </h1>

                  <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                    Intelligent customer relationship management platform for enterprise organizations.
                  </p>
                </div>

                <div className="pt-8 border-t border-slate-200/60">
                  <p className="text-xs text-slate-400">
                    © 2026 Enterprise AI CRM. All rights reserved.
                  </p>
                </div>
              </section>

              {/* Light Glass Card Container */}
              <div className="relative w-full max-w-md rounded-3xl border border-slate-200/80 bg-white/85 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-slate-900">
                <div className="pointer-events-none absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent" />
                {renderForm()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Curtain Handle Arrow (No tail, sits on curtain edge) */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          left: `calc(${100 - themePercent}% - 22px)`,
          transition: isDragging ? "none" : "left 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="fixed top-1/2 z-40 flex h-12 w-11 -translate-y-1/2 cursor-grab active:cursor-grabbing items-center justify-center rounded-full border border-purple-400/40 bg-slate-900/90 text-purple-300 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-110 active:scale-95 transition-transform"
        title="Drag curtain handle to toggle Light / Dark Parda theme"
      >
        {isLightMode ? (
          <ChevronRight className="h-6 w-6 text-rose-400 animate-pulse" />
        ) : (
          <ChevronLeft className="h-6 w-6 text-purple-400 animate-pulse" />
        )}
      </div>
    </div>
  );
}
