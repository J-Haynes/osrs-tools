import React, { useState, useEffect } from 'react'
import { Box, Button, Grid } from '@mui/material'

import { fetchWorlds } from '../api/clientApi'

export default function WorldTracker() {
  const [worldPopulation, setWorldPopulation] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ])

  const [worldPopulationDifference, setWorldPopulationDifference] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ])

  const worldList = [
    '301',
    '302',
    '303',
    '304',
    '305',
    '306',
    '307',
    '308',
    '309',
    '310',
    '311',
    '312',
    '313',
    '314',
    '315',
    '316',
    '317',
    '318',
    '319',
    '320',
    '321',
    '322',
    '323',
    '324',
    '325',
    '326',
    '327',
    '328',
    '329',
    '330',
    '331',
    '332',
    '333',
    '334',
    '335',
    '336',
    '337',
    '338',
    '339',
    '340',
    '341',
    '342',
    '343',
    '344',
    '345',
    '346',
    '347',
    '348',
    '349',
    '350',
    '351',
    '352',
    '353',
    '354',
    '355',
    '356',
    '357',
    '358',
    '359',
    '360',
    '361',
    '362',
    '363',
    '364',
    '365',
    '366',
    '367',
    '368',
    '369',
    '370',
    '371',
    '372',
    '373',
    '374',
    '375',
    '376',
    '377',
    '378',
    '379',
    '380',
    '381',
    '382',
    '383',
    '384',
    '385',
    '386',
    '387',
    '388',
    '389',
    '390',
    '391',
    '392',
    '393',
    '394',
    '395',
    '396',
    '397',
    '398',
    '399',
    '413',
    '414',
    '415',
    '416',
    '417',
    '418',
    '419',
    '420',
    '421',
    '422',
    '423',
    '424',
    '425',
    '426',
    '427',
    '428',
    '429',
    '430',
    '431',
    '432',
    '433',
    '434',
    '435',
    '436',
    '437',
    '438',
    '439',
    '440',
    '441',
    '442',
    '443',
    '444',
    '445',
    '446',
    '447',
    '448',
    '449',
    '450',
    '451',
    '452',
    '453',
    '454',
    '455',
    '456',
    '457',
    '458',
    '459',
    '460',
    '461',
    '462',
    '463',
    '464',
    '465',
    '466',
    '467',
    '468',
    '469',
    '470',
    '471',
    '472',
    '473',
    '474',
    '475',
    '476',
    '477',
    '478',
    '479',
    '480',
    '481',
    '482',
    '483',
    '484',
    '485',
    '486',
    '487',
    '488',
    '489',
    '490',
    '491',
    '492',
    '493',
    '494',
    '495',
    '496',
    '497',
    '498',
    '499',
    '500',
    '501',
    '502',
    '503',
    '504',
    '505',
    '506',
    '507',
    '508',
    '509',
    '510',
    '511',
    '512',
    '513',
    '514',
    '515',
    '516',
    '517',
    '518',
    '519',
    '520',
    '521',
    '522',
    '523',
    '524',
    '525',
    '526',
    '527',
    '528',
    '529',
    '530',
    '531',
    '532',
    '533',
    '534',
    '535',
    '536',
    '537',
    '538',
    '539',
    '540',
    '541',
    '542',
    '543',
    '544',
    '545',
    '546',
    '547',
    '548',
    '549',
    '550',
    '551',
    '552',
    '553',
    '554',
    '555',
    '556',
    '557',
    '558',
    '559',
    '560',
    '561',
    '562',
    '563',
    '564',
    '565',
    '566',
    '567',
    '568',
    '569',
    '570',
    '571',
    '573',
    '574',
    '575',
    '576',
    '577',
    '578',
    '579',
    '580',
  ]

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
      setWorldPopulation([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ])
      setWorldPopulationDifference([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ])
      fetchWorlds().then((data) => setWorldPopulation(Object.values(data)))
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
    const data = await fetchWorlds()
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
      World Tracker
      <Button variant={'outlined'} onClick={test}>
        Button
      </Button>
      {fetchingWorlds ? 'fetching!' : 'not fetching!'}
      <Grid container spacing={0.2}>
        {worldPopulation.map((population, index) => (
          <Grid
            item
            xs={2}
            color={spanColour(worldPopulationDifference[index])}
          >
            <span style={{ color: '#ff5277' }}>{`${worldList[index]}: `}</span>
            {/* <span>{`${population} ; `}</span> */}
            <span>{`   ${worldPopulationDifference[index]}`}</span>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
