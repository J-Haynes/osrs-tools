import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import { styled } from '@mui/system'
import { Divider, ListItemButton, ListItemIcon } from '@mui/material'

import Leaderboard from '@mui/icons-material/Leaderboard'

// const StyledDrawer = styled(Drawer)({
//   width: '250px', // Adjust the width as needed
// })

const drawWidth = 250

const drawerBackdropProps = {
  invisible: true,
}

export default function Sidebar({ open, onClose }: any) {
  return (
    <>
      <Drawer
        open={open}
        onClose={onClose}
        BackdropProps={drawerBackdropProps}
        sx={{ width: drawWidth, flexShrink: 0 }}
        anchor="left"
      >
        <List>
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemIcon>
              <Leaderboard />
            </ListItemIcon>
            <ListItemText primary="Combat Calculator" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  )
}
