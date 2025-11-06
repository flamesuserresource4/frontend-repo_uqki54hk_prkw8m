import { motion } from 'framer-motion';
import { Database, Server, GitBranch, Code } from 'lucide-react';

const skills = [
  { name: 'Laravel', level: 90, icon: Code },
  { name: 'PHP', level: 90, icon: Code },
  { name: 'MySQL', level: 85, icon: Database },
  { name: 'RESTful API', level: 88, icon: Server },
  { name: 'Git', level: 80, icon: GitBranch },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-b from-white to-slate-50 py-20 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-white"
        >
          Skills
        </motion.h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {skills.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-3 flex items-center gap-3">
                <s.icon className="h-5 w-5 text-emerald-600" />
                <span className="font-medium text-slate-800 dark:text-slate-100">{s.name}</span>
                <span className="ml-auto text-sm text-slate-500 dark:text-slate-400">{s.level}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full rounded-full bg-emerald-600"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
