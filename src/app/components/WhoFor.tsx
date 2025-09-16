// components/WhoFor.tsx
import {
  Baby,
  BedSingle,
  Milk,
  Angry,
  ShieldAlert,
  MoonStar,
} from "lucide-react";
import Container from "./Container";

const items = [
  {
    icon: BedSingle,
    text: "Não consegue colocar seu bebê no berço com tranquilidade",
  },
  { icon: Baby, text: "Não consegue boas sonecas fora do colo" },
  {
    icon: MoonStar,
    text: "Não sabe por onde começar para fazer seu bebê dormir no berço",
  },
  { icon: Milk, text: "Tem um bebê que só dorme mamando" },
  {
    icon: Angry,
    text: "Quer ensinar seu bebê a dormir bem mas não aceita técnicas de deixar chorando no berço",
  },
  {
    icon: ShieldAlert,
    text: "Deseja dormir melhor mas tem medo de traumatizar seu bebê com treinamentos de sono",
  },
];

export default function WhoFor() {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-[var(--color-primary)]/5">
      <Container>
        <header className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-)]">
            PARA QUEM É ESSE CURSO?
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-[var(--color-text)]/80">
            Esse curso foi criado para você que:
          </p>
        </header>

        <ul className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map(({ icon: Icon, text }, i) => (
            <li
              key={i}
              className="rounded-2xl bg-white/5 ring-1 ring-black/5 p-5 sm:p-6 md:p-7 text-center backdrop-blur-sm"
            >
              <div
                className="mx-auto mb-4 grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-xl
                           bg-[var(--color-secondary)]/15 ring-1 ring-black/5"
              >
                <Icon
                  aria-hidden="true"
                  className="h-8 w-8 sm:h-10 sm:w-10 text-[var(--color-accent)]"
                />
              </div>

              <p className="text-sm sm:text-base text-[var(--color-text)]/90 leading-relaxed">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
