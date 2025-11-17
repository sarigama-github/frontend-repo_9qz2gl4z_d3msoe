import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contato" className="relative bg-[#0B0B12] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 via-cyan-500/10 to-amber-400/10 p-8 sm:p-12 backdrop-blur"
        >
          <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Pronto para acelerar seus resultados?
            </h3>
            <p className="mt-2 text-white/80 max-w-2xl">
              Conte pra gente sobre seus objetivos. Em até 24h nosso time retorna com caminhos, prazos e investimento.
            </p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Seu nome" />
              <input className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Email" />
              <button type="button" className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition">
                Receber proposta
              </button>
            </form>
            <p className="mt-3 text-[13px] text-white/60">Sem spam. Apenas 1 mensagem objetiva com próximos passos.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
