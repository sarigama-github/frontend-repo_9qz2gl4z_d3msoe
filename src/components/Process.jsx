import { motion } from 'framer-motion'
import { Brain, Layout, Rocket, Wrench } from 'lucide-react'

const steps = [
  { icon: Brain, title: 'Discovery & Strategy', desc: 'Entendimento profundo do negócio, personas e oportunidades.' },
  { icon: Layout, title: 'Design & Prototipagem', desc: 'UI/UX com foco em conversão e consistência.' },
  { icon: Wrench, title: 'Build & Integrações', desc: 'Arquitetura moderna, testes e qualidade.' },
  { icon: Rocket, title: 'Launch & Growth', desc: 'Deploy, métricas e evolução contínua.' },
]

export default function Process() {
  return (
    <section className="relative bg-[#0B0B12] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Como trabalhamos</h2>
          <p className="mt-3 text-white/70">Processo claro, focado em velocidade e qualidade.</p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20, rotateX: -6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.04] p-6"
            >
              <div className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 text-white">
                <s.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
