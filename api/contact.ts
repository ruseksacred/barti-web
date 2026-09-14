import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed",
        });
    }

    const { name, contact, business, message } = req.body ?? {};

    if (!name || !contact || !message) {
        return res.status(400).json({
            message: "Uzupełnij wymagane pola.",
        });
    }

    try {
        if (
            !process.env.SMTP_HOST ||
            !process.env.SMTP_PORT ||
            !process.env.SMTP_USER ||
            !process.env.SMTP_PASSWORD ||
            !process.env.CONTACT_EMAIL
        ) {
            throw new Error("Brakuje zmiennych środowiskowych SMTP");
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        await transporter.verify();

        await transporter.sendMail({
            from: `"Barti Web" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
            subject: `Nowa wiadomość ze strony od ${name}`,
            text: `
Imię: ${name}
Kontakt: ${contact}
Firma / branża: ${business || "Nie podano"}

Wiadomość:
${message}
            `,
        });

        return res.status(200).json({
            message: "Wiadomość została wysłana.",
        });
    } catch (error) {
        console.error("CONTACT ERROR:", error);

        return res.status(500).json({
            message: "Błąd podczas wysyłania wiadomości.",
        });
    }
}