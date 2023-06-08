export const cookiePrefix = "_bezperesdach-cookies_";

type GetCookieProps = {
  prefix?: string;
  cookies: string;
  name: string;
};

export const getCookie = ({ prefix = cookiePrefix, cookies, name }: GetCookieProps) => {
  const value = `; ${cookies}`;
  const parts = value.split(`; ${prefix}${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
};

type SetCookieProps = {
  prefix?: string;
  name: string;
  value: string;
  path: string;
  expires?: Date;
};

export const setCookie = ({ prefix = cookiePrefix, name, value, path, expires }: SetCookieProps) => {
  if (document) {
    const expiresStr = expires?.toUTCString();
    document.cookie = `${prefix}${name}=${encodeURIComponent(value)}; path=${path}; expires=${expiresStr}`;
  }
};
