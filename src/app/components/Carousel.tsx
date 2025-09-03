// components/HighlightsWithCarousel.tsx
"use client"

import Container from "./Container"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const checkoutUrl = "https://nexusrade.mycartpanda.com/checkout/169191668:1"

const slides = [
  {
    title: "Método Gentil",
    desc:
      "Chega de noites marcadas pelo choro. O curso apresenta um método carinhoso e respeitoso, que valoriza o vínculo entre pais e bebê e mostra que é possível ensinar a dormir sem sofrimento. Cada passo é construído para que o bebê se sinta seguro, acolhido e confortável, eliminando de vez a necessidade de treinos rígidos ou dolorosos. Ao invés de impor, você aprende a conduzir com afeto e paciência, fortalecendo o desenvolvimento emocional e tornando o sono um momento tranquilo para toda a família.",
  },
  {
    title: "Plano de 7 Dias",
    desc:
      "Em apenas uma semana você terá um roteiro prático que guia cada detalhe da rotina do bebê. Não é um conjunto de dicas soltas, mas sim um passo a passo estruturado, pensado para reduzir dependências de forma gradual e eficaz. Do ajuste do ambiente às técnicas de transição para o berço, cada dia traz pequenas conquistas que somadas transformam o sono do bebê em algo previsível e sereno. É como ter um mapa claro que leva você de noites turbulentas a noites de descanso reparador.",
  },
  {
    title: "Resultados Reais",
    desc:
      "Famílias que seguiram este método relatam mudanças perceptíveis já nos primeiros dias. Os despertares noturnos diminuem, as sonecas se tornam mais longas e o bebê passa a adormecer com mais facilidade. Esses resultados não ficam só no bebê: os pais também recuperam energia, disposição e qualidade de vida. A experiência mostra que, quando se aplica um plano coerente e gentil, as noites mal dormidas deixam de ser regra e dão lugar a uma rotina leve e prazerosa para todos.",
  },
  {
    title: "Sem Acessórios Caros",
    desc:
      "Esqueça a ideia de que para ensinar seu bebê a dormir você precisa investir em aparelhos caros, berços especiais ou métodos mirabolantes. Este curso mostra que é possível criar o ambiente ideal de sono apenas com o que você já tem em casa. O foco está em ajustes simples, mudanças de hábito e estratégias de acolhimento que não pesam no bolso. Ao remover a necessidade de equipamentos desnecessários, você aprende a confiar mais em si mesmo e no processo natural do desenvolvimento do seu bebê.",
  },
];

export default function HighlightsWithCarousel() {
  return (
    <section className="py-20 bg-[linear-gradient(354deg,var(--color-primary)_0%,var(--color-primary)_30%,var(--color-bg)_30%,var(--color-bg)_100%)]">
      <Container>
        <div className="grid items-center gap-20 md:grid-cols-2">
          {/* Lado esquerdo: texto + CTA */}
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-[var(--color-primary)]">
              Destaques do curso
            </h2>
            <p className="mt-4 text-[var(--color-text)]/85 leading-relaxed">
              Nossos conteúdos foram pensados para transformar noites caóticas
              em uma rotina previsível, gentil e eficaz. Conheça os pilares do
              método e veja como começar hoje mesmo.
            </p>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-white
                         hover:text-[var(--color-text)] hover:bg-[var(--color-accent)] transition-colors"
            >
              Quero ter acesso agora
            </a>
          </div>

          {/* Lado direito: carrossel */}
          <div className="w-full">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={90}
              slidesPerView={1}
              loop
              centeredSlides
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
            >
              {slides.map((s, i) => (
                <SwiperSlide key={i} className="flex justify-center">
                  <div className="w-full rounded-3xl h-full bg-white p-10 md:p-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
                      {s.title}
                    </h3>
                    <p className="mt-4 md:mt-6 text-base md:text-lg text-[var(--color-text)]/85 leading-relaxed">
                      {s.desc}
                    </p>
                    <div className="mt-8 flex justify-center">
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>

    
    </section>
  )
}
