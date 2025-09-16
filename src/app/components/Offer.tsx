// components/OfferBlock.tsx
import Container from "./Container"
import { CreditCard, QrCode, BadgeCheck } from "lucide-react"

const checkoutUrl = "https://nexusrade.mycartpanda.com/checkout/169191668:1"

export default function OfferBlock() {
  return (
    <section className="bg-[var(--color-primary)]/5 py-12 sm:py-14 md:py-16">
      <Container>
        <div className="grid items-start gap-8 md:gap-10 lg:grid-cols-2">
          {/* Lado esquerdo: copy */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-)]">
              APROVEITE!
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-xl leading-relaxed text-[var(--color-text)]/85">
              Aproveite o valor promocional de pré-venda do treinamento e ganhe{" "}
              <span className="px-2 py-1 rounded-md bg-[var(--color-accent)] text-[var(--color-primary)] font-bold">
                295 reais
              </span>{" "}
              <span>
                de desconto
              </span>{" "}
              comprando <strong>AGORA!</strong>
            </p>

            <p className="mt-4 sm:mt-6 text-[var(--color-text)]/80 text-sm sm:text-base leading-relaxed">
              Esse valor é exclusivo para quem adquirir o curso{" "}
              <strong>DO COLO PARA O BERÇO EM 7 DIAS</strong> agora.
              A qualquer momento podemos tirar essa promoção do ar, por isso,
              garanta sua vaga agora mesmo!
            </p>
          </div>

          {/* Lado direito: card de preço */}
          <div className="mx-auto w-full max-w-md md:max-w-lg lg:max-w-none">
            <div className="relative rounded-3xl bg-[var(--color-secondary)] text-[var(--color-bg)] p-6 sm:p-8 md:p-10 shadow-2xl ring-1 ring-white/10">
              <p className="text-center text-xs sm:text-sm md:text-base font-extrabold tracking-widest">
                VALOR DE PRÉ-VENDA
              </p>

              <p className="mt-2 sm:mt-3 text-center text-[var(--color-bg)]/80 text-sm sm:text-base">
                de <span className="line-through">R$ 364,00</span> por apenas
              </p>

              <p className="mt-2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold">
                R$ 60,57
              </p>

              <p className="mt-1 sm:mt-2 text-center text-[10px] sm:text-xs md:text-sm text-[var(--color-bg)]/80">
                OU 9X DE R$ 9,23
              </p>

              <div className="mt-6 sm:mt-8 flex justify-center">
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex justify-center rounded-xl bg-[var(--color-accent)]
                             px-5 sm:px-6 py-3 sm:py-4 text-[var(--color-primary)] font-extrabold
                             hover:bg-[var(--color-bg)] hover:text-[var(--color-primary)] transition-colors text-base sm:text-lg"
                >
                  QUERO COMPRAR AGORA!
                </a>
              </div>

              {/* Selos/Meios de pagamento */}
              <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[var(--color-bg)]/90">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm">
                  <CreditCard className="h-4 w-4 sm:h-5 sm:w-5" /> Boleto
                </span>
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm">
                  <QrCode className="h-4 w-4 sm:h-5 sm:w-5" /> Pix
                </span>
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm">
                  <BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5" /> Cartpanda
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
