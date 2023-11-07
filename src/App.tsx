import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import './App.css'

import Nav from './components/Nav'

import { ThemeOptions } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'

import { createTheme } from '@mui/material/styles'
import { themeOptions } from './themeSettings'
import { Box, useMediaQuery } from '@mui/material'

const theme = createTheme(themeOptions)

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <Nav />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
