import { motion } from 'framer-motion'

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg',
  'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
]

const items = [
  {
    title: 'E-commerce escalável',
    desc: 'Arquitetura headless, design system e SEO avançado que triplicou o faturamento.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Plataforma SaaS',
    desc: 'Produto B2B com onboarding guiado, analytics e integrações com o seu stack.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Rebranding completo',
    desc: 'Estratégia e identidade visual com guidelines e componentes reutilizáveis.',
    image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=1400&auto=format&fit=crop',
  },
]

export default function Showcase() {
  return (
    <section id="portfolio" className="relative bg-[#0B0B12] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Resultados que falam por si</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">Algumas das soluções que entregamos recentemente.</p>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10"
            >
              <img src={item.image} alt="" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-5">
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-white/70 text-sm mt-1">{item.desc}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 opacity-70">
          {logos.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt="Logo"
              className="h-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
