import { getTranslations } from "next-intl/server";
import { Iconify } from "@/components/iconify";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Index" });

  return (
    <main>
      <header className="h-16 border border-border bg-background/90">
        <div className="container flex h-full justify-between">
          {/* left */}
          <div className="flex items-center text-xl font-bold uppercase">
            <Iconify
              fontSize={32}
              className="mr-2"
              icon="pepicons-pencil:swords"
            />
            xs.tool
          </div>
          {/* center */}
          <div className="flex flex-1 items-center justify-center capitalize">
            {t("title")}
          </div>
          {/* right */}
          <div>right</div>
        </div>
      </header>
    </main>
  );
}
