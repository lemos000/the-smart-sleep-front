// components/HighlightsWithCarousel.tsx
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Container from "./Container";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const checkoutUrl = "https://nexusrade.mycartpanda.com/checkout/169191668:1";

const slides = [
  {
    title: "Método Gentil",
    desc: "Chega de noites marcadas pelo choro. O curso apresenta um método carinhoso e respeitoso, que valoriza o vínculo entre pais e bebê e mostra que é possível ensinar a dormir sem sofrimento. Cada passo é construído para que o bebê se sinta seguro, acolhido e confortável, eliminando de vez a necessidade de treinos rígidos ou dolorosos. Ao invés de impor, você aprende a conduzir com afeto e paciência, fortalecendo o desenvolvimento emocional e tornando o sono um momento tranquilo para toda a família.",
  },
  {
    title: "Plano de 7 Dias",
    desc: "Em apenas uma semana você terá um roteiro prático que guia cada detalhe da rotina do bebê. Não é um conjunto de dicas soltas, mas sim um passo a passo estruturado, pensado para reduzir dependências de forma gradual e eficaz. Do ajuste do ambiente às técnicas de transição para o berço, cada dia traz pequenas conquistas que somadas transformam o sono do bebê em algo previsível e sereno. É como ter um mapa claro que leva você de noites turbulentas a noites de descanso reparador.",
  },
  {
    title: "Resultados Reais",
    desc: "Famílias que seguiram este método relatam mudanças perceptíveis já nos primeiros dias. Os despertares noturnos diminuem, as sonecas se tornam mais longas e o bebê passa a adormecer com mais facilidade. Esses resultados não ficam só no bebê: os pais também recuperam energia, disposição e qualidade de vida. A experiência mostra que, quando se aplica um plano coerente e gentil, as noites mal dormidas deixam de ser regra e dão lugar a uma rotina leve e prazerosa para todos.",
  },
  {
    title: "Sem Acessórios Caros",
    desc: "Esqueça a ideia de que para ensinar seu bebê a dormir você precisa investir em aparelhos caros, berços especiais ou métodos mirabolantes. Este curso mostra que é possível criar o ambiente ideal de sono apenas com o que você já tem em casa. O foco está em ajustes simples, mudanças de hábito e estratégias de acolhimento que não pesam no bolso. Ao remover a necessidade de equipamentos desnecessários, você aprende a confiar mais em si mesmo e no processo natural do desenvolvimento do seu bebê.",
  },
];

/** Implementação real (client-only) */
function HighlightsWithCarouselImpl() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(slides.length);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
    api.reInit(); // recálculo após fontes/layout
  }, [api]);

  return (
    <section className="w-full overflow-x-clip py-12 sm:py-14 md:py-20 bg-[linear-gradient(354deg,var(--color-primary)_0%,var(--color-primary)_30%,var(--color-bg)_30%,var(--color-bg)_100%)]">
      <Container>
        <div className="grid items-center gap-8 md:gap-14 md:grid-cols-2 w-full">
          {/* Texto + CTA */}
          <div className="text-center md:text-left min-w-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[color:var(--color-primary)]">
              Destaques do curso
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-[color:var(--color-text)] leading-relaxed opacity-90">
              Nossos conteúdos foram pensados para transformar noites caóticas
              em uma rotina previsível, gentil e eficaz. Conheça os pilares do
              método e veja como começar hoje mesmo.
            </p>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 sm:mt-8 flex sm:inline-flex justify-center
                         rounded-xl bg-[color:var(--color-primary)]
                         px-5 sm:px-6 py-3 sm:py-3.5 font-semibold text-white
                         hover:text-[color:var(--color-text)] hover:bg-[color:var(--color-accent)]
                         transition-colors w-full sm:w-auto text-base sm:text-lg"
            >
              Quero ter acesso agora
            </a>
          </div>

          {/* Carrossel + Dots */}
          <div className="min-w-0 w-full max-w-md md:max-w-none mx-auto md:mx-0">
            <Carousel
              setApi={setApi}
              opts={{ align: "start" }}
              aria-label="Destaques do curso"
              className="w-full"
            >
              {/* Usa gap responsivo no track sem forçar overflow */}
              <CarouselContent className="-ml-3 sm:-ml-4">
                {slides.map((s, i) => (
                  <CarouselItem
                    key={i}
                    className="basis-full pl-3 sm:pl-4"
                  >
                    <Card className="h-full border-0 rounded-3xl bg-white/90 ring-1 ring-black/5 shadow-sm">
                      <CardContent className="h-full p-5 sm:p-6 md:p-8 flex flex-col">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[color:var(--color-primary)]">
                          {s.title}
                        </h3>
                        <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-[color:var(--color-text)] leading-relaxed opacity-90">
                          {s.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious
                className="hidden sm:flex text-black"
                aria-label="Slide anterior"
              />
              <CarouselNext
                className="hidden sm:flex text-black"
                aria-label="Próximo slide"
              />
            </Carousel>

            {/* Dots */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {Array.from({ length: count }).map((_, i) => {
                const active = i === current;
                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ir para o slide ${i + 1}`}
                    onClick={() => api?.scrollTo(i)}
                    className={[
                      "h-2 w-2 rounded-full transition",
                      active
                        ? "scale-125 bg-[color:var(--color-primary)]"
                        : "bg-black/20 hover:bg-black/40",
                    ].join(" ")}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Skeleton para o SSR (evita jump e *zero* hidratação nesse bloco) */
function HighlightsSkeleton() {
  return (
    <section className="w-full overflow-x-clip py-12 sm:py-14 md:py-20 bg-[linear-gradient(354deg,var(--color-primary)_0%,var(--color-primary)_30%,var(--color-bg)_30%,var(--color-bg)_100%)]">
      <Container>
        <div className="grid items-center gap-8 md:gap-14 md:grid-cols-2">
          <div className="min-w-0">
            <div className="h-8 w-2/3 sm:w-1/2 rounded bg-white/20" />
            <div className="mt-4 h-16 w-full max-w-prose rounded bg-white/10" />
            <div className="mt-6 h-12 w-full sm:w-64 rounded-xl bg-white/20" />
          </div>
          <div className="min-w-0">
            <div className="h-[260px] w-full max-w-md mx-auto rounded-3xl bg-white/40 ring-1 ring-black/5" />
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Exporta com SSR desativado e skeleton no lugar */
export default dynamic(() => Promise.resolve(HighlightsWithCarouselImpl), {
  ssr: false,
  loading: HighlightsSkeleton,
});
