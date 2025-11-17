import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-inner">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="text-white font-semibold tracking-tight text-lg">Flames Agency</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#contato" className="inline-flex items-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition-opacity">
                Solicitar proposta
              </a>
            </nav>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-white/90 hover:bg-white/10 transition"
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden border-t border-white/10"
              >
                <div className="px-4 py-4 flex flex-col gap-3">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  ))}
                  <a
                    href="#contato"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20"
                  >
                    Solicitar proposta
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
