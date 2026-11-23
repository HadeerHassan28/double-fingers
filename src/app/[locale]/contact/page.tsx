import { setRequestLocale, getTranslations } from "next-intl/server";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SiteVisitForm } from "@/components/forms/SiteVisitForm";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const contactDetails = [
    {
      icon: Phone,
      title: locale === "ar" ? "الهاتف المباشر" : "Direct Phone",
      value: tc("phone"),
      link: "tel:+201001234567",
    },
    {
      icon: MessageSquare,
      title: locale === "ar" ? "واتساب هندسي" : "WhatsApp",
      value: "+20 100 123 4567",
      link: "https://wa.me/201001234567",
    },
    {
      icon: Mail,
      title: locale === "ar" ? "البريد الإلكتروني" : "Email",
      value: tc("email"),
      link: "mailto:info@doublefingers.com",
    },
    {
      icon: Clock,
      title: locale === "ar" ? "مواعيد العمل" : "Working Hours",
      value: tc("workingHours"),
      link: null,
    },
  ];

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Contact Info Cards */}
          <div className="space-y-6 lg:col-span-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactDetails.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="arch-card rounded-lg p-5 flex items-start gap-4"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent dark:text-accent-dark">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-ink-mutedLight dark:text-ink-mutedDark">
                        {item.title}
                      </span>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="block text-sm font-bold text-ink-light hover:text-accent dark:text-ink-dark dark:hover:text-accent-dark transition-colors"
                          dir="ltr"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-bold text-ink-light dark:text-ink-dark">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="arch-card rounded-lg p-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-ink-light dark:text-ink-dark">
                    {locale === "ar" ? "المقر الرئيسي" : "Headquarters"}
                  </h4>
                  <p className="mt-1 text-xs text-ink-mutedLight dark:text-ink-mutedDark leading-relaxed">
                    {tc("address")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-7">
            <SiteVisitForm />
          </div>
        </div>
      </div>
    </div>
  );
}
