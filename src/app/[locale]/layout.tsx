import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Double Fingers | We Build Your Dreams - التشطيبات والتنفيذ المعماري",
  description:
    "شركة Double Fingers للتشطيبات الفاخرة والتنفيذ المعماري الداخلي للفلل والشقق والمقرات الإدارية بأعلى معايير الإشراف الهندسي والدقة.",
  icons: {
    icon: "/logo.png",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ar" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const isArabic = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isArabic ? "rtl" : "ltr"}
      className={`${inter.variable} ${cairo.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`min-h-screen bg-canvas-light text-ink-light dark:bg-canvas-dark dark:text-ink-dark selection:bg-accent selection:text-surface-dark ${
          isArabic ? "font-arabic" : "font-sans"
        }`}
      >
        <ThemeProvider>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <div className="flex min-h-screen flex-col">
              <Navbar locale={locale} />
              <main className="flex-1">{children}</main>
              <Footer locale={locale} />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
