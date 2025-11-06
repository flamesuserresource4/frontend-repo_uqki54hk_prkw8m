import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const timeline = [
  {
    date: '2022',
    title: 'D3 – Management of Administrative Informatics',
    place: 'ASM Ariyanti',
    desc: 'Graduated with strong foundation in information systems and administration, focusing on backend development and databases.'
  },
  {
    date: '2023 - Present',
    title: 'Backend Developer (Freelance)',
    place: 'Remote',
    desc: 'Building Laravel-based APIs, integrating payments, and crafting maintainable architectures.'
  }
];

export default function TimelineAndContact() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setDark(document.documentElement.classList.contains('dark') || mq.matches);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <section id="contact" className="bg-gradient-to-b from-slate-50 to-white py-20 dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-white"
          >
            Experience & Education
          </motion.h2>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((v) => !v)}
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} {dark ? 'Light' : 'Dark'}
          </button>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Timeline */}
          <div>
            <div className="relative border-slate-200 pl-6 dark:border-slate-800">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative mb-8"
                >
                  <div className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-emerald-600" />
                  <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="text-xs text-slate-500 dark:text-slate-400">{item.date} • {item.place}</div>
                    <div className="mt-1 font-semibold text-slate-900 dark:text-white">{item.title}</div>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold text-slate-900 dark:text-white"
            >
              Contact
            </motion.h3>
            <form
              action="https://formspree.io/f/mzbldjpj"
              method="POST"
              className="mt-6 space-y-4"
            >
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input name="name" required className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input name="email" type="email" required className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" placeholder="you@email.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea name="message" rows="4" required className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" placeholder="Tell me about your project" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                Send Message
              </button>
            </form>

            <div className="mt-6 flex items-center gap-4">
              <a href="mailto:faturahman@example.com" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                <Mail className="h-5 w-5" /> Email
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                <Github className="h-5 w-5" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
