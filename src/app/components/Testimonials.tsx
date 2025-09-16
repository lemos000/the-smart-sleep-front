// components/MethodCompare.tsx
import Container from "./Container"
import { Check, X } from "lucide-react"

const rows = [
  ["Condução gentil (sem deixar chorando)", true],
  ["Plano prático de 7 dias", true],
  ["Ajustes para regressões/dentição/viagens", true],
  ["Sem acessórios caros", true],
  ["Manutenção simples pós-resultado", true],
] as const

export default function MethodCompare() {
  return (
    <section className="bg-[var(--color-bg)] py-12 sm:py-14 md:py-16">
      <Container>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-primary)] text-center">
          Por que esse método?
        </h2>

        {/* MOBILE: cards empilhados */}
        <div className="mt-6 sm:mt-8 space-y-3 md:hidden px-3">
          {rows.map(([label], i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/90 ring-1 ring-black/10 shadow-sm p-4"
            >
              <p className="font-medium text-sm text-[var(--color-text)]">{label}</p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2 text-[var(--color-text)]">
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700"
                    aria-label="Presente no curso"
                    title="Presente no curso"
                  >
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  Curso
                </div>
                <div className="flex items-center gap-2 text-[var(--color-text)]">
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/15 text-rose-700"
                    aria-label="Ausente em caminhos comuns"
                    title="Ausente em caminhos comuns"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </span>
                  Caminhos comuns
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TABLET/DESKTOP: tabela com acessibilidade e scroll horizontal se precisar */}
        <div className="mt-8 hidden md:block">
          <div className="overflow-x-auto px-4 md:px-8">
            <table className="w-full min-w-[640px] text-left border-separate border-spacing-y-8">
              <caption className="sr-only">
                Comparação entre o curso e caminhos comuns para ensinar o bebê a dormir
              </caption>
              <thead>
                <tr className="text-sm text-[var(--color-text)]/70">
                  <th scope="col" className="px-4 py-2">Recursos</th>
                  <th scope="col" className="px-4 py-2">Curso</th>
                  <th scope="col" className="px-4 py-2">Caminhos comuns</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([label], i) => (
                  <tr key={i} className="align-middle">
                    <td className="px-4 py-3 bg-white/90 ring-1 ring-black/10 rounded-l-xl text-[var(--color-text)]">
                      {label}
                    </td>
                    <td className="px-4 py-3 bg-white/90 ring-1 ring-black/10 text-center">
                      <span
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700"
                        aria-label="Presente no curso"
                        title="Presente no curso"
                      >
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </td>
                    <td className="px-4 py-3 bg-white/90 ring-1 ring-black/10 rounded-r-xl text-center">
                      <span
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-500/15 text-rose-700"
                        aria-label="Ausente em caminhos comuns"
                        title="Ausente em caminhos comuns"
                      >
                        <X className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  )
}
