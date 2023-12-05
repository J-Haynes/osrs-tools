import React from 'react'
import { Box, Button } from '@mui/material'

import * as cheerio from 'cheerio'
import axios from 'axios'

export default function WorldTracker() {
  const worldTracker = async () => {
    try {
      const response = await axios.get('http://localhost:4000/proxy')

      const $ = cheerio.load(response.data)

      const dataObject = {} as any
      $('table tr').each((index, element) => {
        const columns = $(element).find('td')
        const key = $(columns[0]).text().trim()
        const value = $(columns[1]).text().trim()
        dataObject[key] = value
      })
      console.log('Data Object:', dataObject)
    } catch (error) {
      console.error('Error fetching', error)
    }
  }

  const test = async () => {
    const response = await axios.get('http://localhost:4000')

    console.log(response.data)
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
      <Button variant={'outlined'} onClick={test}>
        Button
      </Button>
    </Box>
  )
}
