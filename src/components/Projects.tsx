import { useRef } from 'react'
import { useInView } from '@/lib/useInView'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Zap, Shield, BarChart3, Globe } from 'lucide-react'

type Project = {
  title: string
  description: string
  highlight: string
  highlightIcon: React.ReactNode
  tech: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: 'E-Commerce API Platform',
    description:
      'High-performance REST API for an e-commerce platform serving 10k+ daily active users. Handles product catalog, inventory, orders, and payment processing with real-time updates.',
    highlight: 'Scalability — Handles 500+ req/s with Laravel Octane & Redis caching',
    highlightIcon: <Zap size={14} />,
    tech: ['Laravel', 'PostgreSQL', 'Redis', 'Docker', 'REST API', 'Sanctum'],
    github: 'https://github.com/nurrochmat',
  },
  {
    title: 'Auth & RBAC Service',
    description:
      'Standalone authentication microservice with role-based access control, JWT tokens, refresh token rotation, and multi-tenant support for SaaS applications.',
    highlight: 'Security — Zero-trust auth with refresh token rotation & rate limiting',
    highlightIcon: <Shield size={14} />,
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'bcrypt', 'Docker'],
    github: 'https://github.com/nurrochmat',
  },
  {
    title: 'Real-Time Analytics Pipeline',
    description:
      'Backend system for collecting, processing, and aggregating real-time analytics events. Features custom query builder and dashboard data aggregation with historical reporting.',
    highlight: 'Performance — Processes 1M+ events/day with optimized PostgreSQL queries',
    highlightIcon: <BarChart3 size={14} />,
    tech: ['Laravel', 'PostgreSQL', 'Redis Queue', 'WebSocket', 'Chart.js'],
    github: 'https://github.com/nurrochmat',
  },
  {
    title: 'Multi-Tenant SaaS Backend',
    description:
      'Scalable backend for a multi-tenant SaaS CMS with isolated data per tenant, subscription billing integration, custom domain routing, and flexible API access.',
    highlight: 'Architecture — Clean DDD with repository pattern & event sourcing',
    highlightIcon: <Globe size={14} />,
    tech: ['Laravel', 'MySQL', 'Docker', 'Stripe API', 'Queue Worker', 'REST API'],
    github: 'https://github.com/nurrochmat',
    demo: '#',
  },
]

export function Projects() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)

  return (
    <section id="projects" ref={ref} className="section">
      <div
        className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        {/* Section label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest">03. Projects</span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-100">
          Featured{' '}
          <span className="gradient-text">Work</span>
        </h2>
        <p className="text-zinc-400 mb-10 max-w-xl">
          Projects focused on performance, scalability, and clean architecture.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Card
              key={project.title}
              className="flex flex-col hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <CardHeader>
                <CardTitle className="group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                {/* Highlight */}
                <div className="flex items-start gap-2 p-3 rounded-lg bg-indigo-600/10 border border-indigo-500/20 mb-4">
                  <span className="text-indigo-400 mt-0.5 flex-shrink-0">{project.highlightIcon}</span>
                  <span className="text-xs text-indigo-300">{project.highlight}</span>
                </div>
                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                {project.github && (
                  <Button asChild variant="outline" size="sm" className="gap-1.5">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github size={14} /> Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button asChild size="sm" className="gap-1.5">
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink size={14} /> Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
