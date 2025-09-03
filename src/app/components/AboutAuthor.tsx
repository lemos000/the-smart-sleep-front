// components/AboutCourse.tsx
import Container from "./Container";
import Image from "next/image";
import BabySleep from "@/app/assets/sleepingbaby.png"; // troque pela sua imagem
import TrustBadges from "./TrustBadges";

export default function AboutCourse() {
  return (
    <section id="sobre" className="py-16 bg-[var(--color-bg)]">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Imagem ilustrativa */}
          <div className="relative">
            <div className="relative inline-block">
              {/* fundo decorativo */}
              <div className="absolute w-3/4 h-full rounded-[50%] -top-16 bg-[var(--color-primary)] " />

              <Image
                src={BabySleep}
                alt="Curso Sono Infantil"
                className="relative z-10 rounded-4xl"
              />
            </div>
          </div>

          {/* Conteúdo textual */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
              Sobre o Curso
            </h2>
            <p className="mt-4 text-[var(--color-text)]/90 leading-relaxed">
              O <strong>“COMO FAZER O SEU BEBÊ DORMIR”</strong> é um curso
              online pensado para pais e mães que desejam devolver tranquilidade
              ao sono do bebê e da família. Ele reúne orientações práticas,
              passo a passo, para ajudar seu filho a adormecer com mais calma e
              a permanecer no berço durante a noite.
            </p>
            <p className="mt-4 text-[var(--color-text)]/80 leading-relaxed">
              Diferente de métodos que dependem de deixar o bebê chorando, este
              programa é <strong>gentil e acolhedor</strong>. Você vai aprender
              a ajustar o ambiente, organizar a rotina, aplicar o plano de 7
              dias e lidar com desafios comuns, como regressões, despertares
              noturnos ou associações de sono (colo, peito, ninar).
            </p>
            <p className="mt-4 text-[var(--color-text)]/80 leading-relaxed">
              Com <strong>linguagem simples e acessível</strong>, o curso foi
              estruturado para caber na rotina de qualquer família, sem exigir
              acessórios caros ou técnicas complicadas. O objetivo é que, em
              pouco tempo, você sinta diferença: mais descanso, mais energia e
              noites muito mais leves.
            </p>
            <ul className="mt-6 space-y-2 text-[var(--color-text)]/80 list-disc pl-5">
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
