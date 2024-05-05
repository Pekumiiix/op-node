import base from "./assets/base.webp";
import celestia from "./assets/celestia.webp";
import linea from "./assets/linea.webp";
import optimism from "./assets/optimism.webp";
import shardeum from "./assets/shardeum.webp";
import starknet from "./assets/starknet.webp";
import taiko from "./assets/taiko.webp";

function Ecosystem() {
  const images = [
    { imgSrc: base, text: "Base Logo" },
    { imgSrc: celestia, text: "Celestia Logo" },
    { imgSrc: linea, text: "Linea Logo" },
    { imgSrc: optimism, text: "Optimism Logo" },
    { imgSrc: shardeum, text: "Shardeum Logo" },
    { imgSrc: starknet, text: "Starknet Logo" },
    { imgSrc: taiko, text: "Taiko Logo" },
  ];

  return (
    <div className="ecosystem-section">
      <p>BUILDING FOR A LARGE ECOSYSTEM</p>

      <div className="ecosystem-img-ctn">
        {images.map((image, index) => (
          <img key={index} src={image.imgSrc} alt={image.text} />
        ))}
      </div>
    </div>
  );
}

export default Ecosystem;
