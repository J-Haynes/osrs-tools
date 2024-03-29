import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, Typography } from '@mui/material'

import { Link, Outlet, Router, useLocation } from 'react-router-dom'

import { styled } from '@mui/system'
import {
  AppBar,
  Divider,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Toolbar,
} from '@mui/material'

import Leaderboard from '@mui/icons-material/Leaderboard'
import LooksOne from '@mui/icons-material/LooksOne'
import LooksTwo from '@mui/icons-material/LooksTwo'
import Looks3 from '@mui/icons-material/Looks3'
import Looks4 from '@mui/icons-material/Looks4'
import { Looks4Outlined } from '@mui/icons-material'
import { StringLiteralLike } from 'typescript'

const drawerWidth = 240

const getTitle = (pathname: string) => {
  switch (pathname) {
    case '/':
      return 'PgOsrs Tools'
    case '/combat-calculator':
      return 'Combat Calculator'
    case '/melee-max-hit':
      return 'Melee Max hit'
    case '/ranged-max-hit':
      return 'Ranged Max hit'
    case '/cox':
      return 'Cox Simulator'
    case '/world-tracker':
      return 'World Tracker'
    default:
      return 'PgOsrs Tools'
  }
}

const drawer = (
  <div>
    <List disablePadding>
      <ListItemButton component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItemButton>
      <Divider />
      <ListItemButton component={Link} to="combat-calculator">
        <ListItemIcon>
          <Leaderboard />
        </ListItemIcon>
        <ListItemText primary="Combat Calculator" />
      </ListItemButton>
      <ListItemButton component={Link} to="melee-max-hit">
        <ListItemIcon>
          <LooksOne />
        </ListItemIcon>
        <ListItemText primary="Melee Max hit" />
      </ListItemButton>
      <ListItemButton component={Link} to="ranged-max-hit">
        <ListItemIcon>
          <LooksTwo />
        </ListItemIcon>
        <ListItemText primary="Ranged Max hit" />
      </ListItemButton>
      <Divider />
      <ListItemButton component={Link} to="cox">
        <ListItemIcon>
          <Looks3 />
        </ListItemIcon>
        <ListItemText primary="Cox Simulator" />
      </ListItemButton>
      <ListItemButton component={Link} to="world-tracker">
        <ListItemIcon>
          <Looks4 />
        </ListItemIcon>
        <ListItemText primary="World Tracker" />
      </ListItemButton>
    </List>
  </div>
)

export default function Nav() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const location = useLocation()
  const title = getTitle(location.pathname)

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ display: 'flex' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography align="center" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          onClick={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}
