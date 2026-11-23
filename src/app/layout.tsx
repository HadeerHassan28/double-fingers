import type { ReactNode } from "react";

// Root layout required by Next.js App Router for root error and not-found handling
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
