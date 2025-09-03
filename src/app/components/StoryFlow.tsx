// components/StoryFlow.tsx
import Container from "./Container"

const checkoutUrl = "https://nexusrade.mycartpanda.com/checkout/169191668:1"

export default function StoryFlow() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-20">
      {/* detalhe sutil no fundo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_110%_110%,var(--color-primary)/10_0%,transparent_60%)]" />
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold tracking-widest text-[var(--color-secondary)]">
            UMA HISTÓRIA QUE É A SUA
          </p>

          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight text-[var(--color-primary)]">
            Do colo ao berço — sem lágrimas, sem culpa, com um plano possível
          </h2>

          <p className="mt-6 leading-relaxed text-[var(--color-text)]/90">
            Se você sente que tentou “de tudo” e nada funcionou, respira. O problema
            não é você — é a falta de um <strong>processo gentil</strong>, claro e cumulativo.
            O <em>COMO FAZER O SEU BEBÊ DORMIR</em> nasceu para transformar noites caóticas
            em rotina previsível, com passos pequenos e resultados que chegam rápido.
          </p>

          <div className="mt-8 rounded-2xl bg-[var(--color-accent)]/25 p-5 ring-1 ring-[var(--color-accent)]/40">
            <p className="font-semibold text-[var(--color-primary)]">O que muda na prática?</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--color-text)]/90">
              <li><strong>Ambiente amigo do sono</strong> (luz, ruído, temperatura, rotina).</li>
              <li><strong>Plano de 7 dias</strong> com micro-ajustes diários (sem pular etapas).</li>
              <li><strong>Associações substituídas</strong> com acolhimento: do colo/peito ao berço.</li>
              <li><strong>Despertares noturnos</strong> conduzidos sem “voltar à estaca zero”.</li>
            </ul>
          </div>

          <h3 className="mt-10 text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
            Como você se sente ao final da primeira semana
          </h3>
          <p className="mt-4 leading-relaxed text-[var(--color-text)]/90">
            O bebê começa a <strong>aceitar o berço</strong>, as sonecas ficam mais longas e
            o sono noturno deixa de ser um mistério. Você recupera <strong>energia</strong>,
            a casa volta a ter ritmo e o fim do dia deixa de ser um campo minado.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/10">
              <p className="text-sm font-semibold text-[var(--color-primary)]">Gentil sempre</p>
              <p className="mt-1 text-sm text-[var(--color-text)]/80">
                Nada de “deixar chorando”. O foco é segurança emocional.
              </p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/10">
              <p className="text-sm font-semibold text-[var(--color-primary)]">Roteiro realista</p>
              <p className="mt-1 text-sm text-[var(--color-text)]/80">
                Pequenas vitórias que somam. Sem fórmulas mágicas.
              </p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/10">
              <p className="text-sm font-semibold text-[var(--color-primary)]">Cabe na rotina</p>
              <p className="mt-1 text-sm text-[var(--color-text)]/80">
                Passos simples, aplicáveis com o que você já tem em casa.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-dashed border-[var(--color-secondary)]/40 p-5">
            <p className="text-sm text-[var(--color-text)]/70">
              <strong>Nota importante:</strong> o curso é educacional. Em dúvidas de saúde
              (refluxo, apneia, alergias etc.), <em>sempre</em> siga as orientações do pediatra.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[var(--color-primary)] px-6 py-4 font-semibold text-white transition-colors hover:bg-[var(--color-secondary)]"
            >
              Quero começar hoje
            </a>
            <span className="text-xs text-[var(--color-text)]/70">
              Acesso imediato • Garantia de 7 dias • Sem acessórios caros
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}
