import { Link } from 'react-router-dom';

export default function EmptyState({ icon: Icon, title, description, actionLabel, actionTo }) {
  return (
    <div className="flex flex-col items-center px-4 py-16 text-center">
      {Icon && (
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-hover text-muted">
          <Icon className="h-7 w-7" />
        </div>
      )}
      <h3 className="mt-4 text-lg font-semibold text-fg">{title}</h3>
      {description && <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted">{description}</p>}
      {actionLabel && actionTo && (
        <Link
          to={actionTo}
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-fg hover:opacity-90"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
