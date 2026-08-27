import { Lightbulb, AlertTriangle, Info, FlaskConical, ShieldAlert } from 'lucide-react';

const VARIANTS = {
  tip: { icon: Lightbulb, classes: 'border-primary/30 bg-primary/5 text-fg', iconClass: 'text-primary' },
  note: { icon: Info, classes: 'border-border bg-hover text-fg', iconClass: 'text-muted' },
  warning: { icon: AlertTriangle, classes: 'border-warning/40 bg-warning/10 text-fg', iconClass: 'text-warning' },
  danger: { icon: ShieldAlert, classes: 'border-danger/40 bg-danger/10 text-fg', iconClass: 'text-danger' },
  example: { icon: FlaskConical, classes: 'border-success/30 bg-success/5 text-fg', iconClass: 'text-success' },
};

export default function Callout({ variant = 'note', title, text }) {
  const config = VARIANTS[variant] || VARIANTS.note;
  const Icon = config.icon;

  return (
    <div className={`my-4 flex gap-3 rounded-lg border px-4 py-3 ${config.classes}`}>
      <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${config.iconClass}`} />
      <div className="text-sm leading-relaxed">
        {title && <p className="mb-1 font-semibold">{title}</p>}
        <p className="text-fg/90">{text}</p>
      </div>
    </div>
  );
}
