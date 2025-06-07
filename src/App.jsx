import './index.css';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center text-center p-8">
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

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-gray-950 text-white py-20 px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card Example */}
            <div className="bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-800 hover:shadow-blue-500/30 transition">
              <h3 className="text-xl font-semibold mb-2">AccountAbility</h3>
              <p className="text-gray-400 text-sm mb-4">
                A full-stack finance tracker built with the MERN stack. Lets users track assets, debts, and view visual analytics.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/yourusername/accountability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://accountability-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
