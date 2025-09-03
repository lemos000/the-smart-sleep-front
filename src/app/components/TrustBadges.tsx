// components/TrustBadges.tsx
import { Award, BadgeCheck, Computer, SunMoon } from "lucide-react"
import Container from "./Container"

const items = [
  { title: "7 dias de garantia", icon: Award },
  { title: "Pagamento seguro", icon: BadgeCheck },
  { title: "Acesso imediato", icon: Computer },
  { title: "Método gentil", icon: SunMoon },
]

export default function TrustBadges() {
  return (
    <section className="text-shadow-orange-100 pb-5 bg-[var(--color-bg)]">
      <Container>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it, i) => {
            const Icon = it.icon
            return (
              <li
                key={i}
                className="rounded-xl p-4 text-center"
              >
                <Icon className="w-11 h-11 mx-auto mb-2 text-[var(--color-primary)]" />
                <p className="font-medium text-lg text-[var(--color-text)]">{it.title}</p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
