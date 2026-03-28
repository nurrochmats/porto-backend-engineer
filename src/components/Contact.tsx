import { useRef } from 'react'
import { useInView } from '@/lib/useInView'
import { Button } from '@/components/ui/button'
import { Mail, MessageSquare, MapPin, Github, Linkedin } from 'lucide-react'

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)

  return (
    <section id="contact" ref={ref} className="section">
      <div
        className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        {/* Section label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest">05. Contact</span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>

        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-100">
            Let's build something{' '}
            <span className="gradient-text">great together</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-10">
            Whether you need a scalable API, a complete backend system, or just want to chat about
            architecture — I'm always open to meaningful conversations. Drop me a line!
          </p>

          {/* Contact info */}
          <div className="space-y-4 mb-10">
            {[
              {
                icon: <Mail size={18} />,
                label: 'Email',
                value: 'nurrochmat.saptoaji@gmail.com',
                href: 'mailto:nurrochmat.saptoaji@gmail.com',
              },
              {
                icon: <Github size={18} />,
                label: 'GitHub',
                value: 'github.com/nurrochmat',
                href: 'https://github.com/nurrochmat',
              },
              {
                icon: <Linkedin size={18} />,
                label: 'LinkedIn',
                value: 'linkedin.com/in/nurrochmat-saptoaji',
                href: 'https://linkedin.com/in/nurrochmat-saptoaji',
              },
              {
                icon: <MapPin size={18} />,
                label: 'Location',
                value: 'Indonesia 🇮🇩 (Open to Remote)',
                href: undefined,
              },
            ].map((contact) => (
              <div key={contact.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  {contact.icon}
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest mb-0.5">{contact.label}</div>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-sm text-zinc-300 hover:text-indigo-400 transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-sm text-zinc-300">{contact.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <a href="mailto:nurrochmat.saptoaji@gmail.com">
                <Mail size={16} />
                Send Email
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="https://github.com/nurrochmat" target="_blank" rel="noreferrer">
                <Github size={16} />
                GitHub Profile
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="https://linkedin.com/in/nurrochmat-saptoaji" target="_blank" rel="noreferrer">
                <Linkedin size={16} />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <MessageSquare size={14} className="text-indigo-400" />
          <span>Built by Nurrochmat Saptoaji — Backend Engineer</span>
        </div>
        <div className="text-xs text-zinc-600 font-mono">
          React + Vite + TypeScript + Tailwind
        </div>
      </div>
    </footer>
  )
}
