import Link from "next/link";
import React from "react";
import { createClient } from "@/prismicio";

export default function Footer() {
  const client = createClient();

  const settings = client.getSingle("settings");
  return (
    <footer>
      <Link href="/"></Link>
    </footer>
  );
}
