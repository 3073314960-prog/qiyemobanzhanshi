import type { Industry } from "./types";

export const industries: Industry[] = [
  {
    key: "automotive",
    name: "汽车制造",
    enName: "Automotive",
    description:
      "为整车与零部件企业提供高节拍自动化产线、车身焊接与动力总成精密加工解决方案。",
    icon: "car",
    points: ["车身焊装产线", "动力总成机加", "新能源三电装配"],
  },
  {
    key: "aerospace",
    name: "航空航天",
    enName: "Aerospace",
    description:
      "面向航空结构件与发动机零件的高精度五轴加工，满足严苛公差与材料要求。",
    icon: "plane",
    points: ["五轴联动加工", "难加工材料", "在线测量补偿"],
  },
  {
    key: "newenergy",
    name: "新能源",
    enName: "New Energy",
    description:
      "覆盖动力电池、光伏与储能装备的模组/PACK 产线与激光加工设备。",
    icon: "battery",
    points: ["电池模组产线", "PACK 装配线", "激光焊接设备"],
  },
  {
    key: "electronics",
    name: "3C 电子",
    enName: "3C Electronics",
    description:
      "为消费电子与半导体提供高精度、高良率的精密结构件制造与自动化检测。",
    icon: "chip",
    points: ["精密结构件", "自动化检测", "洁净车间装配"],
  },
  {
    key: "medical",
    name: "医疗器械",
    enName: "Medical Devices",
    description:
      "骨科植入物、手术器械等医疗器械的高洁净度精密加工与全流程追溯。",
    icon: "medical",
    points: ["植入物加工", "洁净室装配", "全流程追溯"],
  },
  {
    key: "machinery",
    name: "工程机械",
    enName: "Construction Machinery",
    description:
      "为工程机械主机厂提供液压、传动等关键部件的规模化机加与焊接方案。",
    icon: "crane",
    points: ["液压件机加", "结构件焊接", "喷涂前处理"],
  },
];

export function getIndustry(key: string) {
  return industries.find((i) => i.key === key);
}
