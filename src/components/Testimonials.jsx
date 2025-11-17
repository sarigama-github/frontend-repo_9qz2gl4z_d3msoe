import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'A equipe entregou além do esperado. Crescemos 3x em 6 meses.',
    author: 'Ana Silva',
    role: 'CMO, Loja Vibe'
  },
  {
    quote: 'Qualidade de produto e branding impecáveis. Time muito sênior.',
    author: 'Rafael Costa',
    role: 'Founder, FinTech.io'
  },
  {
    quote: 'Do discovery ao deploy, tudo muito fluido e transparente.',
    author: 'Marina Rocha',
    role: 'Head de Produto, EduTech'
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative bg-[#0B0B12] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">O que falam da gente</h2>
          <p className="mt-3 text-white/70">Confiança construída em projetos reais.</p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20, rotateX: -6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.04] p-6"
            >
              <p className="text-white/80">“{t.quote}”</p>
              <div className="mt-4 text-sm text-white/60">
                <span className="font-medium text-white">{t.author}</span> — {t.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
