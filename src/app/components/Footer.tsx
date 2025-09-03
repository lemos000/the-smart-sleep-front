// components/Footer.tsx
import Container from "./Container"
export default function Footer(){
  return (
    <footer className="py-10 border-t border-white/10 text-sm text-gray-400">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Curso — Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#">Termos</a>
            <a className="hover:text-white" href="#">Privacidade</a>
            <a className="hover:text-white" href="#">Suporte</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
