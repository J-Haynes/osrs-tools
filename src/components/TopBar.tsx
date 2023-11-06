import React, { useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Typography } from '@mui/material'

export default function TopBar({ toggle }: any) {
  return (
    <AppBar position="fixed">
      <Toolbar style={{ display: 'flex' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography align="center" noWrap component="div">
          Test here
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
