import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header className="flex z-30 w-full h-[80px] sticky top-0 px-24 justify-between items-center bg-accent text-background shadow-sm shadow-accent">
      <div className="flex items-center gap-4">
        <img src="/img/logo.png" className="h-[60px]" />
        <Link href="/" className="font-inline">
          {settings.data.site_title}
        </Link>
      </div>
      <nav>
        <ul>
          {settings.data.navigation.map(({ link, label }) => (
            <li key={label}>
              <PrismicNextLink className="" field={link}>
                Link
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
