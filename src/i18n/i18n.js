import { strings } from "./strings";

export const detectLocale = () => {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language?.toLowerCase() || "en";
  if (lang.startsWith("ja")) return "ja";
  if (lang.startsWith("es")) return "es";
  return "en";
};

export const t = (lang, key) => {
  const locale = strings[lang] ? lang : "en";
  const value = strings[locale]?.[key];
  if (value === undefined) {
    return strings.en[key] ?? "";
  }
  return value;
};

export const stringsFor = (lang) => strings[lang] || strings.en;
