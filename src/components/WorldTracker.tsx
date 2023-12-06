import React from 'react'
import { Box, Button } from '@mui/material'

import { fetchWorlds } from '../api/clientApi'

export default function WorldTracker() {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      World Tracker
      <Button variant={'outlined'} onClick={fetchWorlds}>
        Button
      </Button>
    </Box>
  )
}
