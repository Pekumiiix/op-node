function Commitment() {
  return (
    <section className="commitment">
      <p className="commitment-header">
        Our Commitment Extends To Regular Security Assessments And Updates,
        Ensuring The Platform Adheres To The Highest Standards Of Data
        Protection And User Privacy.
      </p>

      <div className="commitment-card-ctn">
        <div className="commitment-card">
          <i className="fa-regular fa-comment" style={{ color: "#ff0000" }}></i>

          <p className="commitment-card-header">Web3 Infrastructure</p>

          <p className="commitment-card-det">
            Individuals and Projects can utilize OpNode for hosting and
            maintaining their Web3 infrastructure, contributing to the
            decentralization of the internet.
          </p>
        </div>

        <div className="commitment-card">
          <i
            className="fa-solid fa-bolt-lightning"
            style={{ color: "#ff0000" }}
          ></i>

          <p className="commitment-card-header">AI and Machine Learning</p>

          <p className="commitment-card-det">
            High level users can access the OpNode Ultra-fast GPU computing
            power for Complex Tasks such as decentralized AI Model training, and
            data processing.
          </p>
        </div>

        <div className="commitment-card">
          <i
            className="fa-solid fa-chart-simple"
            style={{ color: "#ff0000" }}
          ></i>

          <p className="commitment-card-header">
            Decentralized GPU Cloud Hostin
          </p>

          <p className="commitment-card-det">
            Builders on the OpNode Community can leverage it high speed Nodes
            and GPU marketplace to deploy and host their dapp; ensuring high
            availability and reliability.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Commitment;
