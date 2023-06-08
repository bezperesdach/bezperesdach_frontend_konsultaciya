import { isDevelopment } from "@/utils/utils";

const urls = {
  host: isDevelopment ? "http://localhost:3000" : "https://bezperesdach.ru",
  backendHost: isDevelopment ? "http://localhost:1337" : "https://backend.bezperesdach.ru",
  base: "/",
  prices: "/prices",
  order: "/order",
  work: "/work",
  about_us: "/about_us",
  guarantees: "/guarantees",
  agreement: "/agreement",
  ugolokStudenta: {
    base: "/ugolok-studenta",
    stati: "/ugolok-studenta/stati",
  },
  uslugi: {
    kursovayaRabota: "/prices/kursovaya-rabota",
    diplomnayaRabota: "/prices/diplomnaya-rabota",
    magisterskayaRabota: "/prices/magisterskaya-dissertaciya",
    referat: "/prices/referat",
    doklad: "/prices/doklad",
    otchetPoPraktike: "/prices/otchet-po-praktike",
    prezentaciya: "/prices/prezentaciya",
    konsultaciya: "/prices/konsultaciya",
  },
};

export const uslugaPageExists = (str: string) => {
  for (const [, value] of Object.entries(urls.uslugi)) {
    if (typeof value === "string" && value.endsWith(str)) {
      return true;
    }
  }
  return false;
};

type Urls = typeof urls & {
  [key: string]: string | typeof urls;
};

export default urls as Urls;
