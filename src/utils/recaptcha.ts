import { isDevelopment } from "@/utils/utils";

export const RECAPTCHA_SITE_KEY = isDevelopment
  ? (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_DEV as string)
  : (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string);

export const RECAPTCHA_SECRET_KEY = isDevelopment
  ? (process.env.RECAPTCHA_SECRET_KEY_DEV as string)
  : (process.env.RECAPTCHA_SECRET_KEY as string);

export const verifyRecaptcha = async (token: string) => {
  const secretKey = RECAPTCHA_SECRET_KEY;

  const verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + token;

  const res = await fetch(verificationUrl);
  if (res.ok) {
    return await res.json();
  } else {
    throw "Unexpected error";
  }
};
