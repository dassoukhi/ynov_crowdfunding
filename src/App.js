import React from 'react'
import './App.css'
import Routes from './config/router'
import { Online, Offline } from 'react-detect-offline'
import OffLineChamp from './components/offLineChamp'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/globalStyles'
import { lightTheme, darkTheme } from './config/theme'
import { useDarkMode } from './components/useDarkMode'
import Toggle from './components/toggler'

function App() {
  // return (
  //   <div>
  //     {/* <p>crowdfunding</p>
  //     {/* When the network is down *
  //     <Offline>
  //       <OffLineChamp />
  //     </Offline>
  //     {/* When the network is on *
  //     <Online>
  //       <br />
  //       <br />
  //       <br />
  //       <br />
  //       <Routes />
  //     </Online> */}
  //     <Routes />
  //   </div>
  // )

  const [theme, themeToggler] = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyles />
        <div className='App'>
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <div>
            <Routes />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
