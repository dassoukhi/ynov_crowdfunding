import React from 'react'
import './App.css'
import Routes from './config/router'
import { Online, Offline } from 'react-detect-offline'
import OffLineChamp from './components/offLineChamp'

function App() {
  return (
    <div>
      <Offline>
        <OffLineChamp />
      </Offline>
      <Online>
        <Routes />
      </Online>
    </div>
  )
}

export default App
