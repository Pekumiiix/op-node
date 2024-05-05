import firstCardImage from "./assets/firstCard.webp";
import cpu from "./assets/cpu.webp";
import gpu from "./assets/gpu.webp";
import security from "./assets/security.webp";
import fast from "./assets/fast.webp";
import host from "./assets/host.webp";

function Features() {
  const cards = [
    {
      cardHeader: "High-Level Nodes",
      cardDetails:
        "OPNODE provides robust node solutions, delivering the computational horsepower needed for demanding tasks, ensuring reliability and performance at scale.",
      cardImage: cpu,
      isReversed: true,
    },
    {
      cardHeader: "Advanced GPUs",
      cardDetails:
        "Catering to a broad spectrum of processing needs, OPNODE facilitates access to top-tier GPU resources, ideal for graphics rendering, AI training, and other compute-intensive tasks.",
      cardImage: gpu,
      isReversed: false,
    },
    {
      cardHeader: "Robust Security Architecture",
      cardDetails:
        "OPNODE is fortified with cutting-edge security protocols, including advanced encryption, authentication mechanisms, and continuous network monitoring, safeguarding user activities and assets against evolving threats.",
      cardImage: security,
      isReversed: true,
    },
    {
      cardHeader: "Light Speed Router Devices:",
      cardDetails:
        "Our pioneering router technology is designed to accelerate data transmission within the decentralized network, optimizing connectivity and reducing latency.",
      cardImage: fast,
      isReversed: false,
    },
    {
      cardHeader: "Hosting Services",
      cardDetails:
        "Users benefit from decentralized hosting options, ensuring their digital assets and services operate within a secure, resilient, and independent infrastructure.",
      cardImage: host,
      isReversed: true,
    },
  ];

  return (
    <section className="features" id="features">
      <p className="section-header">Features</p>

      <p className="section-description">
        Core Functionalities and Strategic solutions on OpNode
      </p>

      <div className="features-card mb-10">
        <div className="card-det-ctn">
          <p className="card-header">
            GPU/NODE Lending and Renting Marketplace.
          </p>

          <p className="card-details">
            A dynamic marketplace + platform democratizing access to computing
            power, offering solutions for individuals and organizations alike,
            ensuring optimal resource allocation and enhanced efficiency across
            various applications
          </p>
        </div>

        <div className="card-image-ctn">
          <img src={firstCardImage} alt="Illustration" />
        </div>
      </div>

      {cards.map((card, index) => (
        <div
          className={`features-card-normal mb-10 ${
            card.isReversed
              ? "flex-row-reverse pr-[100px]"
              : "flex-row pl-[100px]"
          }`}
          key={index}
        >
          <div className="card-det-ctn">
            <p className="card-header">{card.cardHeader}</p>

            <p className="card-details">{card.cardDetails}</p>
          </div>

          <div className="card-image-ctn">
            <img src={card.cardImage} alt="Illustration" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Features;
