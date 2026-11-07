import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="section-heading">
        <span className="section-label">MY JOURNEY</span>
        <h2>Experience<span>.</span></h2>
        <p>Learning through practical exposure and real-world applications.</p>
      </div>

      <div className="experience-container">
        <div className="experience-card">

          <div className="experience-icon">
            <BriefcaseBusiness size={24} />
          </div>

          <div className="experience-content">
            <div className="experience-top">
              <div>
                <h3>Embedded Systems & IoT Intern</h3>
                <h4>Enthu Technology Solutions</h4>
              </div>
              <span className="experience-badge">Internship</span>
            </div>

            <div className="experience-meta">
              <span>
                <CalendarDays size={15} />
                1 Month
              </span>
              <span>
                <MapPin size={15} />
                Coimbatore, Tamil Nadu
              </span>
            </div>

            <ul className="experience-details">
  <li>
    Gained hands-on experience working with ESP32 and
    STM32 microcontroller platforms.
  </li>
  <li>
    Worked on sensor interfacing and integration with
    microcontroller-based systems.
  </li>
  <li>
    Explored hardware-software interaction and basic
    embedded system development.
  </li>
</ul>

            <div className="experience-tags">
  <span>ESP32</span>
  <span>STM32</span>
  <span>Sensor Interfacing</span>
  <span>Embedded Systems</span>
  <span>IoT</span>
</div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;