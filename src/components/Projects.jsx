import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Inventory Management API',
    desc: 'RESTful API built with Laravel for managing products, stock, and suppliers. Includes authentication and role-based access.',
    tags: ['Laravel', 'PHP', 'MySQL', 'JWT'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'E-commerce Backend',
    desc: 'Order processing, payments integration, and admin dashboard APIs following clean architecture principles.',
    tags: ['Laravel', 'REST API', 'MySQL'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Task Manager',
    desc: 'Full-stack app with Laravel backend and React frontend to manage tasks, tags, and collaborators.',
    tags: ['Laravel', 'React', 'MySQL'],
    github: 'https://github.com/',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-white"
        >
          Projects
        </motion.h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.github} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                  <Github className="h-4 w-4" /> Code
                </a>
                <a href={p.demo} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
