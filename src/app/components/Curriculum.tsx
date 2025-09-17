// components/Curriculum.tsx
import Container from "./Container";

export default function Curriculum() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)]/20 py-12 sm:py-14 md:py-16">
      <Container>
        <h2 className="text-center font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl">
          <span className="block text-white">
            RECAPITULANDO!
          </span>
          <span className="block text-[var(--color-bg)]">
            Tudo o que você terá acesso
          </span>
        </h2>

        <p className="mt-4 text-center text-[var(--color-text)]/80 text-sm sm:text-base max-w-2xl mx-auto">
          O jeito fácil de ensinar seu bebê a dormir no berço sem traumas. Saiba
          como ensinar em apenas 7 dias.
        </p>
      </Container>
    </section>
  );
}
