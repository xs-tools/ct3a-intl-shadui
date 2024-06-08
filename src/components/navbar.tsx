import { Link } from "@/navigation";
import { Iconify } from "./iconify";
import { getTranslations } from "next-intl/server";
import { Button } from "./ui/button";

export const Navbar = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale, namespace: "Menu" });

  // @ts-ignore
  const menu = [0, 1, 2].map((item: number) => {
    return (
      <Button key={item} variant="ghost" asChild>
        {/* @ts-ignore */}
        <Link href={`/${t(`a${item}.url`)}`}>
          {/* @ts-ignore */}
          {t(`a${item}.name`)}
        </Link>
      </Button>
    );
  });
  return (
    <header className="h-16 border border-border bg-background/90">
      <div className="container flex h-full justify-between">
        {/* left */}
        <div className="w-48 cursor-pointer text-xl font-bold uppercase">
          <Link href={`/`} className="flex h-full items-center">
            <Iconify
              fontSize={36}
              className="mr-2"
              icon="pepicons-pencil:swords"
            />
            xs.tool
          </Link>
        </div>

        {/* center */}
        <div className="flex flex-1 items-center justify-center gap-4">
          {menu}
        </div>

        {/* right */}
        <div className="flex w-48 items-center">right</div>
      </div>
    </header>
  );
};
