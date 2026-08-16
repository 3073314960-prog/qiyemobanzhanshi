import {
  BatteryCharging,
  Car,
  Construction,
  Cpu,
  HeartPulse,
  Plane,
  type LucideIcon,
} from "lucide-react";

/**
 * 行业图标映射。config/industries.ts 中的 icon 字段为字符串 key，
 * 在此统一映射为 lucide 图标组件，便于集中替换图标风格。
 */
const iconMap: Record<string, LucideIcon> = {
  car: Car,
  plane: Plane,
  battery: BatteryCharging,
  chip: Cpu,
  medical: HeartPulse,
  crane: Construction,
};

export function getIndustryIcon(key: string): LucideIcon {
  return iconMap[key] ?? Cpu;
}
