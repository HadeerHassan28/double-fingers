import { CheckCircle2 } from "lucide-react";

interface FormSuccessStateProps {
  title: string;
  description: string;
  refId?: string;
}

export function FormSuccessState({
  title,
  description,
  refId,
}: FormSuccessStateProps) {
  return (
    <div className="arch-card rounded-lg p-8 text-center">
      <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
      <h3 className="mt-4 text-xl font-bold text-ink-light dark:text-ink-dark">
        {title}
      </h3>
      <p className="mt-2 text-sm text-ink-mutedLight dark:text-ink-mutedDark">
        {description}
      </p>
      {refId && (
        <p className="mt-3 font-mono text-xs text-accent font-semibold">
          REF: {refId}
        </p>
      )}
    </div>
  );
}
