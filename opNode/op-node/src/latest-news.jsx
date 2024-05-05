import newCardImageOne from "./assets/news-card1.webp";
import newCardImageTwo from "./assets/news-card2.webp";
import newCardImageThree from "./assets/news-card3.webp";

function LatestNews() {
  const cards = [
    {
      imgSrc: newCardImageOne,
      tag: "rewards",
      details:
        "Leveraging ETH Chain To Launch And Reward Active Holders of $Opnode",
    },
    {
      imgSrc: newCardImageTwo,
      tag: "partnerships",
      details:
        "Infrastucture For High Level AI Processing Partnered With Interoperable Apps Coming To OpNode Pow...",
    },
    {
      imgSrc: newCardImageThree,
      tag: "ecosystem",
      details:
        "OpNode Ticker Trading Coming To Ethereum This Week For Real-Time, Active Trading",
    },
  ];

  return (
    <section className="news">
      <div className="news-nav">
        <p className="section-description">Latest News</p>

        <div className="news-link-ctn">
          <a href="#" className="join-tg">
            Join Telegram Announcement
          </a>
          <a href="#" className="blog">
            Go to Blog
          </a>
        </div>
      </div>

      <div className="news-card-ctn">
        {cards.map((card, index) => (
          <a href="#" className="news-card" key={index}>
            <img src={card.imgSrc} alt="Illustration" />

            <div className="news-card-det-ctn">
              <div className="card-nav">
                <p className={card.tag}>{card.tag.toUpperCase()}</p>
                <div className="news-dot"></div>
                <div className="news-date">March 26, 2024</div>
              </div>
              <p className="news-det">{card.details}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default LatestNews;
