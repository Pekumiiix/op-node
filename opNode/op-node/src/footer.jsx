import footerLogo from "./assets/footerLogo.svg";
import gitbook2 from "./assets/gitbook2.png";

function Footer() {
  return (
    <footer>
      <img src={footerLogo} alt="OpNode Logo" className="footer-logo" />

      <div className="footer-right">
        <div className="footer-link-ctn">
          <a href="#">
            <i
              className="fa-brands fa-twitter fa-lg"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
          <a href="#">
            <i
              className="fa-brands fa-medium fa-lg"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
          <a href="#">
            <img src={gitbook2} alt="Gitbook Logo" />
          </a>
        </div>
        <p>All Rights Reserved - OpNode Technologies 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
