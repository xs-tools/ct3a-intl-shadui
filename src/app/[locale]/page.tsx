import { Iconify } from "@/components/iconify";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Index" });

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border transition-all hover:ring-border/20">
            {t("notice")}
            <Link
              target="_blank"
              href="https://xs.tools"
              className="font-semibold text-indigo-600"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              xs.tools <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t("description")}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-12">
            <Button size="lg" asChild>
              <Link
                href="https://github.com/new?template_name=ct3a-intl-shadui&template_owner=xs-tools"
                target="_blank"
              >
                {t("started")}
              </Link>
            </Button>

            <Button size="lg" asChild variant="outline">
              <Link
                href="https://github.com/xs-tools/ct3a-intl-shadui"
                target="_blank"
              >
                <Iconify icon="mdi:github" fontSize={24} className="mr-2" />
                Github
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
