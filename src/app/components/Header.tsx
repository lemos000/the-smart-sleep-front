// components/Header.tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Container from "./Container"
import Logo from "@/app/assets/logoTeal.png"

const NAV = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#modulos", label: "Módulos" },
  { href: "#faq", label: "FAQ" },
  { href: "#preco", label: "Preço" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const hotmartUrl = "https://nexusrade.mycartpanda.com/checkout/169191668:1" // troque pelo seu link

  return (
    <header className="p-4 sticky top-0 z-50 bg-[var(--color-primary)]/80 backdrop-blur">
      <Container>
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src={Logo} alt="Logo" width={160} priority className="h-auto w-auto" />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-6 text-[15px] text-[var(--color-bg)] font-medium">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[var(--color-amarelo)] transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href={hotmartUrl}
              target="_blank"
              className="ml-2 rounded-xl px-4 py-2 bg-[var(--color-amarelo)] text-[var(--color-text)] font-bold hover:bg-[var(--color-secondary)] hover:text-[var(--color-bg)] transition-colors"
            >
              Quero começar
            </a>
          </nav>

          {/* Botão mobile */}
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg ring-1 ring-white/10"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Nav mobile */}
        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-[var(--color-text)]">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 hover:bg-[var(--color-accent)]/20 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={hotmartUrl}
                target="_blank"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-xl px-4 py-2 text-center bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] transition-colors"
              >
                Quero começar
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}
