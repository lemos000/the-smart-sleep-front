import React from "react";

const modules = [
  { num: 1, title: "Módulo 1", desc: "Como ensinar seu bebê a aceitar o berço em apenas 7 dias." },
  { num: 2, title: "Módulo 2", desc: "Passo a passo para desfazer qualquer associação de sono em 7 dias." },
  { num: 3, title: "Módulo 3", desc: "O jeito mais fácil para seu bebê dormir sozinho sem traumas." },
  { num: 4, title: "Módulo 4", desc: "Como ensinar seu bebê a dormir diretamente no berço, mesmo que nunca tenha dormido lá antes." },
  { num: 5, title: "Módulo 5", desc: "Uma maneira infalível de ensinar seu bebê a dormir em qualquer lugar." },
];

export default function CurriculumModules() {
  return (
    <div className="mt-6 md:px-96 mb-24 px-10 lg:px-96 flex flex-col gap-10 ">
      {modules.map((m, i) => {
        const isRight = i % 2 === 1; // em lg: números alternam direita/esquerda
        return (
          <div
            key={m.num}
            className={[
              "relative rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/10",
              "transition hover:rotate-0 hover:scale-[1.01]",
              // tilt leve alternado
              i % 2 === 0 ? "-rotate-1" : "rotate-1",
              // espaço lateral para o círculo externo em telas grandes
              isRight ? "lg:pr-20" : "lg:pl-20",
            ].join(" ")}
          >
            {/* Círculo alternado só em telas grandes (fora do fluxo do card) */}
            <span
              className={[
                "hidden lg:flex absolute top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center",
                "rounded-full bg-[var(--color-accent)] text-black font-bold shadow-md",
                isRight ? "right-[-1.5rem]" : "left-[-1.5rem]",
              ].join(" ")}
            >
              {m.num}
            </span>

            {/* Cabeçalho do card (mobile mostra o número dentro) */}
            <div className="flex items-center gap-3">
              <span className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-black font-bold">
                {m.num}
              </span>
              <h3 className="font-semibold text-[var(--color-primary)]">{m.title}</h3>
            </div>

            <p className="mt-2 text-sm text-[var(--color-text)]/80 leading-relaxed">
              {m.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}
