import { cookies } from "next/headers";
import { DEFAULT_LANG, isValidLang, type Lang } from "./i18n";

export async function getLang(): Promise<Lang> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value ?? "";
  return isValidLang(lang) ? lang : DEFAULT_LANG;
}
