import { useRef } from 'react'
import { useInView } from '@/lib/useInView'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
type SkillGroup = {
    category: string
    color: 'default' | 'success' | 'purple' | 'cyan' | 'secondary'
    skills: string[]
}
const skillGroups: SkillGroup[] = [
    {
        category: 'Backend',
        color: 'default',
        skills: ['Laravel', 'Node.js', 'Express.js', 'REST API', 'GraphQL', 'PHP', 'JavaScript', 'TypeScript'],
    },
    {
        category: 'Database',
        color: 'cyan',
        skills: ['PostgreSQL', 'MySQL', 'Redis', 'Eloquent ORM', 'Query Optimization', 'Database Design'],
    },
    {
        category: 'Tools & DevOps',
        color: 'purple',
        skills: ['Docker', 'Git', 'Linux', 'Nginx', 'GitHub Actions', 'Postman', 'Composer', 'npm'],
    },
    {
        category: 'Architecture',
        color: 'success',
        skills: ['Microservices', 'MVC Pattern', 'Repository Pattern', 'Event-Driven', 'API Gateway', 'Clean Code'],
    },
]
export function Skills() {
    const ref = useRef<HTMLElement>(null)
    const inView = useInView(ref)
    return (
        <section id="skills" ref={ref} className="section">
            <div
                className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
            >
                {/* Section label */}
                <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest">02. Skills</span>
                    <div className="flex-1 h-px bg-zinc-800" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-100">
                    Technical{' '}
                    <span className="gradient-text">Expertise</span>
                </h2>
                <p className="text-zinc-400 mb-10 max-w-xl">
                    Focused on backend technologies that power scalable, production-ready systems.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    {skillGroups.map((group, gi) => (
                        <Card
                            key={group.category}
                            className="hover:border-zinc-700 transition-all duration-300"
                            style={{ transitionDelay: `${gi * 80}ms` }}
                        >
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-semibold text-zinc-300 uppercase tracking-widest">
                                    {group.category}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant={group.color}
                                            className="cursor-default hover:scale-105 transition-transform duration-150"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}