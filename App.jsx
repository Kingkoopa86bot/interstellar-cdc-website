import React from "react";
import { createRoot } from "react-dom/client";
import { Home, Users, HandHeart, Hammer, Mail, MapPin, ShieldCheck } from "lucide-react";
import "./style.css";

function ProgramCard({ icon, title, children }) {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function App() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">Interstellar CDC</div>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#support">Support</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroInner">
          <div>
            <p className="eyebrow">Texas Nonprofit Corporation</p>
            <h1>Building Housing Stability and Economic Opportunity Across Texas</h1>
            <p className="lead">
              Interstellar Community Development Corporation advances affordable housing initiatives,
              veteran housing support, workforce training, financial education, and community development
              solutions for underserved populations.
            </p>
            <div className="actions">
              <a className="btn primary" href="#support">Support Our Mission</a>
              <a className="btn secondary" href="#programs">Explore Programs</a>
            </div>
          </div>

          <div className="missionBox">
            <h2>Mission Focus</h2>
            <ul>
              <li>Tiny home and modular housing initiatives</li>
              <li>Veteran housing stabilization</li>
              <li>Workforce training and economic mobility</li>
              <li>Financial literacy and public education</li>
              <li>Community development partnerships</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="section soft">
        <div className="wrap center">
          <p className="eyebrow dark">About the Organization</p>
          <h2>Future-focused community infrastructure.</h2>
          <p className="bodyText">
            Interstellar Community Development Corporation exists to create scalable, community-driven
            solutions addressing housing insecurity, veteran support, workforce advancement, and long-term
            economic mobility throughout Texas. The organization focuses on innovative housing initiatives,
            strategic partnerships, workforce pathways, and sustainable community development infrastructure.
          </p>
        </div>
      </section>

      <section id="programs" className="section">
        <div className="wrap">
          <div className="center intro">
            <p className="eyebrow dark">Core Programs</p>
            <h2>Built for measurable public benefit.</h2>
            <p className="bodyText">
              Our program model combines housing stability, workforce development, veteran support,
              and community partnerships into one integrated public-benefit framework.
            </p>
          </div>

          <div className="grid">
            <ProgramCard icon={<Home size={30} />} title="Affordable Housing">
              Supporting tiny home, modular housing, and workforce housing initiatives designed to increase housing access and stability.
            </ProgramCard>

            <ProgramCard icon={<ShieldCheck size={30} />} title="Veteran Support">
              Connecting veterans with housing resources, stabilization pathways, workforce opportunities, and community support systems.
            </ProgramCard>

            <ProgramCard icon={<Hammer size={30} />} title="Workforce Development">
              Advancing job readiness, vocational exposure, entrepreneurship education, and financial-literacy programming.
            </ProgramCard>

            <ProgramCard icon={<Users size={30} />} title="Community Partnerships">
              Collaborating with municipalities, nonprofits, developers, workforce boards, service providers, and public-benefit partners.
            </ProgramCard>
          </div>
        </div>
      </section>

      <section className="section darkSection">
        <div className="wrap center">
          <p className="eyebrow">Strategic Vision</p>
          <h2>A new model for Texas community development.</h2>
          <p className="bodyText light">
            Interstellar CDC seeks to become a future-focused housing and workforce infrastructure organization
            by combining affordable housing development, workforce readiness, veteran support systems,
            and public-private partnerships into scalable initiatives capable of generating measurable impact.
          </p>
        </div>
      </section>

      <section id="support" className="section soft">
        <div className="wrap narrow supportBox">
          <HandHeart size={42} />
          <h2>Support the Mission</h2>
          <p>
            Contributions and partnerships help advance planning, outreach, housing initiatives,
            workforce-development programs, and community infrastructure work.
          </p>
          <div className="notice">
            Interstellar Community Development Corporation has submitted its application for recognition
            of exemption under Section 501(c)(3) of the Internal Revenue Code and is awaiting IRS determination.
          </div>
          <a className="btn primary" href="mailto:info@interstellarcdc.org">Contact Us to Support</a>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="wrap contactGrid">
          <div>
            <p className="eyebrow dark">Contact</p>
            <h2>Partner with Interstellar CDC.</h2>
            <p className="bodyText">
              For partnerships, grants, housing collaboration, workforce initiatives, vendor discussions,
              or community development opportunities, contact the organization below.
            </p>
            <p className="contactLine"><Mail size={20} /> info@interstellarcdc.org</p>
            <p className="contactLine"><MapPin size={20} /> Texas, United States</p>
          </div>

          <form className="form" action="mailto:info@interstellarcdc.org" method="post" encType="text/plain">
            <input placeholder="Full Name" />
            <input placeholder="Email Address" type="email" />
            <textarea placeholder="Message" rows="6"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <footer>
        <div>
          <strong>Interstellar Community Development Corporation</strong>
          <p>Housing • Workforce • Veterans • Community Development</p>
        </div>
        <p>© 2026 Interstellar CDC. All rights reserved.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
