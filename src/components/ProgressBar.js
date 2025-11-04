export default function ProgressBar({ value = 0, max = 100 }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="w-full bg-slate-800 rounded-xl overflow-hidden border border-cyan-500/30">
      <div
        className="h-3 bg-cyan-500"
        style={{ width: `${pct}%` }}
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
        title={`${pct}%`}
      />
    </div>
  );
}
