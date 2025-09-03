"use client"
import { useEffect, useMemo, useState } from "react"

type Question = {
  id: number
  title: string
  options: string[] // sempre incluir "Não sei"
}

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
    options: ["Autonomia para dormir no berço", "Reduzir despertares noturnos", "Não sei"],
  },
  {
    id: 4,
    title: "Qual a sua maior preocupação no processo?",
    options: ["Evitar choro/trauma", "Seguir um passo a passo simples", "Não sei"],
  },
]

export default function QuizModal() {
  const [open, setOpen] = useState(true)
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [fading, setFading] = useState<"in" | "out">("in")
  const [finished, setFinished] = useState(false)

  // Evita reabrir se já respondeu (opcional). Comente se não quiser.
  useEffect(() => {
    const done = typeof window !== "undefined" && localStorage.getItem("quiz_done") === "1"
    if (done) setOpen(false)
  }, [])

  const current = useMemo(() => QUESTIONS[index], [index])

  useEffect(() => {
    if (!open) return
    setFading("in")
    const t = setTimeout(() => setFading("in"), 10)
    return () => clearTimeout(t)
  }, [index, open])

  function selectOption(opt: string) {
    // inicia fade-out e avança
    setFading("out")
    setTimeout(() => {
      setAnswers((prev) => {
        const next = [...prev]
        next[index] = opt
        return next
      })

      if (index < QUESTIONS.length - 1) {
        setIndex((i) => i + 1)
      } else {
        setFinished(true)
        // fecha após breve agradecimento
        setTimeout(() => {
          setOpen(false)
          try { localStorage.setItem("quiz_done", "1") } catch {}
        }, 2000)
      }
      // volta o fade-in para a próxima questão ou tela final
      setTimeout(() => setFading("in"), 10)
    }, 200)
  }

  if (!open) return null

  return (
    <div
      aria-modal
      role="dialog"
      className="fixed inset-0 z-[100] flex items-center justify-center"
    >
      {/* overlay */}
      <div className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${fading === "in" ? "opacity-100" : "opacity-0"}`} />

      {/* modal */}
      <div
        className={`relative z-[101] w-full max-w-xl mx-4 rounded-2xl bg-[#0b0c1a] ring-1 ring-white/10 p-6 md:p-8 
        transition-opacity duration-300 ${fading === "in" ? "opacity-100" : "opacity-0"}`}
      >
        {!finished ? (
          <>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                Pergunta {index + 1} de {QUESTIONS.length}
              </p>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Fechar
              </button>
            </div>

            <h3 className="mt-3 text-2xl font-bold leading-snug">
              {current.title}
            </h3>

            <div className="mt-6 grid gap-3">
              {current.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => selectOption(opt)}
                  className="w-full rounded-xl bg-white/5 hover:bg-white/10 transition-colors ring-1 ring-white/10 px-5 py-3 text-left"
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* barra de progresso simples */}
            <div className="mt-6 h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-[var(--color-secondary)] transition-all duration-300"
                style={{ width: `${((index + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <h3 className="text-2xl font-bold">Hmm...</h3>
            <p className="mt-2 text-gray-300">
                Baseado nas suas respostas acreditamos esse curso seja EXATAMENTE PARA VOCÊ!

            </p>
          </div>
        )}
      </div>
    </div>
  )
}

type Mode = "quiz" | "all" | "none"

export function StorageReset({ mode = "quiz" as Mode }) {
  useEffect(() => {
    try {
      if (mode === "all") {
        localStorage.clear()
      } else if (mode === "quiz") {
        localStorage.removeItem("quiz_done")
        localStorage.removeItem("quiz_done_v2")
      }
    } catch {}
  }, [mode])

  return null
}
