/* eslint-disable */
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const languages = {
  zh: { name: "中文", locale: "zh", icon: "🇨🇳" },
  en: { name: "English", locale: "en", icon: "🇺🇸" },
  ja: { name: "日本語", locale: "ja", icon: "🇯🇵" },
};

export const locales = Object.keys(languages) as (keyof typeof languages)[];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
