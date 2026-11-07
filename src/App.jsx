
import Particles from "./components/Particles";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";

import {
  Mail,
  ArrowUpRight,
  Download,
  Code2
} from "lucide-react";

import "./App.css";

function App() {
  
  return (
    <div className="portfolio">

      <Particles />

      {/* Navigation */}

      <nav className="navbar">

        <div className="logo">
          Sri<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk <ArrowUpRight size={16} />
        </a>

      </nav>


      {/* Hero Section */}

      <section className="hero" id="home">

        <div className="hero-content">

          <div className="availability">
            <span className="status-dot"></span>
            Open to Opportunities
          </div>

          <p className="greeting">
            Hello, I'm
          </p>

          <h1>
            Sri Sanjay<span>.</span>
          </h1>

          <h2>
            Aspiring Software Engineer
          </h2>

          <p className="description">
            An Electronics and Communication Engineering student
            passionate about software development, problem solving,
            and building technology-driven solutions.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              Explore My Work <ArrowUpRight size={18} />
            </a>

            <a href="/resume.pdf" className="secondary-button">
              Download Resume <Download size={18} />
            </a>

          </div>

<div className="social-links">

  <a
    href="https://github.com/srisanjay18"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com/in/srisanjay18"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

  <a href="#contact" aria-label="Email">
    <Mail />
  </a>

</div>

        </div>


        {/* Decorative visual */}

        <div className="hero-visual">

          <div className="visual-circle">
            <Code2 size={100} strokeWidth={1} />
          </div>

          <div className="floating-card">
            <span>01</span>
            <p>Build. Learn. Innovate.</p>
          </div>

        </div>

      </section>
      <About />

<Skills />
<Projects />
<Experience />
<Contact />


      <footer>
        © 2026 Sri Sanjay. Built with React.
      </footer>

    </div>
  );
}

export default App;

<a href="/resume.pdf" download>
  Download Resume
</a>