import { Link } from "@/navigation";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <span className="font-mono text-6xl font-black text-accent">404</span>
      <h2 className="mt-4 text-2xl font-bold text-ink-light dark:text-ink-dark">
        الصفحة غير موجودة / Page Not Found
      </h2>
      <p className="mt-2 text-sm text-ink-mutedLight dark:text-ink-mutedDark">
        عذراً، لم نتمكن من العثور على الصفحة المطلوبة.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-surface-dark transition-all hover:bg-accent-hover"
      >
        <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
        <span>العودة للرئيسية / Return Home</span>
      </Link>
    </div>
  );
}
