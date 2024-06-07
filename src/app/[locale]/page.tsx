export default async function Home() {
  return (
    <main>
      <header className="h-16 border border-border bg-background/90">
        <div className="container flex justify-between">
          {/* left */}
          <div>left</div>
          {/* center */}
          <div className="flex-1"></div>
          {/* right */}
          <div>right</div>
        </div>
      </header>
    </main>
  );
}
