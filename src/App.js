import './index.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import NowPlayingComponent from "./components/NowPlayingComponent.jsx";
import ContactForm from './components/ContactForm.jsx';
import GitHubStats from './components/GitHubStats.jsx';
import PhotographyGallery from "./components/PhotoGallery.jsx";
import WakaTimeStats from './components/WakaTimeStats.jsx';

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
  SiGit,
  SiGithub,
  SiVercel,
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
      <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        {/* Nav Bar */}
        <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-black/70 backdrop-blur-md z-50 border-b border-black/10 dark:border-white/10">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-black dark:text-white">
            <div className="flex items-center gap-4">
              <h1 className="font-semibold tracking-tight">Victor Valadez</h1>
              <button
                onClick={toggleTheme}
                className="px-3 py-1 text-xs border border-black/20 dark:border-white/20 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-6 text-sm font-medium">
              <li><a href="#about" className="hover:underline underline-offset-4 opacity-80 hover:opacity-100 transition"
>About</a></li>
              <li><a href="#projects" className="hover:underline underline-offset-4 opacity-80 hover:opacity-100 transition"
>Projects</a></li>
              <li><a href="/resume.pdf" className="hover:underline underline-offset-4 opacity-80 hover:opacity-100 transition"
>Resume</a></li>
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
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-white">About</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block hover:text-white">Projects</a>
              <a href="/resume.pdf" onClick={() => setMobileMenuOpen(false)} className="block hover:text-white">Resume</a>
            </div>
          )}
        </header>

        <main className="pt-28 min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">
            Victor Manuel Valadez
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-black/80 dark:text-white/70">
            Software Engineer • Robotics Enthusiast • Photographer
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
            >
              View Projects
            </a>
            <a
              href="/Victor_Manuel_Valadez_Resume.pdf"
              download
              className="px-6 py-2 rounded-full border border-black/30 dark:border-white/30 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Download Resume
            </a>
          </div>
        </main>

      {/* About Me Section */}
      <section
        id="about"
        className="bg-white dark:bg-black text-black dark:text-white py-24 px-6 transition-colors duration-300 hover:shadow-black/10 dark:hover:shadow-white/10
