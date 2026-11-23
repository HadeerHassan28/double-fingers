"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send, Loader2 } from "lucide-react";
import { submitSiteVisitAction } from "@/actions/contact";
import { FormSuccessState } from "./FormSuccessState";

export function SiteVisitForm() {
  const t = useTranslations("contact");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [refId, setRefId] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    spaceType: "villa",
    location: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await submitSiteVisitAction(form);
      if (res.success) {
        setSuccess(true);
        if (res.referenceNumber) setRefId(res.referenceNumber);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <FormSuccessState
        title={t("successTitle")}
        description={t("successDesc")}
        refId={refId}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="arch-card rounded-lg p-6 sm:p-8 space-y-4">
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-ink-light dark:text-ink-dark mb-1.5">
          {t("nameLabel")} *
        </label>
        <input
          required
          type="text"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          placeholder={t("namePlaceholder")}
          className="w-full rounded-md border border-borderLight bg-surface-light px-3.5 py-2.5 text-sm text-ink-light placeholder:text-ink-mutedLight/60 focus:border-accent focus:outline-none dark:border-borderDark dark:bg-surface-dark dark:text-ink-dark"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-ink-light dark:text-ink-dark mb-1.5">
            {t("phoneLabel")} *
          </label>
          <input
            required
            type="tel"
            dir="ltr"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder={t("phonePlaceholder")}
            className="w-full rounded-md border border-borderLight bg-surface-light px-3.5 py-2.5 text-sm text-ink-light placeholder:text-ink-mutedLight/60 focus:border-accent focus:outline-none dark:border-borderDark dark:bg-surface-dark dark:text-ink-dark"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-ink-light dark:text-ink-dark mb-1.5">
            {t("spaceTypeLabel")} *
          </label>
          <select
            value={form.spaceType}
            onChange={(e) => setForm({ ...form, spaceType: e.target.value })}
            className="w-full rounded-md border border-borderLight bg-surface-light px-3.5 py-2.5 text-sm text-ink-light focus:border-accent focus:outline-none dark:border-borderDark dark:bg-surface-dark dark:text-ink-dark"
          >
            <option value="villa">{t("spaceVilla")}</option>
            <option value="apartment">{t("spaceApartment")}</option>
            <option value="office">{t("spaceOffice")}</option>
            <option value="commercial">{t("spaceCommercial")}</option>
            <option value="other">{t("spaceOther")}</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-ink-light dark:text-ink-dark mb-1.5">
          {t("locationLabel")} *
        </label>
        <input
          required
          type="text"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          placeholder={t("locationPlaceholder")}
          className="w-full rounded-md border border-borderLight bg-surface-light px-3.5 py-2.5 text-sm text-ink-light placeholder:text-ink-mutedLight/60 focus:border-accent focus:outline-none dark:border-borderDark dark:bg-surface-dark dark:text-ink-dark"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-ink-light dark:text-ink-dark mb-1.5">
          {t("notesLabel")}
        </label>
        <textarea
          rows={3}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder={t("notesPlaceholder")}
          className="w-full rounded-md border border-borderLight bg-surface-light px-3.5 py-2.5 text-sm text-ink-light placeholder:text-ink-mutedLight/60 focus:border-accent focus:outline-none dark:border-borderDark dark:bg-surface-dark dark:text-ink-dark resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-surface-dark transition-all hover:bg-accent-hover disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>{t("submitting")}</span>
          </>
        ) : (
          <>
            <span>{t("submit")}</span>
            <Send className="h-4 w-4 rtl:rotate-180" />
          </>
        )}
      </button>
    </form>
  );
}
