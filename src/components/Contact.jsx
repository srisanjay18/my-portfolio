import { Mail} from "lucide-react";

function Contact() {
  return (
    <section className="contact section" id="contact">

      <div className="section-heading">
        <span className="section-label">GET IN TOUCH</span>
        <h2>Let's Connect<span>.</span></h2>
        <p>
          I'm always interested in exploring new opportunities,
          collaborating on projects, and connecting with people
          in technology.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-card">
          <div className="contact-icon">
            <Mail size={28} />
          </div>

          <h3>Have an opportunity?</h3>

          <p>
            Feel free to reach out. I'd be happy to connect
            and discuss opportunities.
          </p>

          <a
  href="mailto:srisanjay486@gmail.com"
  className="contact-email"
>
  <Mail size={18} />
  srisanjay486@gmail.com
</a>
        </div>

        <div className="contact-socials">

          <a
            href="https://github.com/srisanjay18"
            target="_blank"
            rel="noreferrer"
          >
            <img
  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
  alt="GitHub"
  className="brand-icon"
/>
          </a>

          <a
            href="https://linkedin.com/in/srisanjay18"
            target="_blank"
            rel="noreferrer"
          >
            <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
    alt="LinkedIn" 
    className="brand-icon"       
  />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;