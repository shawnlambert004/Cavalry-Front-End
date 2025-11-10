import React, {useContext} from 'react'
import './Home.css'

const Home = () => {
  const SearchCrypto = async() => {
    const url = 'https://pro-api.coingecko.com/api/v3/coins/markets';
    const options = {method: 'GET', headers: {'x-cg-pro-api-key': '***'}, body: undefined};
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='Home'>
      <div className='hero'>
      <h1>Track Real Assets. Build Real Value</h1>
      <form>
        <input type="text" placeholder='Search Currencies...'/>
        <button type='submit' onClick={SearchCrypto}>Search</button>
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