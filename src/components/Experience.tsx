import { useRef } from 'react'
import { useInView } from '@/lib/useInView'
import { Zap, Database, Code2, Shield, Clock, Users } from 'lucide-react'
const values = [
    {
        icon: <Zap size={22} />,
        title: 'Build Scalable Systems',
        description:
            'I design backend architectures that grow with your business — using caching layers, queue workers, load balancing, and horizontal scaling strategies to handle millions of requests.',
    },
    {
        icon: <Database size={22} />,
        title: 'Optimize Database Performance',
        description:
            'Slow queries kill products. I tune indexes, optimize query plans, design efficient schemas, and implement read replicas so your database stays fast under high load.',
    },
    {
        icon: <Code2 size={22} />,
        title: 'Design Clean API Architecture',
        description:
            'APIs are contracts. I design REST and GraphQL APIs with clear versioning, consistent error handling, proper auth, and detailed documentation developers love.',
    },
    {
        icon: <Shield size={22} />,
        title: 'Ensure Production Security',
        description:
            'Security is built-in, not bolted-on. I implement proper authentication, input validation, rate limiting, and OWASP best practices from day one.',
    },
    {
        icon: <Clock size={22} />,
        title: 'Deliver Reliable Systems',
        description:
            'Uptime matters. I build with observability in mind — structured logging, health checks, graceful error handling, and circuit breakers for fault tolerant services.',
    },
    {
        icon: <Users size={22} />,
        title: 'Write Maintainable Code',
        description:
            'Code is read more than written. I follow SOLID principles, clean architecture patterns, and write thorough tests so your team can confidently iterate.',
    },
]
export function Experience() {
    const ref = useRef<HTMLElement>(null)
    const inView = useInView(ref)
    return (
        <section id="experience" ref={ref} className="section">
            <div
                className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
            >
                {/* Section label */}
                <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest">04. Value</span>
                    <div className="flex-1 h-px bg-zinc-800" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-100">
                    Problems I{' '}
                    <span className="gradient-text">Solve</span>
                </h2>
                <p className="text-zinc-400 mb-10 max-w-xl">
                    Real engineering value — not just writing code, but solving business problems with technical excellence.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {values.map((item, i) => (
                        <div
                            key={item.title}
                            className="px-6 py-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-indigo-500/40 hover:bg-zinc-900/70 transition-all duration-300 group"
                            style={{ transitionDelay: `${i * 60}ms` }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-600/20 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-base font-semibold text-zinc-200 mb-2 group-hover:text-indigo-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
