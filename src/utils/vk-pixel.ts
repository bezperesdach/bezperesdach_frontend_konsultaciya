import { isDevelopment } from "@/utils/utils";

export const VK = {
  Goal: function (goalType: VKGoalTypes, options?: { value: number }) {
    if (isDevelopment) {
      console.log(`%c[VK](HIT)`, `color: blue`, goalType, options ?? "");
    } else {
      if (window.VK) {
        window.VK.Goal(goalType, options);
      } else {
        console.log("failed to use VK");
      }
    }
  },
};
