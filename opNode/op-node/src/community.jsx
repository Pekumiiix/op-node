import community from "./assets/community.webp";
import topRight from "./assets/top-right.svg";
import gitbook from "./assets/gitbook1.png";

function Community() {
  const cards = [
    {
      icon: (
        <i className="fa-brands fa-twitter" style={{ color: "#ff5634" }}></i>
      ),
      text: "Stay updated with all of the newand amazing things Opnode is doing on X",
      media: "Follow us on X",
    },
    {
      icon: (
        <i className="fa-brands fa-medium" style={{ color: "#ff5634" }}></i>
      ),
      text: "Tap into a wide array of Opnode's meticulousyly crafted Medium Blogs",
      media: "Stay Updated on Blogs",
    },
  ];
  return (
    <section className="community">
      <div className="community-det-ctn">
        <div className="community-det">
          <p className="community-header">
            We are a Rapidly growing, global community of $OPN Fans
          </p>
          <p className="community-description">
            Join a fast-growing community of developers and innovators connected
            all over the world, building the new era of the internet.
          </p>
        </div>

        <img src={community} alt="Illustration" />
      </div>

      <div className="community-card-ctn">
        {cards.map((card, index) => (
          <a href="#" className="community-card" key={index}>
            {card.icon}

            <span className="community-card-nav">
              <p className="flex items-center gap-3 leading-none">
                {card.media}

                <i
                  className="fa-solid fa-arrow-up-right-from-square"
                  style={{ color: "#7a4b4b" }}
                ></i>
              </p>

              <p className="community-card-det">{card.text}</p>
            </span>
          </a>
        ))}

        <a href="#" className="community-card">
          <img src={gitbook} alt="Gitbook Logo" />

          <span className="community-card-nav">
            <p className="flex items-center gap-3 leading-none">
              Start Building
              <i
                className="fa-solid fa-arrow-up-right-from-square"
                style={{ color: "#7a4b4b" }}
              ></i>
            </p>

            <p className="community-card-det">
              Start building; lending GPU with Opnode's software when you read
              the docs
            </p>
          </span>
        </a>
      </div>
      <img
        src={topRight}
        alt="Corner illustration"
        className="corner top-right"
      />
      <img
        src={topRight}
        alt="Corner illustration"
        className="corner bottom-right"
      />
      <img
        src={topRight}
        alt="Corner illustration"
        className="corner top-left"
      />
      <img
        src={topRight}
        alt="Corner illustration"
        className="corner bottom-left"
      />
    </section>
  );
}

export default Community;
