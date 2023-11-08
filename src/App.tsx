import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import './App.css'
import Nav from './components/Nav'
import Combatlevel from './components/Combat-Calc'

import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { themeOptions } from './themeSettings'
import { Box, Typography } from '@mui/material'

const theme = createTheme(themeOptions)

const drawerWidth = 240

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box display={'flex'}>
          <Nav />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              pt: 10,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Combatlevel />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
