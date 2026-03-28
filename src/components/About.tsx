import { useRef } from 'react'
import { useInView } from '@/lib/useInView'
import { Badge } from '@/components/ui/badge'
import { Server, Database, Layout, GitBranch, Cpu } from 'lucide-react'

const expertise = [
  { icon: <Server size={18} />, label: 'Laravel', desc: 'PHP framework for scalable web applications' },
  { icon: <Server size={18} />, label: 'Node.js', desc: 'Event-driven JavaScript runtime for APIs' },
  { icon: <Database size={18} />, label: 'PostgreSQL', desc: 'Advanced relational database systems' },
  { icon: <Layout size={18} />, label: 'API Design', desc: 'RESTful & GraphQL API architecture' },
  { icon: <Cpu size={18} />, label: 'System Architecture', desc: 'Designing scalable & maintainable systems' },
  { icon: <GitBranch size={18} />, label: 'DevOps Basics', desc: 'Docker, CI/CD, Linux server management' },
]

export function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)

  return (
    <section id="about" ref={ref} className="section">
      <div
        className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        {/* Section label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest">01. About</span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-100">
              Crafting the backbone<br />
              <span className="gradient-text">of digital products</span>
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Hi, I'm <span className="text-zinc-200 font-medium">Nurrochmat Saptoaji</span> — a backend engineer
                with a passion for building high-performance, scalable systems that handle real-world complexity.
              </p>
              <p>
                I specialize in designing clean <span className="text-indigo-400">API architectures</span>,
                optimizing database performance, and building microservices that scale. My approach prioritizes
                maintainability, security, and developer experience.
              </p>
              <p>
                When I'm not writing code, I'm thinking about system design patterns, exploring new backend
                technologies, and contributing to open-source projects.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: '3+', label: 'Years Exp.' },
                { value: '20+', label: 'Projects' },
                { value: '10+', label: 'APIs Built' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise cards */}
          <div className="grid grid-cols-1 gap-3">
            {expertise.map((item, i) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-indigo-500/40 hover:bg-zinc-900/70 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-200">{item.label}</div>
                  <div className="text-xs text-zinc-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
