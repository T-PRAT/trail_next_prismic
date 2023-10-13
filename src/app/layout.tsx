import "./globals.css";
import type { Metadata } from "next";
import clsx from "clsx";
import { bungee, bungeeInline, bungeeOutline, bungeeShade } from "./font";
import { createClient } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return {
    title: settings.data.site_title || "Trail",
    description: settings.data.meta_description || "Trail des Templates",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={clsx(
        bungee.variable,
        bungeeInline.variable,
        bungeeOutline.variable,
        bungeeShade.variable,
      )}
      lang="en"
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
