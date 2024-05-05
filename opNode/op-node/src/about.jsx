import sectionLogo from "./assets/svg25.svg";
import aboutImg from "./assets/about-img.webp";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-det-ctn">
        <img src={sectionLogo} alt="OpNode Logo" />

        <h2>An innovative leap forward in decentralized computing</h2>

        <div className="bar"></div>

        <p>
          OPNODE represents an innovative leap forward in decentralized
          computing, focusing on GPU/NODE lending and renting while offering an
          extensive suite of decentralized cloud solutions. Our platform
          empowers users by providing access to high-level nodes, light speed
          router devices, advanced GPUs, and robust hosting services, all
          underpinned by a steadfast commitment to security, scalability, and
          community-driven development.
        </p>
      </div>

      <img src={aboutImg} alt="Illustration" className="about-illus" />
    </section>
  );
}

export default About;
