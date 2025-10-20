// app/desconto/page.tsx
import Image from "next/image";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroDiscountImg from "@/app/assets/logo.jpg"; // usa o mesmo ou troca por outro destaque

export default function DescontoPage() {
  const checkoutUrl = "https://nexusrade.mycartpanda.com/checkout/200022810:1";

  return (
    <>
      <Header />

      <section className="relative overflow-hidden bg-[var(--color-bg)]">
        <Container>
          <div className="py-12 sm:py-16 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Texto principal */}
            <div className="text-center md:text-left">
              <p className="uppercase font-medium tracking-widest text-xs sm:text-sm text-[var(--color-primary)]">
                Oferta Especial — Somente Hoje!
              </p>

              <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-neutral-400 leading-tight">
                🎁 Não perca <br /> esse{" "}
                <span className="text-[var(--color-secondary)]">
                  desconto imperdível!
                </span>
              </h1>

              <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-900 max-w-md mx-auto md:mx-0">
                Aproveite o preço promocional e garanta acesso completo ao curso
                “The Smart Sleep” com todas as aulas, bônus e suporte exclusivo.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto rounded-xl bg-[var(--color-amarelo)] px-6 sm:px-8 py-3 sm:py-4 font-semibold text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-bg)] text-lg sm:text-xl transition-colors duration-150 ease-in-out shadow-lg"
                >
                  QUERO APROVEITAR AGORA!
                </a>
              </div>

              <p className="mt-3 text-[10px] sm:text-xs font-extralight text-[var(--color-primary)] text-center md:text-left">
                ⚡ Oferta válida apenas hoje • Acesso imediato • Garantia de 7
                dias
              </p>
            </div>

            {/* Imagem / destaque visual */}
            <div className="relative mt-8 md:mt-0 flex justify-center">
              <div className="w-full max-w-sm md:max-w-md rounded-2xl grid place-content-center p-3">
                <Image
                  src={HeroDiscountImg}
                  alt="Imagem de desconto"
                  className="rounded-2xl shadow-xl drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                  placeholder="blur"
                  sizes="(min-width: 768px) 480px, 90vw"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
