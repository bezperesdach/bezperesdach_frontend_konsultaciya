import { CSSProperties } from "react";

export type OrderPopupStage = "theme" | "date" | "additional" | "final" | "sent";

export const additionalInfoOptions = {
  "kursovaya-rabota": {
    minVolume: 20,
  },
};

export type ProjectTypes =
  | "kursovaya-rabota"
  | "diplomnaya-rabota"
  | "magisterskaya-dissertaciya"
  | "referat"
  | "doklad"
  | "otchet-po-praktike"
  | "prezentaciya"
  | "konsultaciya"
  | "povyshenie-originalnosti"
  | "nauchnaya-statya"
  | "biznes-plan"
  | "reshenie-zadach";

export type AntiplagiatTypes = "antiplagiat_ru" | "antiplagiat_vuz" | "text_ru" | "e_txt" | "ne_znayu" | "net" | "none";

export type ContactTypes = "email" | "telegram" | "vk";

export const contactTypeOptions = [
  { value: "email", label: "Email" },
  { value: "telegram", label: "Telegram" },
  // { value: "whatsapp", label: "WhatsApp" },
  // { value: "viber", label: "Viber" },
  { value: "vk", label: "Вконтакте" },
];

export const subjects = [
  "Экономика и бизнес",
  "Юридические науки",
  "Педагогика и образование",
  "Информатика и ВТ",
  "Гуманитарные науки",
  "Технические науки",
  "Общественные науки",
  "Медицинские науки",
  "Естественные науки",
  "Строительство и архитектура",
  "Точные науки",
  "Прикладные науки",
  "Другое",
];

export const projectTypeOptions = [
  { value: "kursovaya-rabota", label: "Курсовая работа" },
  { value: "diplomnaya-rabota", label: "Дипломная работа" },
  { value: "magisterskaya-dissertaciya", label: "Магистерская диссертация" },
  { value: "referat", label: "Реферат" },
  { value: "doklad", label: "Доклад" },
  { value: "otchet-po-praktike", label: "Отчет по практике" },
  { value: "prezentaciya", label: "Презентация" },
  { value: "povyshenie-originalnosti", label: "Повышение оригинальности" },
  { value: "nauchnaya-statya", label: "Научная статья" },
  { value: "biznes-plan", label: "Бизнес-план" },
  { value: "reshenie-zadach", label: "Решение задач" },
  { value: "konsultaciya", label: "Консультация" },
];

export const getProjectTypeOption = (slug: string) => {
  const name = projectTypeOptions.filter((item) => item.value === slug);
  if (name.length > 0) {
    return name[0].label;
  }

  return "";
};

export const antiplagiatOptions = [
  { value: "antiplagiat_ru", label: "Антиплагиат ру" },
  { value: "antiplagiat_vuz", label: "Антиплагиат ВУЗ" },
  { value: "text_ru", label: "Text.ru" },
  { value: "e_txt", label: "eTXT" },
  { value: "ne_znayu", label: "Не знаю" },
  { value: "net", label: "Нет" },
];

export type VolumeDataUnit = "страница" | "слайд" | "задача";

export const getVolumeDataUnitNouns = (unit: VolumeDataUnit) => {
  switch (unit) {
    case "страница":
      return { one: "страница", two: "страницы", five: "страниц" };
    case "слайд":
      return { one: "слайд", two: "слайда", five: "слайдов" };
    case "задача":
      return { one: "задача", two: "задачи", five: "задач" };
  }
};

export type AntiplagiatField = {
  originality: number;
  type: AntiplagiatTypes;
};

export type VolumeField = {
  min: number;
  max: number;
  default: number;
  unit: VolumeDataUnit;
};

export type Info = {
  title: string;
  timeToCompleteInHours?: number;
  minPrice?: number;
};

export type CardVisualData = {
  accentColor: CSSProperties["color"];
  backgroundColor: CSSProperties["color"];
};

export type AdditionalInfoFields = {
  info: Info;
  cardVisualData?: CardVisualData;
  volumeData?: VolumeField;

  antiplagiat?: AntiplagiatField;
};

export type AdditionalInfoParams = {
  [key in ProjectTypes as string]: AdditionalInfoFields;
};

