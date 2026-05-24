import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={24} />
              <div>
                <h3>Email</h3>
                <p><a href="mailto:contact@interstellarcdc.org">contact@interstellarcdc.org</a></p>
              </div>
            </div>
            <div className="contact-item">
              <Phone size={24} />
              <div>
                <h3>Phone</h3>
                <p><a href="tel:+1234567890">(123) 456-7890</a></p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <h3>Location</h3>
                <p>Texas, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;