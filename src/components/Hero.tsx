import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Linkedin, Mail, Terminal } from 'lucide-react'

const titles = [
  'Backend Engineer',
  'API Architect',
  'System Designer',
  'Laravel Expert',
]

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const target = titles[titleIndex]
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
        return () => clearTimeout(t)
      } else {
        setTitleIndex((i) => (i + 1) % titles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, titleIndex])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 grid-bg overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Tag */}
        <div className="animate-fade-in-up opacity-0-init inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-600/10 text-indigo-400 text-xs font-mono mb-8">
          <Terminal size={12} />
          <span>Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up opacity-0-init delay-100 text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          <span className="text-zinc-100">Nurrochmat</span>
          <br />
          <span className="gradient-text">Saptoaji</span>
        </h1>

        {/* Typing title */}
        <div className="animate-fade-in-up opacity-0-init delay-200 text-xl md:text-2xl font-mono text-zinc-400 mb-6 h-8">
          <span className="text-indigo-400">&gt; </span>
          <span>{displayed}</span>
          <span className="inline-block w-0.5 h-5 bg-indigo-400 ml-0.5 align-middle animate-[blink_1s_step-end_infinite]" />
        </div>

        {/* Tagline */}
        <p className="animate-fade-in-up opacity-0-init delay-300 text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed mb-10">
          I build{' '}
          <span className="text-indigo-400 font-medium">scalable APIs</span> and{' '}
          <span className="text-purple-400 font-medium">robust backend systems</span>{' '}
          that power real-world applications.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up opacity-0-init delay-400 flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button asChild size="lg" className="gap-2 animate-pulse-glow">
            <a href="#projects">
              View Projects
              <ArrowDown size={16} />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className='px-10'>
            <a href="#contact">Contact Me</a>
          </Button>
          <a className="px-10 bg-red-500">
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="animate-fade-in-up opacity-0-init delay-500 flex items-center justify-center gap-4">
          {[
            { href: 'https://github.com/nurrochmat', icon: <Github size={18} />, label: 'GitHub' },
            { href: 'https://linkedin.com/in/nurrochmat', icon: <Linkedin size={18} />, label: 'LinkedIn' },
            { href: 'mailto:nurrochmat@example.com', icon: <Mail size={18} />, label: 'Email' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 text-zinc-400 hover:border-indigo-500 hover:text-indigo-400 transition-all duration-200 hover:scale-110"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-600 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-indigo-400" />
        </div>
      </div>
    </section>
  )
}
