export default function ProgressBar({ value = 0, size = 'md', showLabel = false, className = '' }) {
  const clamped = Math.max(0, Math.min(100, value));
  const height = size === 'sm' ? 'h-1.5' : size === 'lg' ? 'h-3' : 'h-2';

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`w-full overflow-hidden rounded-full bg-hover ${height}`}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && (
        <span className="mt-1 inline-block text-xs font-medium text-muted">{clamped}% complete</span>
      )}
    </div>
  );
}
