"use client";
import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,

} from "@/components/ui/dialog";

/**
 * QuizModal — compacto, centrado e acessível (shadcn Dialog)
 * - Sempre modal no centro (mobile e desktop)
 * - Fontes menores
 * - Padding extra inferior para a barra de progresso não encostar
 * - Altura limitada com rolagem interna
 */

type Question = {
  id: number;
  title: string;
  options: string[]; // sempre incluir "Não sei"
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Qual é o maior desafio hoje para o bebê dormir no berço?",
    options: ["Só dorme no colo", "Acorda ao colocar no berço", "Não sei"],
  },
  {
    id: 2,
    title: "Seu bebê costuma adormecer de que forma?",
    options: ["Mamando/peito", "Ninar no colo/rede", "Não sei"],
  },
  {
    id: 3,
    title: "Qual seu objetivo principal com o curso?",
    options: [
      "Autonomia para dormir no berço",
      "Reduzir despertares noturnos",
      "Não sei",
    ],
  },
  {
    id: 4,
    title: "Qual a sua maior preocupação no processo?",
    options: [
      "Evitar choro/trauma",
      "Seguir um passo a passo simples",
      "Não sei",
    ],
  },
];

export default function QuizModal() {
  const [open, setOpen] = useState(true);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);

  // Evita reabrir se já respondeu (opcional)
  useEffect(() => {
    const done =
      typeof window !== "undefined" &&
      localStorage.getItem("quiz_done") === "1";
    if (done) setOpen(false);
  }, []);

  // Fecha com ESC (o Dialog já cuida), mas mantemos para compatibilidade
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const current = useMemo(() => QUESTIONS[index], [index]);

  function selectOption(opt: string) {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = opt;
      return next;
    });

    if (index < QUESTIONS.length - 1) {
      setIndex((i) => i + 1);
    } else {
      setFinished(true);
      setTimeout(() => {
        setOpen(false);
        try {
          localStorage.setItem("quiz_done", "1");
        } catch {}
      }, 1000);
    }
  }



  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        // shadcn/Dialog já provê overlay, foco preso e scroll lock
        className="w-full sm:max-w-md max-h-[80vh] overflow-y-auto rounded-2xl border border-black/5
                   bg-[var(--color-bg)] text-[var(--color-text)] p-4 sm:p-6 pb-6 sm:pb-8"
      >
        {!finished ? (
          <>
          <DialogTitle>
            Quiz
          </DialogTitle>
            {/* header compacto e sticky para manter o fechar visível */}
            <div className="sticky top-0 -mx-4 sm:mx-0 px-4 sm:px-0 py-2.5 bg-[var(--color-bg)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-bg)]/80 border-b border-black/5 flex items-center justify-between">
              <p className="text-xs sm:text-sm text-gray-700">
                Pergunta {index + 1} de {QUESTIONS.length}
              </p>
            </div>

            <DialogTitle asChild>
              <h3
                id="quiz-title"
                className="mt-3 text-lg sm:text-2xl font-bold leading-snug text-[var(--color-secondary)]"
              >
                {current.title}
              </h3>
            </DialogTitle>

            <div className="mt-5 grid gap-2.5">
              {current.options.map((opt, i) => (
                <button
                  key={opt}
                  onClick={() => selectOption(opt)}
                  className="w-full rounded-xl bg-[var(--color-amarelo)] text-[var(--color-text)] ring-1 ring-black/5 hover:brightness-95 active:scale-[.99] transition px-4 py-3 text-left text-sm"
                  autoFocus={i === 0}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* barra de progresso com respiro embaixo */}
            <div className="mt-5 mb-2 h-2 w-full rounded-full bg-black/5 overflow-hidden">
              <div
                className="h-full bg-[var(--color-secondary)] transition-all duration-300"
                style={{ width: `${((index + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-center py-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Hmm...
              </h3>
              <p className="mt-2 text-gray-700">
                Baseado nas suas respostas acreditamos que este curso seja
                EXATAMENTE PARA VOCÊ!
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

type Mode = "quiz" | "all" | "none";

export function StorageReset({ mode = "quiz" as Mode }) {
  useEffect(() => {
    try {
      if (mode === "all") {
        localStorage.clear();
      } else if (mode === "quiz") {
        localStorage.removeItem("quiz_done");
        localStorage.removeItem("quiz_done_v2");
      }
    } catch {}
  }, [mode]);

  return null;
}
