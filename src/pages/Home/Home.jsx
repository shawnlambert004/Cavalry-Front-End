import React, {useState} from 'react'
import './Home.css'

const Home = () => {
  const [data1, setData] = useState([]);
  const [coinSym, set_coinSym] = useState([]);
  const [currentPrice, set_currentPrice] = useState([]);
  const [priceChange24, set_priceChange24] = useState([]);
  const [coin_name, setName] = useState([]);
  const [coiny, set_coin] = useState([]);
  const [result, setRes] = useState(false);
  const [Imgsrc, setSrc] = useState([]);

  const SearchCrypto = async () => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
    const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-xaobEyQyzF4Yy7MdStgEFZzZ'}, body: undefined};
    setRes(true)
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      set_coinSym(data.map((item,index) => (item.symbol)));
      set_currentPrice(data.map((item,index) => (item.current_price)));
      set_priceChange24(data.map((item,index) => (item.price_change_percentage_24h)));
      setName(data.map((item, index) => (item.name)));
      setSrc(data.map((item,index) => (item.image)));
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
        <thead>
        <tr>
          <th>Icon</th>
          <th>Currency</th>
          <th>Price (USD)</th>
          <th>24h Change</th>
        </tr>
        </thead>
        <tbody>
          {currentPrice.map((item, index) => (
            <tr key={index}>
            <td><img className="icon" src={Imgsrc[index]}/></td>
            <td>{coin_name[index] + " " + "(" + coinSym[index] + ")"}</td>
            <td>{item}</td>
            <td style={{color:priceChange24[index]>0?'#008000':'#FF0000'}}>{priceChange24[index] + "%"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home