"
      >
        <div className="max-w-6xl mx-auto border-t border-black/10 dark:border-white/10 pt-16">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6 md:p-8 rounded-2xl bg-white dark:bg-transparent transition-colors duration-300">

              {/* Profile Image */}
              <img
                src="/victor.png"
                alt="Victor Valadez"
                className="
                  w-32 h-32
                  md:w-36 md:h-36
                  rounded-full object-cover
                  border-2 border-black/10 dark:border-white/20
                  transition
                  hover:scale-105
                  hover:shadow-black/10 dark:hover:shadow-white/10
                  hover:shadow-lg
                "
                data-aos="fade-up"
                data-aos-delay="100"
              />

              {/* Text */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                  About Me
                </h2>

                <p className="text-base leading-relaxed text-black/80 dark:text-white/70 max-w-prose mb-4">
                  I'm a Computer Science student at the University of Houston with a strong passion for
                  software engineering, full-stack development, and robotics. I enjoy building clean,
                  efficient systems that solve real-world problems — whether through web applications
                  or intelligent automation.
                  <br /><br />
                  I'm currently looking for software engineering internships where I can work on
                  impactful projects, grow alongside a collaborative team, and continue sharpening
                  my skills in full-stack and systems development.
                </p>
                <NowPlayingComponent />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="bg-white dark:bg-black text-black dark:text-white py-24 px-8 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto border-t border-black/10 dark:border-white/10 pt-16">
          <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold tracking-tight mb-12">Skills</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-sm max-w-5xl mx-auto">

              {/* Languages */}
              <Skill icon={<SiJavascript className="text-black/80 dark:text-white/80 text-3xl" />} label="JavaScript" />
              <Skill icon={<SiPython className="text-black/80 dark:text-white/80 text-3xl" />} label="Python" />
              <Skill icon={<SiCplusplus className="text-black/80 dark:text-white/80 text-3xl" />} label="C++" />
              <Skill icon={<SiHtml5 className="text-black/80 dark:text-white/80 text-3xl" />} label="HTML" />
              <Skill icon={<SiCss3 className="text-black/80 dark:text-white/80 text-3xl" />} label="CSS" />
              <Skill icon={<FaDatabase className="text-black/80 dark:text-white/80 text-3xl" />} label="SQL" />

              {/* Frameworks / Libraries */}
              <Skill icon={<SiReact className="text-black/80 dark:text-white/80 text-3xl" />} label="React" />
              <Skill icon={<SiNodedotjs className="text-black/80 dark:text-white/80 text-3xl" />} label="Node.js" />
              <Skill icon={<SiExpress className="text-black/80 dark:text-white/80 text-3xl" />} label="Express" />
              <Skill icon={<SiTailwindcss className="text-black/80 dark:text-white/80 text-3xl" />} label="Tailwind" />
              <Skill icon={<SiMongodb className="text-black/80 dark:text-white/80 text-3xl" />} label="MongoDB" />

              {/* Tools */}
              <Skill icon={<SiGit className="text-black/80 dark:text-white/80 text-3xl" />} label="Git" />
              <Skill icon={<SiGithub className="text-black/80 dark:text-white/80 text-3xl" />} label="GitHub" />
              <Skill icon={<SiVercel className="text-black/80 dark:text-white/80 text-3xl" />} label="Vercel" />
            </div>
          </div>
        </div>
      </section>
    
      {/* Projects Section */}
      <section
        id="projects"
        className="bg-white dark:bg-black text-black dark:text-white py-24 px-8 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto border-t border-black/10 dark:border-white/10 pt-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Projects</h2>
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
                  logo: "/postly-logo.png",
                  title: "Postly",
                  desc: "Full-stack blogging platform with authentication and user-owned content.",
                  features: [
                    "JWT-based authentication and protected routes",
                    "Create, edit, delete blogs with ownership enforcement",
                    "Comment system with relational PostgreSQL data"
                  ],
                  links: [
                    { href: "https://github.com/victorvaladez1/postly", label: "GitHub" },
                    { href: "https://postly-blogs.vercel.app", label: "Live Demo" }
                  ],
                  techs: [
                    "React",
                    "Node.js",
                    "Express",
                    "PostgreSQL",
                  ],
                  delay: 200
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
                  className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 transition hover:bg-black/5 dark:hover:bg-white/10 flex flex-col justify-between"
                  data-aos="fade-up"
                  data-aos-delay={project.delay}
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <img src={project.logo} alt={`${project.title} Logo`} className="w-10 h-10 rounded-sm object-contain" />
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
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
                          className="underline underline-offset-4 opacity-80 hover:opacity-100 transition"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-400">
                      {project.techs.map((tech, i) => (
                        <span className="border border-black/10 dark:border-white/10 px-2 py-1 rounded-full opacity-80">
                        {tech}
                      </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="github"
        className="bg-white dark:bg-black text-black dark:text-white py-24 px-8 transition-colors text-center duration-300"
      >
        <div className="max-w-6xl mx-auto border-t border-black/10 dark:border-white/10 pt-16">
          <div data-aos="fade-up" className="space-y-6">
            <GitHubStats />
          </div>
        </div>
      </section>

      <section
        id="wakatime"
        className="bg-white dark:bg-black text-black dark:text-white py-24 px-8 transition-colors text-center duration-300"
      >
        <div className="max-w-6xl mx-auto border-t border-black/10 dark:border-white/10 pt-16">
          <div className="max-w-xl mx-auto" data-aos="fade-up">
            <h2 className="text-2xl font-bold tracking-tight mb-2">WakaTime</h2>
            <p className="text-gray-700 dark:text-gray-400 mb-6">
              Last 7 days of coding activity (personal tracking).
            </p>
            <WakaTimeStats />
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section
        id="photography"
        className="bg-white dark:bg-black text-black dark:text-white py-24 px-8 transition-colors text-center duration-300"
      >
        <div className="max-w-6xl mx-auto border-t border-black/10 dark:border-white/10 pt-16">
          <div className="max-w-xl mx-auto" data-aos="fade-up">
            <PhotographyGallery/>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        className="bg-white dark:bg-black text-black dark:text-white py-24 px-8 transition-colors text-center duration-300"
      >
        <div className="max-w-6xl mx-auto border-t border-black/10 dark:border-white/10 pt-16">
          <div className="max-w-xl mx-auto" data-aos="fade-up">
            <h2 className="text-2xl font-bold tracking-tight marker:mb-4">Send Me a Message</h2>
            <p className="text-gray-700 dark:text-gray-400 mb-6">
              Reach out directly from here!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section
        id="connect"
        className="bg-white dark:bg-black text-black dark:text-white py-24 px-8 transition-colors text-center duration-300"
      >
        <div className="max-w-6xl mx-auto border-t border-black/10 dark:border-white/10 pt-16">
          <div className="max-w-xl mx-auto" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">Let's Connect</h2>
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
        </div>
      </section>
      </div>
    </div>
  );
}

export default App;