export const additionalInfoParams: AdditionalInfoParams = {
  "kursovaya-rabota": {
    info: {
      title: "Курсовая работа",
      timeToCompleteInHours: 24 * 8,
      minPrice: 3990,
    },
    volumeData: {
      min: 20,
      max: 120,
      default: 30,
      unit: "страница",
    },
    antiplagiat: {
      originality: 60,
      type: "antiplagiat_ru",
    },
    cardVisualData: {
      accentColor: "#ABCFFF",
      backgroundColor: "#E9F2FF",
    },
  },
  "diplomnaya-rabota": {
    info: {
      title: "Дипломная работа",
      timeToCompleteInHours: 24 * 14,
      minPrice: 12990,
    },
    volumeData: {
      min: 30,
      max: 140,
      default: 60,
      unit: "страница",
    },
    antiplagiat: {
      originality: 60,
      type: "antiplagiat_ru",
    },
    cardVisualData: {
      accentColor: "#E9FFBC",
      backgroundColor: "#EEF8DB",
    },
  },
  "magisterskaya-dissertaciya": {
    info: {
      title: "Магистерская диссертация",
      timeToCompleteInHours: 24 * 60,
      minPrice: 21490,
    },
    volumeData: {
      min: 30,
      max: 240,
      default: 90,
      unit: "страница",
    },
    antiplagiat: {
      originality: 80,
      type: "antiplagiat_vuz",
    },
    cardVisualData: {
      accentColor: "#FFDFAE",
      backgroundColor: "#FFEED3",
    },
  },
  referat: {
    info: {
      title: "Реферат",
      timeToCompleteInHours: 24 * 2,
      minPrice: 1490,
    },
    volumeData: {
      min: 5,
      max: 45,
      default: 10,
      unit: "страница",
    },
    antiplagiat: {
      originality: 40,
      type: "antiplagiat_ru",
    },
    cardVisualData: {
      accentColor: "#CAF7FD",
      backgroundColor: "#daf4f7",
    },
  },
  doklad: {
    info: {
      title: "Доклад",
      timeToCompleteInHours: 24 * 2,
      minPrice: 990,
    },
    volumeData: {
      min: 5,
      max: 45,
      default: 10,
      unit: "страница",
    },
    antiplagiat: {
      originality: 40,
      type: "antiplagiat_ru",
    },
    cardVisualData: {
      accentColor: "#FFC7FF",
      backgroundColor: "#ffe3ff",
    },
  },
  "otchet-po-praktike": {
    info: {
      title: "Отчет по практике",
      timeToCompleteInHours: 24 * 14,
      minPrice: 3490,
    },
    volumeData: {
      min: 5,
      max: 60,
      default: 20,
      unit: "страница",
    },
    antiplagiat: {
      originality: 60,
      type: "antiplagiat_ru",
    },
    cardVisualData: {
      accentColor: "#D2D7FF",
      backgroundColor: "#DADDF2",
    },
  },
  prezentaciya: {
    info: {
      title: "Презентация",
      timeToCompleteInHours: 24,
      minPrice: 590,
    },
    volumeData: {
      min: 5,
      max: 60,
      default: 15,
      unit: "слайд",
    },
    antiplagiat: undefined,
    cardVisualData: {
      accentColor: "#FFE1E3",
      backgroundColor: "#F8E0E2",
    },
  },
  "povyshenie-originalnosti": {
    info: {
      title: "Повышение оригинальности",
      timeToCompleteInHours: 12,
      minPrice: 990,
    },
    volumeData: {
      min: 1,
      max: 220,
      default: 1,
      unit: "страница",
    },
    antiplagiat: {
      originality: 60,
      type: "antiplagiat_ru",
    },
    cardVisualData: {
      accentColor: "#ABCFFF",
      backgroundColor: "#E9F2FF",
    },
  },
  "nauchnaya-statya": {
    info: {
      title: "Научная статья",
      timeToCompleteInHours: 24 * 3,
      minPrice: 1490,
    },
    volumeData: {
      min: 5,
      max: 30,
      default: 10,
      unit: "страница",
    },
    antiplagiat: {
      originality: 60,
      type: "antiplagiat_ru",
    },
    cardVisualData: {
      accentColor: "#E9FFBC",
      backgroundColor: "#EEF8DB",
    },
  },
  "biznes-plan": {
    info: {
      title: "Бизнес план",
      timeToCompleteInHours: 24 * 2,

      minPrice: 2490,
    },
    volumeData: {
      min: 30,
      max: 60,
      default: 35,
      unit: "страница",
    },
    antiplagiat: {
      originality: 60,
      type: "antiplagiat_ru",
    },
    cardVisualData: {
      accentColor: "#CAF7FD",
      backgroundColor: "#daf4f7",
    },
  },
  "reshenie-zadach": {
    info: {
      title: "Решение задач",
      timeToCompleteInHours: 2,
      minPrice: 300,
    },
    volumeData: {
      min: 1,
      max: 30,
      default: 5,
      unit: "задача",
    },
    antiplagiat: undefined,
    cardVisualData: {
      accentColor: "#FFC7FF",
      backgroundColor: "#ffe3ff",
    },
  },
  konsultaciya: {
    info: {
      title: "Консультация",
    },
    volumeData: undefined,
    antiplagiat: undefined,
    cardVisualData: {
      accentColor: "#D0FFEE",
      backgroundColor: "#DEFDF2",
    },
  },
};

export const getProjectType = (slug: string) => {
  const name = projectTypeOptions.filter((item) => item.value === slug);
  if (name.length > 0) {
    return name[0].value as ProjectTypes;
  }

  return null;
};

export const getProjectTypeLabel = (slug: string) => {
  const name = projectTypeOptions.filter((item) => item.value === slug);
  if (name.length > 0) {
    return name[0].label as ProjectTypes;
  }

  return "";
};

export const getAntiplagiatLabel = (slug: string) => {
  const name = antiplagiatOptions.filter((item) => item.value === slug);
  if (name.length > 0) {
    return name[0].label as ProjectTypes;
  }

  return "";
};
