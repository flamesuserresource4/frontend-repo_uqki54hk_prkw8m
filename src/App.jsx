import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TimelineAndContact from './components/TimelineAndContact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800/60 dark:bg-slate-950/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-semibold tracking-tight">FFS</a>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex dark:text-slate-300">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white">About</a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TimelineAndContact />
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 text-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-slate-600 md:flex-row dark:text-slate-400">
          <p>© {new Date().getFullYear()} Faturahman Firzzy Setiawan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-slate-900 dark:hover:text-white">Home</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
