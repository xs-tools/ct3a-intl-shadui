"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages, locales } from "@/i18n";
import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { Iconify } from "./iconify";

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const nowLocale = useLocale() as keyof typeof languages;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Iconify icon={"ooui:language"} fontSize={20} className="mr-2" />{" "}
          {languages[nowLocale].name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => router.replace(pathname, { locale })}
          >
            <span className="relative top-[1px] mr-2">
              {languages[locale].icon}
            </span>{" "}
            {languages[locale].name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
