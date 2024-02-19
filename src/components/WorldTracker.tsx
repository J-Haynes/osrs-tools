import React, { useState, useEffect } from 'react'
import { Box, Button, Grid } from '@mui/material'

import { fetchWorldsApi } from '../api/clientApi'

export default function WorldTracker() {
  const [worldPopulation, setWorldPopulation] = useState(
    Array(260).fill(0) as number[]
  )

  const [worldPopulationDifference, setWorldPopulationDifference] = useState(
    Array(260).fill(0) as number[]
  )

  const [worldList, setWorldList] = useState([] as string[])

  const spanColour = (difference: number) => {
    if (difference > 25) {
      return 'green'
    } else if (difference < -25) {
      return 'red'
    }
  }

  const [fetchingWorlds, setFetchingWorlds] = useState(false)

  const test = () => {
    setFetchingWorlds(!fetchingWorlds)
    if (!fetchingWorlds) {
      setWorldPopulation(worldPopulation.map((num) => (num = 0)))
      setWorldPopulationDifference(
        worldPopulationDifference.map((num) => (num = 0))
      )
      fetchWorldsApi().then((data) => {
        setWorldPopulation(Object.values(data))
        setWorldList(Object.keys(data))
      })
    }
  }

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined

    if (fetchingWorlds) {
      intervalId = setInterval(() => {
        fetchData()
      }, 20000)
    }
    return () => clearInterval(intervalId)
  })

  const fetchData = async () => {
    const data = await fetchWorldsApi()
    const newWorlds = Object.values(data) as number[]
    const populationDifference = worldPopulation.map(
      (population, index) => newWorlds[index] - population
    )

    setWorldPopulationDifference(populationDifference)

    setWorldPopulation(newWorlds)
  }

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Box margin={'10px'}>
        <Button
          variant={'outlined'}
          onClick={test}
          color={fetchingWorlds ? 'error' : 'success'}
        >
          {fetchingWorlds ? 'Disable Fetching' : 'Enable Fetching'}
        </Button>
      </Box>
      <Grid container spacing={0.2}>
        {worldPopulation.map((population, index) => (
          <Grid
            item
            xs={1.5}
            color={spanColour(worldPopulationDifference[index])}
          >
            <span style={{ color: '#ff5277' }}>
              {worldList.length === 0 ? 'world:   ' : `${worldList[index]}:   `}
            </span>
            {/* <span>{`${population} ; `}</span> */}
            <span>
              {worldPopulationDifference.length === 0
                ? 0
                : `${worldPopulationDifference[index]}`}
            </span>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
