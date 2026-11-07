import {
  Code2,
  Globe,
  Database,
  Cpu,
  Wrench
} from "lucide-react";

function Skills() {

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 />,
      skills: ["Java", "C", "C++", "JavaScript"]
    },
    {
      title: "Web Development",
      icon: <Globe />,
      skills: ["HTML", "CSS", "React.js"]
    },
    {
      title: "Database",
      icon: <Database />,
      skills: ["MySQL", "SQL"]
    },
    {
      title: "Core Technologies",
      icon: <Cpu />,
      skills: ["Embedded Systems", "IoT", "Arduino"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench />,
      skills: ["Git", "GitHub", "VS Code", "MATLAB"]
    }
  ];

  return (
    <section className="skills section" id="skills">

      <div className="section-heading">
        <span>WHAT I WORK WITH</span>
        <h2>Technical Skills<span>.</span></h2>
      </div>

      <div className="skills-grid">

        {skillCategories.map((category, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {category.icon}
            </div>

            <h3>{category.title}</h3>

            <div className="skill-tags">

              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;