// components/Hero.tsx
import Image from "next/image";
import Container from "./Container";
import GreatImage from "@/app/assets/logo.jpg";

export default function Hero() {
  const hotmartUrl = "https://nexusrade.mycartpanda.com/checkout/169191668:1";

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(164deg,var(--color-primary)_0%,var(--color-primary)_50%,var(--color-bg)_50%,var(--color-bg)_100%)]">
      <Container>
        <div className="py-8 sm:py-12 md:py-16 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Coluna de texto */}
          <div className="text-center md:text-left">
            <p className="uppercase font-medium tracking-widest text-xs sm:text-sm text-[var(--color-accent)]">
              Programa online
            </p>

            <h1 className="mt-2 sm:mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--color-bg)]">
              COMO FAZER O SEU{" "}
              <span className="block text-4xl sm:text-6xl md:text-6xl text-[var(--color-bg)]">
                BEBÊ DORMIR
              </span>
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-100">
              O jeito fácil de ensinar seu bebê a dormir no berço com
              tranquilidade, sem traumas.
            </p>

            <div className="py-3 sm:py-4 text-2xl sm:text-3xl font-light text-[var(--color-accent)]">
              12x de
              <span className="text-3xl sm:text-4xl font-bold"> R$ 6,29</span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 justify-center md:justify-start">
              <a
                href={hotmartUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-xl bg-[var(--color-amarelo)] px-5 sm:px-6 py-3 sm:py-4 font-semibold text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-bg)] text-lg sm:text-xl transition-colors duration-150 ease-in-out"
              >
                QUERO TER ACESSO AGORA!
              </a>
            </div>

            <p className="mt-2 text-[10px] sm:text-xs font-extralight px-2 text-[var(--color-text)] text-center md:text-left">
              Garantia de 7 dias • Acesso imediato
            </p>
          </div>

          {/* Coluna da imagem */}
          <div className="relative mt-6 md:mt-0">
            <div className=" w-full max-w-sm md:max-w-none mx-auto rounded-2xl grid place-content-center p-2 sm:p-3">
              <Image
                className="rounded-2xl shadow-md drop-shadow-[0_0_20px_rgba(106,255,185,0.1)]"
                src={GreatImage}
                alt="The Smart Sleep"
                placeholder="blur"
                sizes="(min-width: 768px) 480px, 90vw"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
