import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Егор Габитов — Автоматизация и AI для бизнеса",
  description:
    "Собираю автоматизации на n8n для малого и среднего бизнеса: AI-боты в Telegram и WhatsApp, CRM-интеграции, лид-генерация, бронирование звонков.",
  openGraph: {
    title: "Егор Габитов — Automation & AI",
    description:
      "AI-боты, CRM-интеграции и лид-генерация на n8n. Системы, которые работают без участия менеджера.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
