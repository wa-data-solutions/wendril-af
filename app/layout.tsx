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
    default: "WENDRIL.AF",
    template: "%s | WENDRIL.AF",
  },

  description:
    "Wendril Ferreira — Consultoria em Engenharia de Dados, Microsoft Fabric e plataformas analíticas.",

  openGraph: {
    title: "WENDRIL.AF",
    description:
      "Engenharia de Dados • Microsoft Fabric • Data Platforms",
    url: "https://wendril.af",
    siteName: "WENDRIL.AF",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WENDRIL.AF",
    description:
      "Engenharia de Dados • Microsoft Fabric • Data Platforms",
    images: ["/og-image.png"],
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