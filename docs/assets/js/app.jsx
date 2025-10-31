const { useState, useEffect } = React;

function Header(){
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="brand">Your Name</h1>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Projects(){
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('data/projects.json')
      .then(r => r.ok ? r.json() : Promise.reject('Bad response'))
      .then(json => {
        setProjects(json.projects || []);
      })
      .catch(err => {
        console.warn('Could not load projects.json, using empty list', err);
        setProjects([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="container">
      <h2>Projects</h2>
      {loading ? <p>Loading projects...</p> : null}
      <div id="projects-grid" className="grid">
        {projects.length === 0 && !loading ? (
          <div className="card">No projects found. Add projects to <code>docs/data/projects.json</code>.</div>
        ) : projects.map((p, i) => (
          <article className="card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div>
              {(p.tags || []).map((t, j) => <span className="tag" key={j}>{t}</span>)}
            </div>
            <p style={{marginTop:12}}>
              {p.link && p.link !== '#' ? <a href={p.link} target="_blank" rel="noopener">Live</a> : null}
              {' '}
              {p.repo ? <a href={p.repo} target="_blank" rel="noopener">Repo</a> : null}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function About(){
  return (
    <section id="about" className="container">
      <h2>About me</h2>
      <p>Brief bio goes here. Mention your skills like Python, SQL, machine learning, visualization, and the type of data work you enjoy.</p>
    </section>
  );
}

function Resume(){
  return (
    <section id="resume" className="container">
      <h2>Resume</h2>
      <p>Download my resume: <a href="assets/resume.pdf" id="resume-link">Resume (PDF)</a></p>
      <p>If you don't have a PDF yet, add one at <code>docs/assets/resume.pdf</code> and this link will work.</p>
    </section>
  );
}

function Contact(){
  return (
    <section id="contact" className="container">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      <p>GitHub: <a href="https://github.com/USERNAME" target="_blank" rel="noopener">@USERNAME</a></p>
    </section>
  );
}

function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">© {new Date().getFullYear()} Your Name — Built with React (CDN)</div>
    </footer>
  );
}

function App(){
  return (
    <div>
      <Header />
      <main>
        <section className="hero container">
          <h2>Data projects, analysis, and models</h2>
          <p>Welcome! I'm a data scientist/analyst — explore my projects below.</p>
        </section>
        <Projects />
        <About />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
