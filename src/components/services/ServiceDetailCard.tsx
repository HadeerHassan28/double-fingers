import Image from "next/image";
import { Link } from "@/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { defaultBlurDataUrl } from "@/utils/imageBlur";

interface ServiceDetailCardProps {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
  isReversed?: boolean;
}

export function ServiceDetailCard({
  id,
  number,
  title,
  description,
  image,
  features,
  specs,
  isReversed = false,
}: ServiceDetailCardProps) {
  return (
    <article
      id={id}
      className={`arch-card rounded-xl p-6 sm:p-10 scroll-mt-28 grid grid-cols-1 items-center gap-10 lg:grid-cols-12`}
    >
      <div
        className={`lg:col-span-6 ${
          isReversed ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <span className="font-mono text-3xl font-black text-accent dark:text-accent-dark">
          {number}
        </span>
        <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink-light dark:text-ink-dark">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-ink-mutedLight dark:text-ink-mutedDark">
          {description}
        </p>

        {/* Specs Grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 rounded-lg border border-borderLight bg-surface-mutedLight p-4 dark:border-borderDark dark:bg-surface-mutedDark">
          {specs.map((s, idx) => (
            <div key={idx}>
              <span className="text-[11px] uppercase tracking-wider text-ink-mutedLight dark:text-ink-mutedDark">
                {s.label}
              </span>
              <p className="text-xs font-bold text-ink-light dark:text-ink-dark">
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* Features */}
        <ul className="mt-6 space-y-2.5">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-ink-light dark:text-ink-dark">
              <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-xs sm:text-sm font-bold text-surface-dark transition-all hover:bg-accent-hover"
          >
            <span>احجز معاينة لهذه الخدمة / Book Consultation</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div
        className={`lg:col-span-6 ${
          isReversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-borderLight dark:border-borderDark">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
            placeholder="blur"
            blurDataURL={defaultBlurDataUrl}
            className="object-cover"
          />
        </div>
      </div>
    </article>
  );
}
