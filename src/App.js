import React from 'react'
import './App.css'
import Routes from './config/router'
// import { Online, Offline } from 'react-detect-offline'
// import OffLineChamp from './components/offLineChamp'
import { Provider } from 'react-redux'
import { store } from './config/store'
import './config/translation'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Routes />
      </div>
    </Provider>
  )
}

export default App
