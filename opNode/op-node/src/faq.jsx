//import React, { useState } from "react";
import faqImage from "./assets/faq.webp";

function Faqs() {
  /*const [active, setActive] = useState(true);

  const handleClick = (index) => {
    setActive((prevState) => !prevState);
  };*/

  return (
    <section className="faq" id="faq">
      <div className="faq-det-ctn">
        <img src={faqImage} alt="Illustration" />

        <div className="section-ctn">
          <p className="section-header w-fit">FAQ</p>

          <p className="faq-description">What the FAQ?</p>
        </div>
      </div>

      <div className="faq-ctn">
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title">
            <div className="dot"></div>
            How does OpNode RWA increase it ecosystem growth?
          </div>
          <div className="collapse-content">
            <p>
              OpNode facilitates the buying and renting of high node servers,
              Web3 infrastructure, and GPU computing power. Additionally, the
              platform incorporates a robust revenue sharing mechanism for token
              holders, fostering a collaborative and community driven ecosystem.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title">
            <div className="dot"></div>
            What are the core attributes of OpNode Ecosystem
          </div>
          <div className="collapse-content">
            <p>
              OpNode lets you build an appchain that scales at a fraction of the
              cost of platform chains, while inheriting the built-in security of
              appchain architecture assured by OpNodes Hub.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title">
            <div className="dot"></div>
            What are the future plans for the OpNode Ecosystem
          </div>
          <div className="collapse-content">
            <p>
              OpNode lets you build an appchain that scales at a fraction of the
              cost of platform chains, while inheriting the built-in security of
              appchain architecture assured by OpNodes Hub.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title">
            <div className="dot"></div>
            What are the future plans for the OpNode Ecosystem
          </div>
          <div className="collapse-content">
            <p>
              OpNode lets you build an appchain that scales at a fraction of the
              cost of platform chains, while inheriting the built-in security of
              appchain architecture assured by OpNodes Hub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
