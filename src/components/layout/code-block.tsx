"use client";

const CodeLine = ({ children, indent = 0 }: { children: React.ReactNode, indent?: number }) => (
    <div style={{ paddingLeft: `${indent * 1.5}rem` }}>{children}</div>
);

export const CodeBlock = () => {
    const skills = ["React", "Next.js", "Node.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Nest.js"];
    return (
        <div className="bg-zinc-900/70 backdrop-blur-sm border border-border/30 rounded-lg p-6 font-code text-sm shadow-2xl shadow-primary/10 w-full max-w-md mx-auto">
            <div className="flex items-center gap-2 mb-4">
                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
            </div>
            <div className="text-zinc-400">
                <CodeLine><span className="text-purple-400">const</span> <span className="text-blue-400">oke</span> <span className="text-purple-400">=</span> {'{'}</CodeLine>
                <CodeLine indent={1}><span className="text-blue-400">name:</span> <span className="text-green-400">'Oke Stephen Toluwanimi'</span>,</CodeLine>
                <CodeLine indent={1}><span className="text-blue-400">studentsTrained:</span> <span className="text-orange-400">200</span>,</CodeLine>
                <CodeLine indent={1}><span className="text-blue-400">skills:</span> {'['}</CodeLine>
                {skills.map(skill => (
                    <CodeLine key={skill} indent={2}><span className="text-green-400">'{skill}'</span>,</CodeLine>
                ))}
                <CodeLine indent={1}>{']'}</CodeLine>
                <CodeLine>{'}'};</CodeLine>
            </div>
        </div>
    );
};
