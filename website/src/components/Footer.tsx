export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-4">
          <span className="text-lg font-bold">
            AK<span className="gradient-text">.</span>
          </span>
          <span className="text-sm text-fg-dim">
            &copy; {new Date().getFullYear()} Adam Kahirov
          </span>
        </div>
        <div className="flex gap-8 text-sm text-fg-dim">
          <a href="#" className="transition-colors hover:text-fg">
            LinkedIn
          </a>
          <a href="#" className="transition-colors hover:text-fg">
            Impressum
          </a>
          <a href="#" className="transition-colors hover:text-fg">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
