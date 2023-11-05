import React from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

export default function Sidebar({ open, onClose }: any) {
  return (
    <>
      <Drawer open={open} onClose={onClose}>
        <List>
          <ListItem>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
