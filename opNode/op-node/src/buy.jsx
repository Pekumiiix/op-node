function Buy() {
  return (
    <section className="buy-section">
      <div className="buy-card">
        <button>
          <i className="fa-solid fa-wallet" style={{ color: "#FC72FF" }}></i>
          Connect Wallet
        </button>
      </div>

      <div className="buy-det-ctn">
        <p className="section-header w-fit">BUY $OPN</p>

        <p className="buy-description">How to Buy $OPN?</p>

        <p className="buy-det">
          To buy $OPN, Connect your onchain wallet; select an amount of $ETH To
          sell in exchange for $OPN and Approve Transaction - you can also copy
          the CA and trade in your preferred Bot. <br /> <br /> Soon You will
          also buy $OPN on a wide variety of Centralized exchanges, like
          Crypto.com, Kucoin, Bybit and others.
        </p>

        <p className="address">0xa544C25676D667Bdf67D370CBaB5A75739C22a78</p>
      </div>
    </section>
  );
}

export default Buy;
