import { cookies } from "next/headers";
import { dict, DEFAULT_LANG, LANGS, type Lang } from "./dict";

export const LANG_COOKIE = "jyotish-lang";

export function getLang(): Lang {
  const c = cookies().get(LANG_COOKIE)?.value as Lang | undefined;
  if (c && (LANGS as string[]).includes(c)) return c;
  return DEFAULT_LANG;
}

export function getDict() {
  return dict[getLang()];
}
