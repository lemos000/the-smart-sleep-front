// components/FaqAccordion.tsx
"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export default function AcordionComponent() {
  return (
    <section className="bg-[var(--color-bg)] py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] text-center">
          Dúvidas que podem ser as suas
        </h2>
        <p className="mt-3 text-center text-[var(--color-text)]/80">
          Abra cada item para ver como o método lida com situações reais do dia a dia.
        </p>

        <div className="mt-10 rounded-2xl border border-[var(--color-secondary)]/20 bg-white/70 p-4 backdrop-blur-sm">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1" className="border-b border-black/5">
              <AccordionTrigger className="text-left text-[var(--color-primary)]">
                Preciso acordar o bebê em horários fixos?
              </AccordionTrigger>
              <AccordionContent className="text-[var(--color-text)]/90">
                Não usamos relógio rígido. O curso ensina a combinar janelas de
                sono com os <em>sinais de cansaço</em> do bebê. Isso dá
                previsibilidade sem engessar a rotina e evita supercansaço.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-black/5">
              <AccordionTrigger className="text-left text-[var(--color-primary)]">
                E se meu bebê luta contra o berço quando está doente?
              </AccordionTrigger>
              <AccordionContent className="text-[var(--color-text)]/90">
                Em períodos de febre, resfriado ou pós-vacina, priorizamos
                conforto. Você recebe um protocolo “modo cuidado” para manter o
                vínculo e, ao melhorar, retomar o plano sem perder progresso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-black/5">
              <AccordionTrigger className="text-left text-[var(--color-primary)]">
                Como faço a transição do colo para o berço sem lágrimas?
              </AccordionTrigger>
              <AccordionContent className="text-[var(--color-text)]/90">
                Você vai usar a técnica de <strong>aproximação progressiva</strong>:
                primeiro transferimos parte do ritual para o berço (toque, voz,
                cheirinho), depois reduzimos a ajuda em etapas curtas — sempre
                com acolhimento e presença.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-black/5">
              <AccordionTrigger className="text-left text-[var(--color-primary)]">
                O curso serve para quem trabalha em turnos?
              </AccordionTrigger>
              <AccordionContent className="text-[var(--color-text)]/90">
                Sim. Há um módulo com <strong>rotina flexível</strong> para
                famílias em escala, com blocos de cuidado que se encaixam nos
                horários variáveis sem bagunçar o sono do bebê.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-black/5">
              <AccordionTrigger className="text-left text-[var(--color-primary)]">
                Como reduzo cochilos de “micro soneca” no carrinho ou carro?
              </AccordionTrigger>
              <AccordionContent className="text-[var(--color-text)]/90">
                Você aprende a “proteger a pressão de sono”: controlar luz,
                estímulos e intervalos para que o cochilo principal aconteça no
                berço — e não durante deslocamentos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-b border-black/5">
              <AccordionTrigger className="text-left text-[var(--color-primary)]">
                E quando os dentinhos estão nascendo?
              </AccordionTrigger>
              <AccordionContent className="text-[var(--color-text)]/90">
                Usamos uma abordagem de <strong>ajuste temporal</strong>:
                aumentamos acolhimento, encurtamos o ritual e aplicamos técnicas
                de alívio. Após a fase, retomamos o plano no ponto em que
                paramos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-b border-black/5">
              <AccordionTrigger className="text-left text-[var(--color-primary)]">
                Como evitar que um despertar vire “festinha” de madrugada?
              </AccordionTrigger>
              <AccordionContent className="text-[var(--color-text)]/90">
                Você vai aplicar a <em>condução silenciosa</em>: quarto
                previsível, interação mínima, sem luz forte e sem brincadeiras.
                O bebê entende que a noite é para dormir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left text-[var(--color-primary)]">
                Posso usar ruído branco? E até quando?
              </AccordionTrigger>
              <AccordionContent className="text-[var(--color-text)]/90">
                Pode — quando usado corretamente (volume baixo, fonte distante,
                desligar ao final do ritual). Depois da adaptação, o curso traz
                um passo-a-passo para <strong>desmame do ruído</strong>.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
