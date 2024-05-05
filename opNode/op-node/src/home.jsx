import twitterLogo from "./assets/twitter.svg";
import logo from "./assets/logo.svg";
import mediumLogo from "./assets/medium.svg";

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <span className="details">
          <p>
            <img src={logo} alt="OpNode Logo" />
            OpNode is a leading Decentralised Data Warehouse
          </p>
          <button>Learn more</button>
        </span>

        <h1>
          Supercharging Decentralized Computing with Advanced Cloud Solutions
        </h1>

        <p className="description">
          OpNode brings together Advanced AI powered Computing; GPU/NODE lending
          and renting while offering an extensive suite of decentralized cloud
          solutions.
        </p>

        <button className="start-building">Start Building</button>

        <div className="links">
          <a href="">
            <img src={twitterLogo} alt="Twitter Logo" />
          </a>

          <a href="">
            <i className="fa-brands fa-medium" style={{ color: "#921519" }}></i>
          </a>

          <a href="">
            <i
              className="fa-brands fa-telegram"
              style={{ color: "#921519" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
