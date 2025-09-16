import React from "react";

const modules = [
  {
    num: 1,
    title: "Módulo 1",
    desc: "Como ensinar seu bebê a aceitar o berço em apenas 7 dias.",
  },
  {
    num: 2,
    title: "Módulo 2",
    desc: "Passo a passo para desfazer qualquer associação de sono em 7 dias.",
  },
  {
    num: 3,
    title: "Módulo 3",
    desc: "O jeito mais fácil para seu bebê dormir sozinho sem traumas.",
  },
  {
    num: 4,
    title: "Módulo 4",
    desc: "Como ensinar seu bebê a dormir diretamente no berço, mesmo que nunca tenha dormido lá antes.",
  },
  {
    num: 5,
    title: "Módulo 5",
    desc: "Uma maneira infalível de ensinar seu bebê a dormir em qualquer lugar.",
  },
];

export default function CurriculumModules() {
  return (
    <ul className="mt-6 mb-16 px-4 sm:px-6 max-w-3xl md:max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8">
      {modules.map((m, i) => {
        const isRight = i % 2 === 1;
        return (
          <li
            key={m.num}
            className={[
              "relative rounded-2xl bg-white/90 p-4 sm:p-5 md:p-6 shadow-lg ring-1 ring-black/10",
              "transition will-change-transform hover:scale-[1.01]",
              // tilt só em telas maiores pra não atrapalhar leitura no mobile
              isRight ? "lg:rotate-1" : "lg:-rotate-1",
              isRight ? "lg:pr-20" : "lg:pl-20",
            ].join(" ")}
          >
            {/* círculo externo (lg+) */}
            <span
              className={[
                "hidden lg:flex absolute top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center",
                "rounded-full bg-[var(--color-accent)] text-black font-bold shadow-md",
                isRight ? "right-[-1.5rem]" : "left-[-1.5rem]",
              ].join(" ")}
              aria-hidden="true"
            >
              {m.num}
            </span>

            {/* header do card (com número no mobile) */}
            <div className="flex items-center gap-3">
              <span className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-black font-bold">
                {m.num}
              </span>
              <h3 className="text-[var(--color-primary)] font-semibold text-base sm:text-lg">
                {m.title}
              </h3>
            </div>

            <p className="mt-2 text-[var(--color-text)]/80 leading-relaxed text-sm sm:text-base">
              {m.desc}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
