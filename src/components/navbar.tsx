import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageToggle } from "./language-toggle";
import { ModeToggle } from "./mode-toggle";
import { Iconify } from "./iconify";
import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation";

export async function Navbar({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Menu" });

  // @ts-ignore
  const menu = new Array(2).fill(0).map((_, i) => {
    return (
      <Button key={i} variant="ghost" asChild>
        {/* @ts-ignore */}
        <Link href={`${t(`a${i}.url`)}`}>
          {/* @ts-ignore */}
          {t(`a${i}.name`)}
        </Link>
      </Button>
    );
  });

  const Logo = () => {
    return (
      <Link
        href={`/`}
        className="flex h-full items-center text-xl font-bold uppercase"
      >
        <Iconify fontSize={36} className="mr-4" icon="pepicons-pencil:swords" />
        xs.tool
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 flex h-20 items-center gap-4 px-4 md:px-6">
      <div className="container hidden items-center justify-between md:flex">
        {/* left */}
        <div className="w-48 cursor-pointer">
          <Logo />
        </div>
        {/* center */}
        <nav className="flex h-full gap-6 text-lg font-medium">{menu}</nav>
        {/* right */}
        <div className="flex w-48 gap-4">
          <LanguageToggle />
          <ModeToggle />
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Iconify icon={"lucide:menu"} fontSize={20} />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col justify-between">
          <nav className="grid gap-6 text-lg font-medium">
            <Logo />
            {menu}
          </nav>

          <div className="flex justify-end">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
