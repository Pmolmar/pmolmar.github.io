export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-700">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-slate-500 dark:text-slate-400 sm:px-6 lg:px-8">
        <p>&copy; {year} Pablo Molina Martínez</p>
      </div>
    </footer>
  );
}