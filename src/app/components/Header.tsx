// components/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Logo from "@/app/assets/logoTeal.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const hotmartUrl = "https://nexusrade.mycartpanda.com/checkout/169191668:1"; // troque pelo seu link

  return (
    <header className="p-4 top-0 z-50 bg-[var(--color-primary)]/80 backdrop-blur">
      <Container>
        <div className="justify-center h-16 flex items-center md:justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src={Logo}
              alt="Logo"
              width={160}
              priority = {true}
              className="h-auto w-auto"
            />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-6 text-[15px] text-[var(--color-bg)] font-medium">
            <a
              href={hotmartUrl}
              target="_blank"
              className="ml-2 rounded-xl px-4 py-2 bg-[var(--color-amarelo)] text-[var(--color-text)] font-bold hover:bg-[var(--color-secondary)] hover:text-[var(--color-bg)] transition-colors"
            >
              Quero começar
            </a>
          </nav>

       
        </div>

      </Container>
    </header>
  );
}
