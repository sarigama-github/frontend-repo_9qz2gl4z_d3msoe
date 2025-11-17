import { motion } from 'framer-motion'
import { Megaphone, Code2, Palette, Clapperboard, Calculator, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Marketing de Performance',
    desc: 'Aquisição orientada a dados: paid media, CRO, funis e automações que convertem.',
    accent: 'from-fuchsia-500 to-rose-400'
  },
  {
    icon: Code2,
    title: 'Desenvolvimento Web & Apps',
    desc: 'Front-end e back-end modernos, escaláveis e seguros. Do MVP ao enterprise.',
    accent: 'from-cyan-400 to-blue-500'
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    desc: 'Identidade, diretrizes visuais e sistemas de design que dão consistência à marca.',
    accent: 'from-amber-400 to-rose-400'
  },
  {
    icon: Clapperboard,
    title: 'Produção de Vídeo',
    desc: 'Roteiro, captação e pós: conteúdo que explica, emociona e vende.',
    accent: 'from-emerald-400 to-cyan-400'
  },
  {
    icon: Calculator,
    title: 'Contabilidade Estratégica',
    desc: 'Fiscal, financeiro e planejamento tributário integrado ao seu negócio.',
    accent: 'from-purple-400 to-fuchsia-500'
  },
  {
    icon: BarChart3,
    title: 'Inteligência & Analytics',
    desc: 'Arquitetura de dados, painéis e modelagem para decisões melhores e rápidas.',
    accent: 'from-teal-400 to-emerald-400'
  }
]

export default function Services() {
  return (
    <section id="servicos" className="relative bg-[#0B0B12] py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">O que fazemos</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Soluções integradas para acelerar o seu crescimento com estética e performance.</p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20, rotateX: -6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5"
            >
              <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${s.accent} opacity-20 blur-3xl transition group-hover:opacity-30`} />
              <div className="relative">
                <div className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 text-white">
                  <s.icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-xs text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Projeto sob medida
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/10 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
