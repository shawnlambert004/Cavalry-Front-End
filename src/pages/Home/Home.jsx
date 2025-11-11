import React, {useState} from 'react'
import './Home.css'

const Home = () => {
  const [data1, setData] = useState([]);
  const [coin_id, set_coin] = useState();

  const SearchCrypto = async () => {
    const now = new Date();
    const start = new Date(now.getTime() - 24 * 60 * 60 * 1000); 
    const url = `https://api.coinpaprika.com/v1/coins/${coin_id}/ohlcv/historical?start=${start.toISOString()}&end=${now.toISOString()}&interval=24h`;
    const options = { method: 'GET' };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }

  };
  return (
    <div className='Home'>
      <div className='hero'>
      <h1>Track Real Assets. Build Real Value</h1>
      <form>
        <input type="text" placeholder='Search Currencies...' onChange={(e) => set_coin(e.target.value)}/> 
        <button type='button' onClick={SearchCrypto}>Search</button>
      </form>
      </div>
      <div className="currencyTable">
        <div className="tablelayout">
          <p className='rank'>#</p>
          <p style={{textAlign: 'center'}}>Currency</p>
          <p style={{textAlign: 'center'}}>Price</p>
          <p style={{textAlign: 'center'}}>24h Change</p>
        </div>
      </div>
    </div>
  )
}

export default Home