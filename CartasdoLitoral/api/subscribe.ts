import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, firstName } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email é obrigatório" });
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          first_name: firstName || "",
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: "website",
          utm_medium: "organic",
          utm_campaign: "newsletter_signup",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Beehiiv error:", data);
      return res.status(500).json({ error: "Erro ao cadastrar. Tente novamente." });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return res.status(500).json({ error: "Erro inesperado. Tente novamente." });
  }
}
