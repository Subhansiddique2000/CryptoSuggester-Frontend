import Head from 'next/head'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard';
import Header from '../components/Header'
import Image from "next/image"
import BuySuggester from '../components/BuySuggester';
import SellSuggester from '../components/SellSuggester';


export default function Home({exchangeAData, exchangeBbitcoin,exchangeBethereum,}) {
  return (
    <div className=" bg-x">
      <Head>
        <title>Cryptocurrency Suggester</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className = 'max-w-7xl mx-auto px-8 sm:px-16 '>
        <section className='pt-6'>
          <h2 className= 'text-2xl text-x font-semibold'>Prices at CoinGecko</h2>
          {/* Pull some data from API */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {exchangeAData?.map(({name, symbol, image, current_price,}) => (
            <SmallCard 
            key={image}
            image={image} 
            symbol={symbol} 
            name={name} 
            current_price={current_price}/>
          ))}
          </div>
        </section>
        <section className='pt-6'>
          <h2 className= 'text-2xl text-x font-semibold'>Prices at Coinpaprika</h2>
          {/* Pull some data from API */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div>
          {exchangeBbitcoin?.map(({open, market_cap}) => (
            <SmallCard 
            key={market_cap}
            image={"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"} 
            symbol={'btc'} 
            name={`Bitcoin`} 
            current_price={open}
            />
          ))}
          </div>
          <div>
          {exchangeBethereum?.map(({open, market_cap}) => (
            <SmallCard 
            key={market_cap}
            image={"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"} 
            symbol={'eth'} 
            name={`Ethereum`} 
            current_price={open}
            />
          ))}
          </div>
          </div>
        </section>
        {/* BUY */}
        <section className='pt-6'>
          <h2 className= 'text-2xl text-x font-semibold'>Buy your Crypto Here</h2>
          {/* Pull some data from API */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <BuySuggester 
        priceA = {exchangeAData[0].current_price}
        priceB = {exchangeBbitcoin.open}
        name = {exchangeAData[0].name}
        image= {exchangeAData[0].image}
        symbol = {exchangeAData[0].symbol}
        />
        <BuySuggester 
        priceA = {exchangeAData[1].current_price}
        priceB = {exchangeBethereum.open}
        name = {exchangeAData[1].name}
        image= {exchangeAData[1].image}
        symbol = {exchangeAData[1].symbol}
        />
          </div>
        </section>
        {/* BUY */}
        {/* SELL */}
        <section className='pt-6'>
          <h2 className= 'text-2xl text-x font-semibold'>Sell your Crypto Here</h2>
          {/* Pull some data from API */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <SellSuggester 
        priceA = {exchangeAData[0].current_price}
        priceB = {exchangeBbitcoin.open}
        name = {exchangeAData[0].name}
        image= {exchangeAData[0].image}
        symbol = {exchangeAData[0].symbol}
        />
        <SellSuggester 
        priceA = {exchangeAData[1].current_price}
        priceB = {exchangeBethereum.open}
        name = {exchangeAData[1].name}
        image= {exchangeAData[1].image}
        symbol = {exchangeAData[1].symbol}
        />
          </div>
        </section>
        {/* SELL*/}
      </main>
    </div>
  )
}
export async function getStaticProps(){
  const exchangeAData = await fetch("http://localhost:8080/exchangeAData").then(
    (res) => res.json()
  );

  const exchangeBbitcoin = await fetch("http://localhost:8080/exchangeBbitcoin").then(
    (res) => res.json()
  );

  const exchangeBethereum = await fetch("http://localhost:8080/exchangeBethereum").then(
    (res) => res.json()
  );
  return{
    props: {
      exchangeAData,
      exchangeBbitcoin,
      exchangeBethereum,
    },
  };
}