import React, { useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export default function TopBar({ toggle }: any) {
  // const [sidebarOpen, setSidebarOpen] = useState(false)

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen)
  // }
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
