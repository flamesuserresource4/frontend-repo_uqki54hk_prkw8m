import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-white"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
      >
        I am Faturahman Firzzy Setiawan, a backend developer specialized in Laravel and PHP. I hold a D3 degree in Management of Administrative Informatics from ASM Ariyanti. I enjoy designing robust APIs, optimizing database queries, and building maintainable backend systems. My focus is on reliability, performance, and clean architecture.
      </motion.p>
    </section>
  );
}
