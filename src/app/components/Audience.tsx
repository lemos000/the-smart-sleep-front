// components/Audience.tsx
import Container from "./Container"
const bullets = [
  "Dificuldade em colocar o bebê no berço com tranquilidade",
  "Sonecas só no colo",
  "Não sabe por onde começar",
  "Bebê que só dorme mamando",
  "Quer evitar métodos baseados em choro",
  "Medo de traumatizar o bebê",
]
export default function Audience(){
  return (
    <section className="py-16 bg-[#c9cdf8]">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold">Para quem é este curso?</h2>
        <ul className="mt-6 grid md:grid-cols-2 gap-3">
          {bullets.map((b,i)=>(
            <li key={i} className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">{b}</li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
