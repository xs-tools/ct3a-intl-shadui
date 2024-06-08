import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";
import { localePrefix } from "./navigation";

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|zh|ja)/:path*"],
};
