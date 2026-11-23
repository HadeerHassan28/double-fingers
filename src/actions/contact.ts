"use server";

import { SiteVisitFormData } from "@/types";

export async function submitSiteVisitAction(formData: SiteVisitFormData) {
  if (
    !formData.fullName ||
    !formData.phone ||
    !formData.spaceType ||
    !formData.location
  ) {
    return { success: false, error: "Please fill all required fields" };
  }

  // Simulate server execution and logging
  console.log("[Double Fingers Server Action] Booking received:", formData);

  return {
    success: true,
    referenceNumber: `DF-${Math.floor(100000 + Math.random() * 900000)}`,
  };
}
