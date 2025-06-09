import './index.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import NowPlayingComponent from "./components/NowPlayingComponent.jsx";
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
            <li><a href="/resume.pdf" className="hover:text-blue-400 transition">Resume</a></li>
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
            <a href="/resume.pdf" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400">Resume</a>
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
            Download Resume
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

        {/* Now Playing widget */}
        <div className="mt-10 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <NowPlayingComponent />
        </div>
      </section>

 

    </>
  );
}

export default App;