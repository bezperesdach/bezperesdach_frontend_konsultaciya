import { isDevelopment } from "@/utils/utils";

export const GOOGLE_TAG_MANAGER_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

const logAction = (action: string, params: string) => {
  console.log(`%c[Gtag](${action})`, `color: green`, params);
};

// const checkGtagAndId = () => {
//   if (typeof window.gtag === "undefined") {
//     console.log("gtag is undefined");
//     return;
//   }

//   if (typeof GOOGLE_TAG_MANAGER_ID === "undefined") {
//     console.log("GOOGLE_TAG_MANAGER_ID is undefined");
//     return;
//   }
// };

const returnIfDevelopment = (action: string, ...args: unknown[]) => {
  if (isDevelopment) {
    logAction(action, args.toString());
    return;
  }
};

export const gtagPageView = (url: string, title: string) => {
  returnIfDevelopment("PageView", url, title);

  window.gtag &&
    window.gtag("config", GOOGLE_TAG_MANAGER_ID, {
      page_location: url,
      page_title: title,
    });
};

export const event = ({ action, category, label, value }: { action: string; category: string; label: string; value: string }) => {
  returnIfDevelopment("PageView", action, category, label, value);

  window.gtag &&
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
};
