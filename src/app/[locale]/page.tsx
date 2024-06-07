import { getTranslations } from "next-intl/server";
import { Iconify } from "@/components/iconify";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Menu" });

  // @ts-ignore
  const menu = [0, 1, 2].map((item: number) => {
    return (
      <Button key={item} variant="ghost" asChild>
        {/* @ts-ignore */}
        <Link href={`/${locale}${t(`a${item}.url`)}`}>
          {/* @ts-ignore */}
          {t(`a${item}.name`)}
        </Link>
      </Button>
    );
  });

  return (
    <main>
      <header className="h-16 border border-border bg-background/90">
        <div className="container flex h-full justify-between">
          {/* left */}
          <div className="flex w-48 items-center text-xl font-bold uppercase">
            <Iconify
              fontSize={36}
              className="mr-2"
              icon="pepicons-pencil:swords"
            />
            xs.tool
          </div>

          {/* center */}
          <div className="flex flex-1 items-center justify-center gap-4">
            {menu}
          </div>

          {/* right */}
          <div className="flex w-48 items-center">right</div>
        </div>
      </header>
    </main>
  );
}
