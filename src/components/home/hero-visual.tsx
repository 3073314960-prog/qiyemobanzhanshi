import { Activity, Cpu, Gauge } from "lucide-react";

/**
 * 首屏抽象工业视觉：以几何图形勾勒数控设备 + 实时数据读数，
 * 传达「精密、可信、工业科技感」，无需真实照片即可开箱使用。
 */
export function HeroVisual() {
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
        {/* 机器几何图形 */}
        <svg
          viewBox="0 0 400 300"
          className="mx-auto w-full max-w-md"
          role="img"
          aria-label="数控加工设备示意图"
        >
          {/* 工作台 */}
          <rect x="40" y="228" width="200" height="16" rx="2" fill="#33465c" />
          <rect x="90" y="244" width="100" height="12" rx="2" fill="#24354a" />
          {/* 立柱 */}
          <rect x="250" y="70" width="70" height="174" rx="4" fill="#1d2f45" />
          <rect x="258" y="78" width="54" height="8" rx="2" fill="#33465c" />
          {/* 主轴头 */}
          <rect x="150" y="96" width="120" height="70" rx="6" fill="#2b415c" />
          <rect x="190" y="150" width="40" height="24" rx="3" fill="#f97316" />
          {/* 主轴刀具 */}
          <rect x="205" y="174" width="10" height="54" rx="2" fill="#8fa3b8" />
          <path d="M205 228 l10 0 l-3 16 l-4 0 z" fill="#8fa3b8" />
          {/* 工件 */}
          <rect x="120" y="206" width="60" height="22" rx="3" fill="#c5dcee" />
          {/* 主轴转速环 */}
          <circle cx="210" cy="120" r="26" fill="none" stroke="#5c9fce" strokeWidth="3" strokeDasharray="120 44" strokeLinecap="round" />
          <circle cx="210" cy="120" r="3" fill="#f97316" />
          {/* 坐标轴线 */}
          <line x1="40" y1="228" x2="40" y2="120" stroke="#5c9fce" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
          <line x1="40" y1="228" x2="120" y2="228" stroke="#5c9fce" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
          <text x="30" y="118" fill="#5c9fce" fontSize="11" fontFamily="monospace">Z</text>
          <text x="122" y="244" fill="#5c9fce" fontSize="11" fontFamily="monospace">X</text>
        </svg>

        {/* 数据读数面板 */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center gap-1.5 text-xs text-white/50">
              <Gauge className="h-3.5 w-3.5 text-signal-400" />
              主轴转速
            </div>
            <div className="mt-1 font-mono text-lg font-semibold text-white">
              18,000 <span className="text-xs text-white/50">rpm</span>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center gap-1.5 text-xs text-white/50">
              <Cpu className="h-3.5 w-3.5 text-signal-400" />
              定位精度
            </div>
            <div className="mt-1 font-mono text-lg font-semibold text-white">
              ±0.004 <span className="text-xs text-white/50">mm</span>
            </div>
          </div>
          <div className="col-span-2 rounded-lg border border-white/10 bg-white/[0.03] p-3 sm:col-span-1">
            <div className="flex items-center gap-1.5 text-xs text-white/50">
              <Activity className="h-3.5 w-3.5 text-signal-400" />
              设备状态
            </div>
            <div className="mt-1 flex items-center gap-1.5 font-mono text-sm font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              运行中
            </div>
          </div>
        </div>
      </div>

      {/* 悬浮标签 */}
      <div className="absolute -top-4 -right-2 hidden rounded-lg border border-white/10 bg-navy px-3 py-2 text-xs text-white/80 shadow-xl sm:block">
        <span className="font-mono text-signal-400">IATF 16949</span>
        <span className="ml-2 text-white/50">认证工厂</span>
      </div>
    </div>
  );
}
