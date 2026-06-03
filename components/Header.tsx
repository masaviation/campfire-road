import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-ink/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-xl font-bold text-brand">
          Campfire Road
        </Link>
        <nav className="flex gap-6 text-sm text-ink/80">
          <Link href="/" className="hover:text-brand-accent">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
