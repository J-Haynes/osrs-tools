import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Combatlevel from './components/Combat-Calc'

import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { themeOptions } from './themeSettings'
import { Box } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './components/Home'
import MeleeMax from './components/Melee-Max'
import RangedMax from './components/Ranged-Max'
import CoxSim from './components/CoxSim'
import WorldTracker from './components/WorldTracker'

const theme = createTheme(themeOptions)

const drawerWidth = 240

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display={'flex'}>
          <Nav />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              pt: 10,
              width: `calc(100% - ${drawerWidth}px)`,
            }}
          >
            <Routes>
              <Route index element={<Home />} />
              <Route path="combat-calculator" element={<Combatlevel />} />
              <Route path="melee-max-hit" element={<MeleeMax />} />
              <Route path="ranged-max-hit" element={<RangedMax />} />
              <Route path="cox" element={<CoxSim />} />
              <Route path="world-tracker" element={<WorldTracker />} />
            </Routes>
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
