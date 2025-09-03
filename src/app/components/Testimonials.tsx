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
    <section className="py-16 bg-[var(--color-bg)]">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] text-center">
          Por que esse método?
        </h2>

        {/* MOBILE: cards empilhados */}
        <div className="mt-8 space-y-3 md:hidden p-4">
          {rows.map(([label, ok], i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/85 ring-1 ring-black/10 shadow-sm p-4"
            >
              <p className="font-medium text-[var(--color-text)]">{label}</p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2 text-black">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700">
                    <Check className="h-4 w-4" />
                  </span>
                  Curso
                </div>
                <div className="flex items-center gap-2 text-black">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/15 text-rose-700">
                    <X className="h-4 w-4" />
                  </span>
                  Caminhos comuns
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP/TABLET: tabela */}
        <div className="mt-8 overflow-x-auto hidden md:block p-8">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-sm text-[var(--color-text)]/60">
                <th className="px-4 py-2">Recursos</th>
                <th className="px-4 py-2">Curso</th>
                <th className="px-4 py-2">Caminhos comuns</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label], i) => (
                <tr
                  key={i}
                  className="bg-white/80 ring-1 ring-black/10 rounded-xl shadow-sm text-black hover:scale-105 transition-all duration-100"
                >
                  <td className="px-4 py-3 rounded-l-xl">{label}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700">
                      <Check className="h-4 w-4" />
                    </span>
                  </td>
                  <td className="px-4 py-3 rounded-r-xl">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/15 text-rose-700">
                      <X className="h-4 w-4" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  )
}
