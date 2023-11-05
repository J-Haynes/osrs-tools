import React, { useState } from 'react'
import logo from './logo.svg'
import Button from '@mui/material/Button'
import './App.css'

import Sidebar from './components/Sidebar'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <>
      <Button onClick={toggleSidebar}>Toggle</Button>
      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
    </>
  )
}

export default App
