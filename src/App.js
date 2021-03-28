import React from 'react'
import './App.css'
import Routes from './config/router'
import { Online, Offline } from 'react-detect-offline'
import OffLineChamp from './components/offLineChamp'
import { useHistory } from 'react-router'

function App() {
  const history = useHistory()
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className='App'>
      {/* <Offline>
        <OffLineChamp />
      </Offline> */}
      {/* When the network is on */}
      {/* <Online>
        <br />
        <br />
        <br />
        <br />
        
      </Online> */}
      <Routes />
    </div>
  )
}

export default App
