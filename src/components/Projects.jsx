import {
  ArrowUpRight,
  Bot,
  Bus,
  Route
} from "lucide-react";

function Projects() {

  const projects = [
    {
      number: "01",
      title: "Nephele 3.0",
      subtitle: "AI-Powered Interactive Robot",
      description:
        "Contributed to the hardware development and integration of an AI-powered robot, focusing on motor control, robotic movement and hardware-software interaction.",
      technologies: [
        "Raspberry Pi",
        "Python",
        "NEMA 23",
        "TB6600",
        "Mecanum Wheels"
      ],
      icon: <Bot size={35} />,
      github: "https://github.com/srisanjay18/Nephele3.0"
    },

    {
      number: "02",
      title: "Bus Ticket Reservation",
      subtitle: "Java Application",
      description:
        "Developed a bus ticket reservation application using Java, applying object-oriented programming concepts to implement reservation-related functionality.",
      technologies: [
        "Java",
        "OOP"
      ],
      icon: <Bus size={35} />,
      github: "https://github.com/srisanjay18/java-project"
    },

    {
      number: "03",
      title: "PathFinder",
      subtitle: "Interactive Career Roadmap Generator",
      description:
        "Built an interactive web application that generates structured learning roadmaps for different career paths based on user selection.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      icon: <Route size={35} />,
      github: "https://github.com/srisanjay18/mini_project_roadmap"
    }
  ];

  return (
    <section className="projects section" id="projects">

      <div className="section-heading">
        <span>MY RECENT WORK</span>
        <h2>Featured Projects<span>.</span></h2>

        <p>
          A collection of projects where I turn ideas
          into practical solutions.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.number}>

            <div className="project-top">

              <span className="project-number">
                {project.number}
              </span>

              <div className="project-icon">
                {project.icon}
              </div>

            </div>

            <div className="project-content">

              <p className="project-subtitle">
                {project.subtitle}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tags">

                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Repository
                <span className="github-text">GH</span>
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;