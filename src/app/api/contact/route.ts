import { NextResponse } from "next/server";
import { SiteVisitFormData } from "@/types";

export async function POST(request: Request) {
  try {
    const data: SiteVisitFormData = await request.json();

    if (!data.fullName || !data.phone || !data.spaceType || !data.location) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, send email, trigger CRM webhook, or write to database
    console.log("[Double Fingers] New Site Assessment Request:", {
      ...data,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Site visit request received successfully",
      referenceNumber: `DF-${Date.now().toString().slice(-6)}`,
    });
  } catch (error) {
    console.error("[Double Fingers] API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
