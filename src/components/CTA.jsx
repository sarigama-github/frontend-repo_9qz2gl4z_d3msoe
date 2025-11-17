import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contato" className="relative bg-[#0B0B12] py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-[720px] rounded-full bg-gradient-to-r from-fuchsia-500/20 via-cyan-400/20 to-amber-300/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.04] p-8 sm:p-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Pronto para acelerar?</h2>
          <p className="mt-4 text-white/70">Conte sobre o seu projeto e retornamos ainda hoje com os próximos passos.</p>

          <form className="mt-8 grid gap-3 sm:grid-cols-2 text-left">
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Seu nome" />
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Email" type="email" />
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500/40 sm:col-span-2" placeholder="Empresa" />
            <textarea className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500/40 sm:col-span-2" rows="4" placeholder="Fale sobre o desafio" />
            <div className="sm:col-span-2">
              <button type="button" className="w-full rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition">
                Enviar briefing
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
