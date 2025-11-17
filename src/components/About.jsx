import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function About() {
  return (
    <section id="sobre" className="relative bg-[#0B0B12] py-24 sm:py-32 overflow-hidden">
      <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              Quem somos
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">Criamos experiências que unem performance e estética</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Somos um estúdio multidisciplinar: estrategistas, designers, developers e creators. 
              Operamos de ponta a ponta, conectando branding, growth e engenharia para levar sua marca do conceito ao produto.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[{k:'Projetos',v:'+120'},{k:'NPS',v:'91'},{k:'Países',v:'7'}].map((s) => (
                <div key={s.k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-300">{s.v}</div>
                  <div className="text-xs text-white/60">{s.k}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative h-[360px] rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.04] overflow-hidden"
          >
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B12]/60 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
