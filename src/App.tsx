import React, { useState } from 'react'
import logo from './logo.svg'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import './App.css'

import Sidebar from './components/Sidebar'

import { ThemeOptions } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'

import { createTheme } from '@mui/material/styles'
import { themeOptions } from './themeSettings'

const theme = createTheme(themeOptions)

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleSidebar}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
      </ThemeProvider>
    </>
  )
}

export default App
