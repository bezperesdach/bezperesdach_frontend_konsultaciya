export const YANDEX_METRIKA_ID = Number(process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID);
import { isDevelopment } from "@/utils/utils";

export const ym = (goal: string, goalName: string) => {
  if (isDevelopment) {
    console.log(`%c[YandexMetrika](HIT)`, `color: orange`, goal, goalName);
  } else {
    if (window.ym) {
      window.ym(YANDEX_METRIKA_ID, goal, goalName);
    } else {
      console.log("failed to use YM");
    }
  }
};
