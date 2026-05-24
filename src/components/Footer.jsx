import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Interstellar Community Development Corporation. All rights reserved.</p>
        <p>A Texas nonprofit organization dedicated to community development and empowerment.</p>
      </div>
    </footer>
  );
}

export default Footer;