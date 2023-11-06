import React from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import { styled } from '@mui/system'

const StyledDrawer = styled(Drawer)({
  width: '250px', // Adjust the width as needed
})

export default function Sidebar({ open, onClose }: any) {
  return (
    <>
      <StyledDrawer open={open} onClose={onClose}>
        <List>
          <ListItem>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Combat Calculator" />
          </ListItem>
        </List>
      </StyledDrawer>
    </>
  )
}
