// components/OfferBlock.tsx
import Container from "./Container"
import { CreditCard, QrCode, BadgeCheck } from "lucide-react"

const checkoutUrl = "https://nexusrade.mycartpanda.com/checkout/169191668:1"

export default function OfferBlock() {
  return (
    <section className="py-16 bg-[var(--color-primary)]/5">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Lado esquerdo: copy */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-bg)]">
              APROVEITE!
            </h2>

            <p className="mt-6 text-lg md:text-xl leading-relaxed text-[var(--color-bg)]/85">
              Aproveite o valor promocional de pré-venda do treinamento e ganhe{" "}
              <span className="px-2 py-1 rounded-md bg-[var(--color-accent)] text-[var(--color-primary)] font-bold">
                295 reais
              </span>{" "}
              <span className="px-2 py-1 rounded-md bg-[var(--color-accent)] text-[var(--color-primary)] font-bold">
                de desconto
              </span>{" "}
              comprando <strong>AGORA!</strong>
            </p>

            <p className="mt-6 text-[var(--color-bg)]/75 leading-relaxed">
              Esse valor é exclusivo para quem adquirir o curso{" "}
              <strong>DO COLO PARA O BERÇO EM 7 DIAS</strong> agora.
              A qualquer momento podemos tirar essa promoção do ar, por isso,
              garanta sua vaga agora mesmo!
            </p>
          </div>

          {/* Lado direito: card de preço */}
          <div className="mx-auto w-full">
            <div className="relative rounded-3xl bg-[var(--color-secondary)] text-[var(--color-bg)] p-8 md:p-10 shadow-2xl ring-1 ring-white/10">
              <p className="text-center text-sm md:text-base font-extrabold tracking-widest">
                VALOR DE PRÉ-VENDA
              </p>

              <p className="mt-3 text-center text-[var(--color-bg)]/80">
                de <span className="line-through">R$ 364,00</span> por apenas
              </p>

              <p className="mt-2 text-center text-5xl md:text-6xl font-extrabold">
                R$ 69,00
              </p>

              <p className="mt-2 text-center text-xs md:text-sm text-[var(--color-bg)]/80">
                OU 9X DE R$ 9,23
              </p>

              <div className="mt-8 flex justify-center">
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-6 py-4 text-[var(--color-primary)] font-extrabold
                             hover:bg-[var(--color-bg)] hover:text-[var(--color-primary)] transition-colors"
                >
                  QUERO COMPRAR AGORA!
                </a>
              </div>

              {/* Selos/Meios de pagamento */}
              <div className="mt-6 flex items-center justify-center gap-6 text-[var(--color-bg)]/90">
                <span className="inline-flex items-center gap-2 text-sm">
                  <CreditCard className="h-5 w-5" /> Boleto
                </span>
                <span className="inline-flex items-center gap-2 text-sm">
                  <QrCode className="h-5 w-5" /> Pix
                </span>
                <span className="inline-flex items-center gap-2 text-sm">
                  <BadgeCheck className="h-5 w-5" /> Hotmart
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
