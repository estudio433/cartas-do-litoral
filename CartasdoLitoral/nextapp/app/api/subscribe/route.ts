import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, tags, custom_fields } = body;

    console.log("PUBLICATION_ID:", process.env.BEEHIIV_PUBLICATION_ID);
    console.log("API_KEY exists:", !!process.env.BEEHIIV_API_KEY);

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/pub_df6dbc44-6050-475f-9116-cbaeb5a30332/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          first_name: firstName || "",
          tags: tags || [],
          custom_fields: custom_fields || [],
          reactivate_existing: true,
          send_welcome_email: false,
          utm_source: body.utm_source || "website",
          utm_medium: body.utm_medium || "organic",
          double_opt_in: false,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("Beehiiv error:", error);
      return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
