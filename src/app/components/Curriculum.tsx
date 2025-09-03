// components/Curriculum.tsx
import Container from "./Container";

export default function Curriculum() {
  return (
    <section className="py-20 bg-[var(--color-primary)]/20 relative overflow-hidden ">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-bg)] text-center">
          RECAPITULANDO! <br /> 
          <span className="text-[var(--color-bg)]">Tudo o que você terá acesso</span>
        </h2>
        <p className="mt-4 text-center text-[var(--color-accent)]/80">
          O jeito fácil de ensinar seu bebê a dormir no berço sem traumas. Saiba
          como ensinar em apenas 7 dias.
        </p>
      </Container>
    </section>
  );
}
