// components/WhoFor.tsx
import { Baby, BedSingle, Milk, Angry, ShieldAlert, Ratio, MoonStar } from "lucide-react"
import Container from "./Container"

const items = [
  {
    icon: BedSingle,
    text: "Não consegue colocar seu bebê no berço com tranquilidade",
  },
  {
    icon: Baby,
    text: "Não consegue boas sonecas fora do colo",
  },
  {
    icon: MoonStar,
    text: "Não sabe por onde começar para fazer seu bebê dormir no berço",
  },
  {
    icon: Milk,
    text: "Tem um bebê que só dorme mamando",
  },
  {
    icon: Angry,
    text: "Quer ensinar seu bebê a dormir bem mas não aceita técnicas de deixar chorando no berço",
  },
  {
    icon: ShieldAlert,
    text: "Deseja dormir melhor mas tem medo de traumatizar seu bebê com treinamentos de sono",
  },
]

export default function WhoFor() {
  return (
    <section className="py-20 bg-[var(--color-primary)]/5">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-bg)] tracking-tight">
            PARA QUEM É ESSE CURSO?
          </h2>
          <p className="mt-3 text-sm md:text-base text-[var(--color-accent)]">
            Esse curso foi criado para você que:
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, text }, i) => (
            <li
              key={i}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-7 text-center backdrop-blur-sm
                         shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]"
            >
              <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-xl
                              bg-[var(--color-secondary)]/15 ring-1 ring-white/10">
                <Icon className="h-12 w-12 text-[var(--color-accent)]" />
              </div>
              <p className="text-[var(--color-bg)]/90 leading-relaxed">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
