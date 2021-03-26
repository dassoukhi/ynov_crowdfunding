import React from 'react'
import './App.css'
import Routes from './config/router'
import { Online, Offline } from 'react-detect-offline'
import OffLineChamp from './components/offLineChamp'

function App() {
  return (
    <div className='App'>
      {/* <p>crowdfunding</p> */}
      {/* When the network is down */}
      <Offline>
        <OffLineChamp />
      </Offline>
      {/* When the network is on */}
      <Online>
        <br />
        <br />
        <br />
        <br />
        <Routes />
      </Online>
    </div>
  )
}

export default App
