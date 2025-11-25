import React, {useState} from 'react'
import './Home.css'

const Home = () => {
  const [data1, setData] = useState([]);
  const [coinSym, set_coinSym] = useState([]);
  const [currentPrice, set_currentPrice] = useState([]);
  const [priceChange24, set_priceChange24] = useState([]);
  const [coiny, set_coin] = useState([]);
  const [result, setRes] = useState(false);

  const SearchCrypto = async () => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
    const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-xaobEyQyzF4Yy7MdStgEFZzZ'}, body: undefined};
    setRes(true)
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      set_coinSym(data.symbol);
      set_currentPrice(data.current_price);
      set_priceChange24(data.price_change_24h);
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
      <table className='Table'>
        <tr>
          <th>Currency</th>
          <th>Price</th>
          <th>24h Change</th>
        </tr>
      </table>
    </div>
  )
}

export default Home