export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <span>
          &copy; {new Date().getFullYear()} Adam Kahirov. Stuttgart, Deutschland.
        </span>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-foreground">
            LinkedIn
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Impressum
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
