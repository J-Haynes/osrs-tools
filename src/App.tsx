import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import './App.css'

import Sidebar from './components/Sidebar'

import { ThemeOptions } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'

import { createTheme } from '@mui/material/styles'
import { themeOptions } from './themeSettings'
import TopBar from './components/TopBar'
import { Box, useMediaQuery } from '@mui/material'

const theme = createTheme(themeOptions)

function App() {
  const isScreenSmall = useMediaQuery('(max-width: 600px)')
  const [sidebarOpen, setSidebarOpen] = useState(!isScreenSmall)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  useEffect(() => {
    setSidebarOpen(!isScreenSmall)
  }, [isScreenSmall])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <TopBar toggle={toggleSidebar} />
          <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
