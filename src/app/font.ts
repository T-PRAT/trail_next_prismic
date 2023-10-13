import {
  Bungee,
  Bungee_Inline,
  Bungee_Outline,
  Bungee_Shade,
} from "next/font/google";

const bungee = Bungee({
  subsets: ["latin"],
  variable: "--font-bungee",
  weight: ["400"],
  display: "swap",
});

const bungeeInline = Bungee_Inline({
  subsets: ["latin"],
  variable: "--font-bungee-inline",
  weight: ["400"],
  display: "swap",
});

const bungeeOutline = Bungee_Outline({
  subsets: ["latin"],
  variable: "--font-bungee-outline",
  weight: ["400"],
  display: "swap",
});

const bungeeShade = Bungee_Shade({
  subsets: ["latin"],
  variable: "--font-bungee-shade",
  weight: ["400"],
  display: "swap",
});

export { bungee, bungeeInline, bungeeOutline, bungeeShade };
