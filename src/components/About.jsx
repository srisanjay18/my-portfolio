import { GraduationCap, Code, Lightbulb } from "lucide-react";

function About() {
  return (
    <section className="about section" id="about">

      <div className="section-heading">
        <span>GET TO KNOW ME</span>
        <h2>About Me<span>.</span></h2>
      </div>

      <div className="about-container">

        <div className="about-text">

          <h3>
            Building technology through
            <span> code and creativity.</span>
          </h3>

          <p>
            I am a final-year Electronics and Communication
            Engineering student with a strong interest in
            software development and emerging technologies.
          </p>

          <p>
            My technical interests include Java programming,
            problem-solving, web development, embedded systems
            and Internet of Things.
          </p>

          <p>
            I enjoy transforming ideas into practical solutions
            through continuous learning, experimentation and
            hands-on projects.
          </p>

        </div>

        <div className="about-cards">

          <div className="about-card">
            <GraduationCap size={28} />
            <h4>Education</h4>
            <p>Electronics & Communication Engineering</p>
          </div>

          <div className="about-card">
            <Code size={28} />
            <h4>Development</h4>
            <p>Java, Web Development & Problem Solving</p>
          </div>

          <div className="about-card">
            <Lightbulb size={28} />
            <h4>Interests</h4>
            <p>Software Engineering, Embedded Systems & IoT</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;