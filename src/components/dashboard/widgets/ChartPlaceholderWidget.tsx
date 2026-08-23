import WidgetContainer from "../WidgetContainer";
import { TrendingUp, Filter } from "lucide-react";

interface ChartPlaceholderWidgetProps {
  title?: string;
}

export default function ChartPlaceholderWidget({
  title = "Performance Overview",
}: ChartPlaceholderWidgetProps) {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  return (
    <WidgetContainer title={title}>
      <div className="rounded-2xl border border-slate-200 dark:border-[#263247] bg-white dark:bg-[#111827] p-6 space-y-6 shadow-sm">
        {/* Header & Filter Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-purple-100 dark:bg-[#211A3D] text-purple-700 dark:text-[#A78BFA] flex items-center gap-1.5">
              <TrendingUp size={14} />
              +18.4% Revenue Growth
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">
            <span className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-[#263247] bg-slate-50 dark:bg-[#151C2B] cursor-pointer hover:text-purple-600 dark:hover:text-[#A78BFA] transition-colors">
              Last 7 Days
            </span>
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-[#263247] bg-slate-50 dark:bg-[#151C2B] hover:text-purple-600 dark:hover:text-[#A78BFA] transition-colors">
              <Filter size={12} />
              Filter
            </button>
          </div>
        </div>

        {/* Glowing Purple SVG Area Chart Curve (GlassAdmin style) */}
        <div className="relative h-60 w-full overflow-hidden rounded-xl bg-slate-50/50 dark:bg-[#090D16]/60 p-4 border border-slate-100 dark:border-[#1D2738]/50">
          <svg className="h-full w-full overflow-visible" viewBox="0 0 500 150" preserveAspectRatio="none">
            <defs>
              <linearGradient id="purpleGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Gradient Fill under Curve */}
            <path
              d="M 0 110 C 60 130, 100 40, 160 80 C 220 120, 260 20, 320 60 C 380 100, 420 30, 500 40 L 500 150 L 0 150 Z"
              fill="url(#purpleGlow)"
            />

            {/* Glowing Smooth Curved Line */}
            <path
              d="M 0 110 C 60 130, 100 40, 160 80 C 220 120, 260 20, 320 60 C 380 100, 420 30, 500 40"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="4"
              strokeLinecap="round"
              className="drop-shadow-[0_0_12px_rgba(139,92,246,0.8)]"
            />

            {/* Pulsing Data Points */}
            <circle cx="260" cy="20" r="5" fill="#A78BFA" className="animate-pulse" />
            <circle cx="420" cy="30" r="5" fill="#A78BFA" className="animate-pulse" />
          </svg>
        </div>

        {/* X-Axis Days */}
        <div className="flex justify-between px-2 text-xs font-semibold text-slate-400 dark:text-[#64748B]">
          {days.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
      </div>
    </WidgetContainer>
  );
}