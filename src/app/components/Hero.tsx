// components/Hero.tsx
import Image from "next/image";
import Container from "./Container";
import GreatImage from "@/app/assets/logo.jpg";

export default function Hero() {
  const hotmartUrl = "https://nexusrade.mycartpanda.com/checkout/169191668:1";
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(164deg,var(--color-primary)_0%,var(--color-primary)_50%,var(--color-bg)_50%,var(--color-bg)_100%)]">
      <Container>
        <div className="py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase font-medium tracking-widest text-sm text-[var(--color-accent)]">
              Programa online
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-[var(--color-bg)]">
              COMO FAZER O SEU{" "}
              <span className="text-[var(--color-bg)] text-6xl">
                BEBÊ DORMIR
              </span>
            </h1>
            <p className="mt-5 text-lg text-gray-100">
              O jeito fácil de ensinar seu bebê a dormir no berço com
              tranquilidade, sem traumas.
            </p>
            <div className="py-4 text-3xl font-light text-[var(--color-accent)]">
              9x de
              <span className="text-4xl font-bold"> R$ 9,23</span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={hotmartUrl}
                target="_blank"
                className="rounded-xl bg-[var(--color-amarelo)] px-6 py-4 font-semibold text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-bg)] w-3/4 flex justify-center text-xl transition-colors duration-150 ease-in-out">
                QUERO TER ACESSO AGORA!
              </a>
            </div>
            <p className="text-xs font-extralight px-2 text-[var(--color-text)]">
              Garantia de 7 dias • Acesso imediato
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm grid place-content-center">
              <span className="text-sm text-gray-400 rounded-2xl">
                <Image
                  className="rounded-2xl shadow-2xl drop-shadow-[0_0_20px_rgba(106,255,185,0.1)]"
                  src={GreatImage}
                  alt="The Smart Sleep"
                />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
