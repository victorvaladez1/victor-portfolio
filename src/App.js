import './index.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import NowPlayingComponent from "./components/NowPlayingComponent.jsx";
import ContactForm from './components/ContactForm.jsx';
import GitHubStats from './components/GitHubStats.jsx';

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
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

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
    <div className={isDark ? 'dark' : ''}>
      <div className="bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300">
        {/* Nav Bar */}
        <header className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-md z-50 shadow shadow-blue-900/10">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-black dark:text-white">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold tracking-wide">Victor Valadez</h1>
              <button
                onClick={toggleTheme}
                className="px-2 py-1 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition text-black dark:text-white"
              >
                {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-6 text-sm font-medium">
              <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
              <li><a href="/resume.pdf" className="hover:text-blue-400 transition">Resume</a></li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black dark:text-white focus:outline-none"
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
            <div className="md:hidden bg-white dark:bg-gray-950 px-6 pb-4 pt-2 text-black dark:text-white space-y-2">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400">About</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400">Projects</a>
              <a href="/resume.pdf" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400">Resume</a>
            </div>
          )}
        </header>

        <main className="pt-24 min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-5xl font-bold mb-4">Victor Manuel Valadez</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-xl">
            Software Engineer | Full-Stack Developer | Robotics Enthusiast
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white transition">
              View Projects
            </a>
            <a href="/Victor_Manuel_Valadez_Resume.pdf" download className="px-6 py-2 border border-gray-500 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Download Resume
            </a>
          </div>
        </main>

      {/* About Me Section */}
      <section
        id="about"
        className="bg-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 text-black dark:text-white py-20 px-8 transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl shadow-md bg-white dark:bg-transparent transition-colors duration-300">
            <img
              src="/victor.png"
              alt="Victor Valadez"
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 transition duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                I'm a Computer Science student at the University of Houston with a strong passion for software engineering, full-stack development, and robotics. I enjoy building clean, efficient systems that solve real-world problems — whether it's through web applications or intelligent automation.
                <br /><br />
                I'm currently looking for software engineering internships where I can work on impactful projects, grow alongside a collaborative team, and continue sharpening my skills in full-stack and systems development.
              </p>
            </div>
          </div>

          {/* Now Playing widget */}
          <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
            <NowPlayingComponent />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="bg-gray-200 text-black dark:bg-gray-900 dark:text-white py-20 px-8 transition-colors duration-300"
      >
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
              icon={<img src="/icons/vscode.png" alt="VS Code" className="w-8 h-8" />}
              label="VS Code"
            />

            {/* Bonus / Other */}
            <Skill icon={<SiUnity className="text-white text-3xl" />} label="Unity" />
            <Skill icon={<SiOpengl className="text-green-300 text-3xl" />} label="OpenGL" />
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section
        id="projects"
        className="bg-gray-300 text-black dark:bg-gray-950 dark:text-white py-20 px-8 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                logo: "/accountability-logo.png",
                title: "AccountAbility",
                desc: "Full-stack personal finance dashboard with budgeting, stock tracking, and AI-powered insights.",
                features: [
                  "Secure login and data handling",
                  "Transaction and planning APIs",
                  "Live stock valuation integration"
                ],
                links: [
                  { href: "https://github.com/victorvaladez1/accountability-finance", label: "GitHub" },
                  { href: "https://accountability-finance.vercel.app", label: "Live Demo" }
                ],
                techs: ["React", "Node.js", "Express", "MongoDB"],
                delay: 100
              },
              {
                logo: "/wellaware-logo.png",
                title: "WellAware Platform",
                desc: "Simulated oil well monitoring platform with telemetry, maintenance tracking, and crew management.",
                features: [
                  "Real-time telemetry for wells",
                  "Maintenance logging & crew roster",
                  "JWT-based admin role authentication"
                ],
                links: [
                  { href: "https://github.com/victorvaladez1/wellaware-platform", label: "GitHub" }
                ],
                techs: ["React", "Flask", "PostgreSQL", "SQLAlchemy"],
                delay: 200,
                badge: "In Progress"
              },
              {
                logo: "/jpmc-logo.png",
                title: "JPMC Code for Good 2024",
                desc: "Built a nonprofit operations app during JPMorgan’s Code for Good hackathon. Led Flask backend with SQL schema.",
                features: [
                  "REST APIs for user and nonprofit data",
                  "SQL schema and secure route handling",
                  "Connected with a dynamic React frontend"
                ],
                links: [
                  { href: "https://github.com/cfgtexas24/Team-2", label: "GitHub" }
                ],
                techs: ["React", "Flask", "PostgreSQL"],
                delay: 300
              }
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-white text-black dark:bg-[#111827] dark:text-white rounded-2xl border border-gray-300 dark:border-gray-700 shadow-lg shadow-blue-500/10 p-6 transition duration-300 hover:shadow-blue-500/30 backdrop-blur-md flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={project.delay}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img src={project.logo} alt={`${project.title} Logo`} className="w-10 h-10 rounded-sm object-contain" />
                    <div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      {project.badge && (
                        <span className="text-xs text-yellow-500 font-medium">{project.badge}</span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
                  <ul className="text-gray-700 dark:text-gray-400 text-sm list-disc list-inside mb-6 space-y-1">
                    {project.features.map((feat, i) => <li key={i}>{feat}</li>)}
                  </ul>
                </div>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-6 mb-2">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-400">
                    {project.techs.map((tech, i) => (
                      <span key={i} className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="github"
        className="bg-gray-200 text-black dark:bg-gray-950 dark:text-white py-16 px-8 text-center transition-colors duration-300"
      >
        <div data-aos="fade-up">
          <GitHubStats />
          <div className="mt-8">
            <a
              href="https://github.com/victorvaladez1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition duration-300"
            >
              Explore My GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        className="bg-white text-black dark:bg-gray-900 dark:text-white py-16 px-8 text-center transition-colors duration-300"
      >
        <div className="max-w-xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4">Send Me a Message</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-6">
            Reach out directly from here!
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Connect Section */}
      <section
        id="connect"
        className="bg-white text-black dark:bg-gray-900 dark:text-white py-16 px-8 text-center transition-colors duration-300"
      >
        <div className="max-w-xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-6">
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
              href="https://www.linkedin.com/in/mvictorvaladez"
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

      </div>
    </div>
  );
}

export default App;
