import conclusionImage from "./assets/conclusion.webp";

function Conclusion() {
  return (
    <section className="conclusion">
      <div className="conclusion-card">
        <p className="section-header">Conclusion</p>

        <p className="conclusion-description">
          OPNODE is redefining the landscape of decentralized computing by
          integrating groundbreaking GPU/NODE lending and rental schemes, paired
          with robust array of cloud-based services. <br /> <br /> With devotion
          to ensuring user security, enabling user control, and deploying
          scalable design, OPNODE is not merely fabricating a platform, but
          fostering a community primed to spearhead the upcoming surge of
          digital evolution.
        </p>

        <img src={conclusionImage} alt="Earth's Top View" />
      </div>

      <div className="conclusion-extra">
        <span className="extra">
          <p className="extra-det">BUY / SELL TAX:</p>
          <p className="extra-figs">5%</p>
        </span>

        <span className="extra">
          <p className="extra-det">SUPPLY</p>
          <p className="extra-figs">1M</p>
        </span>

        <span className="extra">
          <p className="extra-det">REV SHARE</p>
          <p className="extra-figs">2%</p>
        </span>
      </div>
    </section>
  );
}

export default Conclusion;
