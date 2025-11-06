import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className='hero'>
      <h1>Track Real Assets. Build Real Value</h1>
      <form>
        <input type="text" placeholder='Search Commodies...'/>
        <button type='submit'>Search</button>
      </form>
      </div>
      <div className="commoditytable">
        <div className="tablelayout">
          <p className='rank'>#</p>
          <p style={{textAlign: 'center'}}>Commodity</p>
          <p style={{textAlign: 'center'}}>Price</p>
          <p style={{textAlign: 'center'}}>24h Change</p>
        </div>
      </div>
    </div>
  )
}

export default Home