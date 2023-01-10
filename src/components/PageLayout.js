export default function PageLayout({ children }) {
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-800 min-h-screen px-4">
      <div className="max-w-2xl mx-auto pt-4">{children}</div>
    </div>
  );
}
