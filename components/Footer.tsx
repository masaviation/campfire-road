export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-ink/60">
        &copy; {new Date().getFullYear()} Campfire Road
      </div>
    </footer>
  );
}
