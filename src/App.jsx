import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B12] text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <CTA />
      </main>
      <footer className="bg-[#0B0B12] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Flames Agency — Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#servicos" className="hover:text-white transition">Serviços</a>
            <a href="#portfolio" className="hover:text-white transition">Portfólio</a>
            <a href="#contato" className="hover:text-white transition">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
