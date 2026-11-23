import Image from "next/image";
import { Link } from "@/navigation";
import { defaultBlurDataUrl } from "@/utils/imageBlur";

interface LogoProps {
  locale?: string;
  className?: string;
}

export function Logo({ locale = "ar", className = "" }: LogoProps) {
  const isArabic = locale === "ar";

  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-md border border-borderLight bg-surface-light p-1 shadow-sm transition-colors group-hover:border-accent dark:border-borderDark dark:bg-surface-dark">
        <Image
          src="/logo.png"
          alt="Double Fingers Logo"
          width={44}
          height={44}
          loading="lazy"
          placeholder="blur"
          blurDataURL={defaultBlurDataUrl}
          className="h-full w-full object-contain dark:brightness-110"
        />
      </div>

      <div className="flex flex-col">
        <span className="text-base font-extrabold tracking-tight text-ink-light transition-colors group-hover:text-accent dark:text-ink-dark dark:group-hover:text-accent-dark">
          double fingers
        </span>
        <span className="text-[10px] font-medium tracking-wide text-ink-mutedLight dark:text-ink-mutedDark">
          {isArabic ? "نبني أحلامك على أرض الواقع" : "We build your dreams"}
        </span>
      </div>
    </Link>
  );
}
