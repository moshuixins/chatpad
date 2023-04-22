import CN from "./cn";
import EN from "./en";
export type { LocaleType } from "./en";

export const AllLangs = ["en", "cn"] as const;
type Lang = (typeof AllLangs)[number];

const LANG_KEY = "lang";

function getItem(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setItem(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

function getLanguage() {
  try {
    return navigator.language.toLowerCase();
  } catch {
    return "en";
  }
}

export function getLang(): Lang {
  const savedLang = getItem(LANG_KEY);

  if (AllLangs.includes((savedLang ?? "") as Lang)) {
    return savedLang as Lang;
  }

  const lang = getLanguage();

  if (lang.includes("zh") || lang.includes("cn")) {
    return "cn";
  } else {
    return "en";
  }
}

export function changeLang(lang: string) {
  setItem(LANG_KEY, lang);
  location.reload();
}

export function getAllLangs() {
  return [EN.Language, CN.Language];
}

export default { en: EN, cn: CN }[getLang()];
