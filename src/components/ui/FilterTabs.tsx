"use client";

import { motion } from "framer-motion";

export interface FilterTabOption {
  key: string;
  label: string;
}

interface FilterTabsProps {
  tabs: FilterTabOption[];
  activeTab: string;
  onChange: (key: string) => void;
}

export function FilterTabs({ tabs, activeTab, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`relative rounded-md px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
              isActive
                ? "text-surface-dark font-bold"
                : "text-ink-mutedLight hover:text-ink-light dark:text-ink-mutedDark dark:hover:text-ink-dark border border-borderLight dark:border-borderDark bg-surface-light dark:bg-surface-dark"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilterTab"
                className="absolute inset-0 rounded-md bg-accent dark:bg-accent-dark"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
