import "./App.css";
import News from "./Components/News";
import Nav from "./Components/Nav";

function App() {

  let newsData = [
    {
      id: "id1",
      title: "PayPal enables transfer of digital currencies to external wallets",
      imgUrl: "https://cdn.pixabay.com/photo/2018/03/08/08/21/bitcoin-3208072__340.jpg",
      news: "The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform. After rolling out the ability to buy and sell crypto on its platform in October 2020, PayPal is finally allowing users the ability to natively transfer, send and receive digital assets between PayPal other wallets and exchanges. As of Tuesday, the feature is available to select U.S. users, with the feature expanding to all eligible U.S. users in the coming weeks. The first batch of supported coins consists of Bitcoin BTC $16,704, Ether  ETH $1,217, Bitcoin Cash BCH $100, and Litecoin LTC $74.58. Crypto transfers to recipients outside of PayPal would incur a network fee based on their respective blockchains, but transfers between PayPal users will not incur such fees. To protect users' privacy, the firm generates a new recipient address for each transaction into one's PayPal account. PayPal will also not charge fees for incoming transfers,The company is also working to integrate other forms of cryptocurrency services, such as central bank digital currencies, to boost its digital footprint. It is also exploring the possibility of launching its own stablecoin, dubbed PayPal Coin. The discovery came after a developer found evidence of such a stablecoin within the source code of the company's iPhone app"
    },
    {
      id: "id2",
      title: "Prime Minister Giorgia Meloni's new bill also includes an incentive for those declaring crypto for tax purposes",
      imgUrl: "https://cdn.pixabay.com/photo/2017/12/17/14/12/bitcoin-3024279_960_720.jpg",
      news: "Crypto traders in Italy will be subject to a 26% capital-gains tax starting in 2023, according to a new budget that won parliamentary approval on Thursday.Italian Prime Minister Giorgia Meloni's 2023 expansionary budget – which was completed in a rush before the end of the year – features 21 billion euros ($22.3 billion) in tax breaks to assist businesses and households facing the energy crisis, Reuters reported.Italy's (and most recently Portugal's) move to introduce a capital-gains tax on crypto comes ahead of the implementation of the European Union's Markets in Crypto Assets (MiCA) regulation that promises a licensing frameworks and stringent operating requirements for crypto-service providers in the 27-member bloc.The 26% rate applies to gains from crypto trading if they exceed 2,000 euros per tax period. As an incentive for declaring crypto profits, the new bill also sets a 'substitute income tax' for investors at 14% of the value of the assets held as of Jan. 1, 2023, instead of the cost at the time of purchase.According to the new rules, losses from crypto investments can be deducted from profits and be carried forward.Investors, however, may require some additional guidance on what qualifies as a taxable event as the document also says, 'the exchange between crypto assets having same characteristics and functions,' doesn't constitute a 'fiscal case.'"
    },
    {
      id: "id3",
      title: "Bitcoin Miners’ Revenue Hits $9.55 Billion in 2022",
      imgUrl: "https://cdn.pixabay.com/photo/2018/02/05/16/21/bitcoin-3132574__340.jpg",
      news: "Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. This year, the world’s largest cryptocurrency has emerged as ‘the institutional-grade digital asset,’ said Microstrategy founder Michael Saylor.Microstrategy Acquires More Bitcoin Nasdaq-listed Microstrategy Inc. announced Wednesday that it has purchased more bitcoin for its corporate treasury. Michael Saylor, the company’s founder and executive chairman, tweeted Wednesday: Microstrategy has increased its bitcoin holdings by ~2,500 BTC. As of 12/27/22 Microstrategy holds ~132,500 bitcoin acquired for ~$4.03 billion at an average price of ~$30,397 per bitcoin.In its filing with the U.S. Securities and Exchange Commission (SEC), Microstrategy clarified that the 2,500 coins were acquired between Nov. 1 and Dec. 24 by its wholly owned subsidiary Macrostrategy.The subsidiary bought approximately 2,395 BTC at an average price of $17,871 per coin between Nov. 1 and Dec. 21. It then sold about 704 BTC at $16,776 per coin on Dec. 22. Macrostrategy then bought about 810 more BTC at $16,845 per coin on Dec. 24. At the time of writing, bitcoin is trading at $16,656.80.The bitcoin sale in December marked the first time Microstrategy sold its bitcoin since it began accumulating the crypto for its corporate treasury in 2020. The company cited tax reasons for selling BTC. ‘Microstrategy plans to carry back the capital losses resulting from this transaction against previous capital gains, to the extent such carrybacks are available under the federal income tax laws currently in effect, which may generate a tax benefit,’ the SEC filing describes.Saylor said in an interview last week:The most positive thing of the year is the emergence of bitcoin as the institutional grade digital asset and the clarity that … there is one crypto asset that’s a digital commodity … Bitcoin is that commodity.The executive noted that both the chairman of the SEC and the chair of the Commodity Futures Trading Commission (CFTC) have confirmed that bitcoin is a commodity.Saylor previously explained that Microstrategy is investing in BTC ‘for the long term.’ He added: ‘Our strategy is to buy bitcoin and hold the bitcoin, so there’s no price target … I expect bitcoin is going to go into the millions. So, we’re very patient. We think it’s the future of money."
    }
  ];

  return (
    <div className="app">
      <Nav></Nav>
      {newsData.map((data)=>{
        return <News key = {data.id} title = {data.title} url = {data.imgUrl} news = {data.news}></News>
      })}
    </div>
  );
}

export default App;
