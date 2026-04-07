import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wendril.af"),

  title: {
    default: "wendril.af",
    template: "%s | wendril.af",
  },

  description:
    "Wendril Ferreira — Consultoria em Engenharia de Dados, Microsoft Fabric, Data Warehouse e plataformas analíticas modernas.",

  keywords: [
    "engenharia de dados",
    "data engineer",
    "microsoft fabric",
    "data warehouse",
    "power bi",
    "etl",
    "consultoria dados",
    "big data",
  ],

  authors: [{ name: "Wendril Ferreira" }],
  creator: "Wendril Ferreira",

  openGraph: {
    title: "wendril.af",
    description:
      "Consultoria em Engenharia de Dados, Microsoft Fabric e soluções analíticas.",
    url: "https://wendril.af",
    siteName: "wendril.af",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "wendril.af",
    description:
      "Engenharia de Dados • Microsoft Fabric • Data Platforms",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}