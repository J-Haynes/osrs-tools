import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { FixedSizeList, ListChildComponentProps } from 'react-window'

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
    if (difference >= 25) {
      return 'green'
    } else if (difference <= -25) {
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
      }, 12000)
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

    populationDifference.map((pop, index) => {
      if (pop >= 25 || pop <= -25) {
        const currentDate = new Date()
        const formattedDate = currentDate.toLocaleTimeString([], {
          hour12: false,
        })

        setWorldJumps((prevWorldJumps) => [
          [Number(worldList[index]), pop, formattedDate],
          ...prevWorldJumps,
        ])
      }
    })

    setWorldPopulation(newWorlds)

    console.log(worldJumps)
  }

  const [worldJumps, setWorldJumps] = useState<Array<[number, number, string]>>(
    []
  )

  // function renderWorldJumps(props: ListChildComponentProps) {
  //   const { index, style } = props

  //   return (
  //     <ListItem style={style} key={index} component="div" disablePadding>
  //       <ListItemButton>
  //         <ListItemText primary={`World ${worldJumps[index][index]}`} />
  //       </ListItemButton>
  //     </ListItem>
  //   )
  // }

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
      <Box
        sx={{
          height: 200,
          width: 400,
          overflow: 'auto',
          border: '1px solid white',
          margin: 5,
        }}
      >
        <List>
          {worldJumps.map((world, index) => (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={
                    world[1] > 0
                      ? `${world[2]}: World ${world[0]}: +${world[1]}`
                      : `${world[2]}: World ${world[0]}: ${world[1]}`
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
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
