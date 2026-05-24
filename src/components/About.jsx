import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Interstellar CDC</h2>
          <p>
            Interstellar Community Development Corporation is a Texas nonprofit organization dedicated to advancing the well-being of our communities through comprehensive programs and services.
          </p>
          <p>
            Our mission is to create pathways to stability and opportunity by providing:
          </p>
          <ul>
            <li>Housing stability initiatives</li>
            <li>Veteran support services</li>
            <li>Workforce development programs</li>
            <li>Financial education and literacy</li>
            <li>Community development projects</li>
          </ul>
          <p>
            We believe in empowering individuals and families to achieve their full potential and build stronger, more resilient communities across Texas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;