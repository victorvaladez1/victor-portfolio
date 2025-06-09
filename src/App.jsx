import './index.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import GitHubCalendar from 'react-github-calendar';
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiUnity,
  SiOpengl,
} from 'react-icons/si';

import { FaDatabase } from 'react-icons/fa';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const Skill = ({ icon, label }) => (
    <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
      {icon}
      <span>{label}</span>
    </div>
  );

  return (
    <>
      {/* Nav Bar */}
      <header className="fixed top-0 left-0 w-full bg-gray-950/90 backdrop-blur-md z-50 shadow shadow-blue-900/10">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-white">
          <h1 className="text-xl font-bold tracking-wide">Victor Valadez</h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="/resume.pdf" className="hover:text-blue-400 transition">Résumé</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-950/95 px-6 pb-4 pt-2 text-white space-y-2">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400">About</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400">Projects</a>
            <a href="/resume.pdf" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400">Résumé</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="pt-24 min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center text-center px-8">
        <h1 className="text-5xl font-bold mb-4">Victor Manuel Valadez</h1>
        <p className="text-xl text-gray-300 max-w-xl">
          Software Engineer | Full-Stack Developer | Robotics Enthusiast
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-800 transition"
          >
            Download Résumé
          </a>
        </div>
      </main>

      {/* About Me Section */}
      <section
        id="about"
        className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-8"
      >
        <div
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8"
          data-aos="fade-up"
        >
          <img
            src="/victor.png"
            alt="Victor Valadez"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 transition duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a Computer Science student at the University of Houston with a strong passion for software engineering, full-stack development, and robotics. I enjoy building clean, efficient systems that solve real-world problems — whether it's through web applications or intelligent automation.
              <br /><br />
              I'm currently looking for software engineering internships where I can work on impactful projects, grow alongside a collaborative team, and continue sharpening my skills in full-stack and systems development.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-900 text-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-sm max-w-5xl mx-auto">
            {/* Languages */}
            <Skill icon={<SiJavascript className="text-yellow-400 text-3xl" />} label="JavaScript" />
            <Skill icon={<SiPython className="text-blue-400 text-3xl" />} label="Python" />
            <Skill icon={<SiCplusplus className="text-indigo-400 text-3xl" />} label="C++" />
            <Skill icon={<SiHtml5 className="text-orange-500 text-3xl" />} label="HTML" />
            <Skill icon={<SiCss3 className="text-blue-500 text-3xl" />} label="CSS" />
            <Skill icon={<FaDatabase className="text-yellow-200 text-3xl" />} label="SQL" />

            {/* Frameworks / Libraries */}
            <Skill icon={<SiReact className="text-cyan-400 text-3xl" />} label="React" />
            <Skill icon={<SiNodedotjs className="text-green-500 text-3xl" />} label="Node.js" />
            <Skill icon={<SiExpress className="text-white text-3xl" />} label="Express" />
            <Skill icon={<SiTailwindcss className="text-sky-400 text-3xl" />} label="Tailwind" />
            <Skill icon={<SiMongodb className="text-green-400 text-3xl" />} label="MongoDB" />

            {/* Tools */}
            <Skill icon={<SiFirebase className="text-yellow-500 text-3xl" />} label="Firebase" />
            <Skill icon={<SiGit className="text-orange-500 text-3xl" />} label="Git" />
            <Skill icon={<SiGithub className="text-white text-3xl" />} label="GitHub" />
            <Skill icon={<SiVercel className="text-white text-3xl" />} label="Vercel" />
            <Skill
              icon={
                <img
                  src="/icons/vscode.png"
                  alt="VS Code"
                  className="w-8 h-8"
                />
              }
              label="VS Code"
            />

            {/* Bonus / Other */}
            <Skill icon={<SiUnity className="text-white text-3xl" />} label="Unity" />
            <Skill icon={<SiOpengl className="text-green-300 text-3xl" />} label="OpenGL" />
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="bg-gray-950 text-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* AccountAbility Card */}
            <div
              className="bg-[#111827] rounded-2xl border border-gray-700 shadow-lg shadow-blue-500/10 p-6 transition duration-300 hover:shadow-blue-500/30 backdrop-blur-md"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/accountability-logo.png"
                  alt="AccountAbility Logo"
                  className="w-10 h-10 rounded-sm object-contain"
                />
                <h3 className="text-xl font-semibold">AccountAbility</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Built a full-stack personal finance dashboard to help users manage bank accounts, budgets,
                and investments with live portfolio tracking and AI-powered insights.
              </p>
              <ul className="text-gray-400 text-sm list-disc list-inside mb-4 space-y-1">
                <li>Implemented secure authentication and data management</li>
                <li>Created modular APIs for transactions and planning tools</li>
                <li>Integrated live stock data with real-time valuation</li>
              </ul>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex flex-wrap gap-6">
                  <a
                    href="https://github.com/victorvaladez1/accountability-finance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://accountability-finance.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                  <span className="bg-gray-800 px-2 py-1 rounded">React</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">Node.js</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">Express</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">MongoDB</span>
                </div>
              </div>
            </div>

            {/* JPMC Hackathon Card */}
            <div
              className="bg-[#111827] rounded-2xl border border-gray-700 shadow-lg shadow-blue-500/10 p-6 transition duration-300 hover:shadow-blue-500/30 backdrop-blur-md"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/jpmc-logo.png"
                  alt="JPMC Hackathon Logo"
                  className="w-10 h-10 rounded-sm object-contain"
                />
                <h3 className="text-xl font-semibold">JPMC Code for Good 2024</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Developed a full-stack web application for <strong>Abide Women’s Health Services</strong> during JPMorgan Chase’s <em>Code for Good 2024</em> Hackathon. Led backend development in a cross-functional team of five.
              </p>
              <ul className="text-gray-400 text-sm list-disc list-inside mb-4 space-y-1">
                <li>Built secure RESTful APIs using Flask</li>
                <li>Designed SQL schema to support nonprofit operations</li>
                <li>Integrated backend with a React frontend</li>
                <li>Prioritized scalability and clean architecture</li>
              </ul>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex flex-wrap gap-6">
                  <a
                    href="https://github.com/cfgtexas24/Team-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                  <span className="bg-gray-800 px-2 py-1 rounded">React</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">Flask</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">PostgreSQL</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* GitHub Contributions Section */}
            <section id="github" className="bg-gray-950 text-white py-20 px-8">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6">GitHub Activity</h2>
          <div className="bg-[#111827] p-6 rounded-2xl border border-gray-700 shadow-lg shadow-green-500/10 hover:shadow-green-500/30 transition duration-300 max-w-4xl mx-auto">
            <GitHubCalendar
              username="victorvaladez1"
              blockSize={14}
              blockMargin={4}
              fontSize={14}
              colorScheme="dark"
              theme={{
                level0: '#1f2937',
                level1: '#0e4429',
                level2: '#006d32',
                level3: '#26a641',
                level4: '#39d353',
              }}
            />
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="bg-gray-900 text-white py-16 px-8 text-center">
        <div className="max-w-xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 mb-6">
            I’m always open to new opportunities, collaborations, or just talking tech.
          </p>
          <div className="flex justify-center gap-8 text-2xl">
            <a
              href="https://github.com/victorvaladez1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/victor-valadez-963512282/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:mvictorvaladez@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}

export default App;
