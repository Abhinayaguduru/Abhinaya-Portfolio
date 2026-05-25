import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <div className="hero-badge">
          Available for AI/ML internships & placements
        </div>

        <h1>
          Hi, I'm <span>Guduru Abhinaya</span>
        </h1>

        <h2>AI & ML Engineer</h2>

        <p>
        AI & ML student passionate about building
          intelligent AI solutions and modern web applications.
        </p>

        <div className="hero-buttons">

          <a href="#projects">
            <button className="primary-btn">
              View Projects →
            </button>
          </a>

          <a href="/resume.pdf" download>
            <button className="secondary-btn">
              Download Resume
            </button>
          </a>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/Abhinayaguduru"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/abhinayaguduru"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:guduruabhinaya24@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="image-circle">
          <img src="/profile.jpg" alt="profile" />
        </div>

      </div>

    </section>
  );
}

export default Hero;