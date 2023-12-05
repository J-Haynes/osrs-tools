import React from 'react'
import { Box, Button } from '@mui/material'

import * as cheerio from 'cheerio'

export default function WorldTracker() {
  const $ = cheerio.load('https://oldschool.runescape.com/slu')

  const worldTracker = () => {
    console.log($('table.tbody'))
  }

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      World Tracker
      <Button variant={'outlined'} onClick={worldTracker}>
        Button
      </Button>
    </Box>
  )
}
