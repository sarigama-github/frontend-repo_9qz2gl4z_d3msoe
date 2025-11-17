import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-[#0B0B12]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B12]/60 via-[#0B0B12]/60 to-[#0B0B12] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="relative inline-flex h-2 w-2"><span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" /><span className="relative block h-2 w-2 rounded-full bg-emerald-400" /></span>
            Agência multifuncional de alto impacto
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight bg-gradient-to-br from-fuchsia-400 via-cyan-300 to-amber-200 bg-clip-text text-transparent">
            Marketing, tecnologia e design que aceleram resultados
          </h1>
          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            Somos um time sênior que combina estratégia, criatividade e engenharia para transformar marcas e negócios. Do planejamento ao deploy.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contato" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition">
              Começar um projeto
            </a>
            <a href="#servicos" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">
              Nossos serviços
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[420px] w-[1200px] rounded-full bg-gradient-to-r from-fuchsia-500/30 via-cyan-400/30 to-amber-300/30 blur-3xl pointer-events-none" />
    </section>
  )
}
