import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-zinc-800/60 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 group-hover:bg-indigo-600/30 transition-colors">
            <Code2 size={16} className="text-indigo-400" />
          </div>
          <span className="font-mono text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
            nurrochmat.dev
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button asChild size="sm" variant="outline">
            <a href="#contact">Hire Me</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden glass border-t border-zinc-800/60 transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button asChild size="sm" className="w-full mt-2">
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                Hire Me
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
