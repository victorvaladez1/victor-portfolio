import './index.css';

function App() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold mb-4">Victor Manuel Valadez</h1>
      <p className="text-xl text-gray-300 max-w-xl">
        Software Engineer | Full Stack | Robotics
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
  );
}

export default App;
