import { motion } from 'framer-motion'
import { Megaphone, Code2, Paintbrush, Video, Calculator, LineChart } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Marketing de Performance',
    desc: 'Gestão de mídia, SEO, funis e CRO orientados por dados para acelerar crescimento.',
    color: 'from-fuchsia-500 to-rose-500',
  },
  {
    icon: Code2,
    title: 'Desenvolvimento Web & Apps',
    desc: 'Sites, plataformas e produtos digitais robustos, escaláveis e rápidos.',
    color: 'from-cyan-400 to-sky-500',
  },
  {
    icon: Paintbrush,
    title: 'Branding & Design',
    desc: 'Identidade visual, UI/UX, sistemas de design e materiais de alto impacto.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: Video,
    title: 'Produção de Vídeo',
    desc: 'Roteiro, captação e edição com motion e 3D para campanhas e conteúdo.',
    color: 'from-violet-500 to-indigo-500',
  },
  {
    icon: Calculator,
    title: 'Contabilidade Estratégica',
    desc: 'BPO financeiro, fiscal e controladoria integrados ao seu stack.',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    icon: LineChart,
    title: 'Inteligência & Analytics',
    desc: 'Dashboards, instrumentação e modelagem para decisões certeiras.',
    color: 'from-pink-500 to-fuchsia-500',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="relative bg-[#0B0B12] py-24 sm:py-32">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-transparent to-[#0B0B12] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Soluções completas para cada fase do seu crescimento
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Unimos estratégia, criação e tecnologia para entregar valor real e mensurável.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:-translate-y-1 transition transform"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg shadow-black/20`}>
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/10 to-transparent pointer-events-none transition" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0B0B12] pointer-events-none" />
    </section>
  )
}
