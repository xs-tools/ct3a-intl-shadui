import { Iconify } from "@/components/iconify";
import { Badge } from "@/components/ui/badge";
import { getTranslations } from "next-intl/server";

export default async function Example({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "About" });
  const features = Array.from({ length: 8 })
    .fill(0)
    .map((_, index) => {
      const i = index + 1;
      // @ts-ignore
      const name = t(`a${i}.name`);
      // @ts-ignore
      const desc = t(`a${i}.description`);
      return (
        <div key={i} className="relative pl-9">
          <dt className="font-semibold text-foreground">
            <Iconify
              icon={"lucide:check"}
              className="absolute left-0 top-1 h-5 w-5 text-indigo-500"
              aria-hidden="true"
            />
            {name}
          </dt>
          <dd className="mt-2">{desc}</dd>
        </div>
      );
    });

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Features
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-base leading-7">
              {[
                "prisma",
                "next.js",
                "tailwindcss",
                "iconify",
                "trpc",
                "next-intl",
                "react-query",
              ].map((item) => (
                <Badge key={item} variant="outline" className="text-sm">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-muted-foreground sm:grid-cols-2 lg:gap-y-16">
            {features}
          </dl>
        </div>
      </div>
    </div>
  );
}
