// components/AboutCourse.tsx
import Container from "./Container";
import Image from "next/image";
import BabySleep from "@/app/assets/sleepingbaby.png";
import { NavigationMenu } from "@/components/ui/navigation-menu";

export default function AboutCourse() {
  return (
    <section
      id="sobre"
      className="bg-[var(--color-bg)] py-12 sm:py-14 md:py-16 overflow-x-hidden"
    >
      <Container>
        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-10">
          {/* Imagem */}
          <div className="relative">
            <div className="relative isolate mx-auto max-w-[520px]">
              {/* bolhas (blobs) */}
              <span className="pointer-events-none absolute -z-10 -top-8 -left-10 h-40 w-40 rounded-full bg-[color:var(--color-amarelo)] opacity-40 blur-2xl" />
              <span className="pointer-events-none absolute -z-10 -bottom-12 -right-8 h-56 w-56 rounded-full bg-[color:var(--color-secondary)] opacity-30 blur-2xl" />

              {/* grade pontilhada, recortada pelo raio do card */}
              <span
                className="pointer-events-none absolute -z-10 inset-0 rounded-2xl
                  [background-image:radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)]
                  [background-size:16px_16px]"
              />

              {/* anel suave (conic + máscara radial) */}
              <span
                className="pointer-events-none absolute -z-10 inset-0 rounded-2xl opacity-35
                    [mask-image:radial-gradient(closest-side,white,transparent)]
                    [background:conic-gradient(from_180deg_at_50%_50%,var(--color-accent)_0deg,transparent_320deg)]"
              />

              {/* sua imagem */}
              <Image
                src={BabySleep}
                alt="Curso Sono Infantil"
                className="relative rounded-2xl"
                placeholder="blur"
                sizes="(min-width: 768px) 520px, 90vw"
                priority={false}
              />
            </div>
          </div>

          {/* Texto */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
              Sobre o Curso
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[var(--color-text)]/90 leading-relaxed">
              O <strong>“COMO FAZER O SEU BEBÊ DORMIR”</strong> é um curso
              online pensado para pais e mães que desejam devolver tranquilidade
              ao sono do bebê e da família. Ele reúne orientações práticas,
              passo a passo, para ajudar seu filho a adormecer com mais calma e
              a permanecer no berço durante a noite.
            </p>

            <p className="mt-4 text-sm sm:text-base text-[var(--color-text)]/80 leading-relaxed">
              Diferente de métodos que dependem de deixar o bebê chorando, este
              programa é <strong>gentil e acolhedor</strong>. Você vai aprender
              a ajustar o ambiente, organizar a rotina, aplicar o plano de 7
              dias e lidar com desafios comuns, como regressões, despertares
              noturnos ou associações de sono (colo, peito, ninar).
            </p>

            <p className="mt-4 text-sm sm:text-base text-[var(--color-text)]/80 leading-relaxed">
              Com <strong>linguagem simples e acessível</strong>, o curso foi
              estruturado para caber na rotina de qualquer família, sem exigir
              acessórios caros ou técnicas complicadas. O objetivo é que, em
              pouco tempo, você sinta diferença: mais descanso, mais energia e
              noites muito mais leves.
            </p>

            <ul className="mt-6 space-y-2 text-sm sm:text-base text-[var(--color-text)]/80 list-disc pl-5 inline-block text-left">
              <li>Acesso 100% online, direto do celular ou computador</li>
              <li>Plano prático de 7 dias para resultados rápidos</li>
              <li>Garantia de 7 dias: risco zero para você</li>
              <li>Materiais extras: tabelas, checklists e guias de apoio</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
