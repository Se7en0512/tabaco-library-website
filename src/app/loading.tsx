export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="glass p-8 rounded-3xl shadow-[var(--shadow)] text-center">
        <div className="w-16 h-16 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <h3 className="text-xl font-semibold text-[var(--text)] mb-2">Loading...</h3>
        <p className="text-[var(--muted)]">Please wait while we load the content</p>
      </div>
    </div>
  );
}