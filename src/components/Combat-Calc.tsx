import React from 'react'
import { useState, ChangeEvent } from 'react'

import { Box, TextField, Typography, Divider, Button } from '@mui/material'
import FormControl from '@mui/material/FormControl'

import combat_level from '../combatLevel'

export default function Combatlevel() {
  let [combatLevel, setCombatLevel] = useState(3.4)

  let [stats, setStats] = useState({
    Attack: 1,
    Strength: 1,
    Defence: 1,
    Hitpoints: 10,
    Ranged: 1,
    Magic: 1,
    Prayer: 1,
  })

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStats({ ...stats, [e.target.id]: e.target.value })
  }

  const calculateCombat = () => {
    console.log(stats)
    console.log('test')
    setCombatLevel(
      combat_level(
        Number(stats.Attack),
        Number(stats.Strength),
        Number(stats.Defence),
        Number(stats.Hitpoints),
        Number(stats.Ranged),
        Number(stats.Magic),
        Number(stats.Prayer)
      )
    )
  }

  const resetStats = () => {
    console.log('hi')
    setStats({
      Attack: 1,
      Strength: 1,
      Defence: 1,
      Hitpoints: 10,
      Ranged: 1,
      Magic: 1,
      Prayer: 1,
    })
  }

  return (
    <Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        display={'flex'}
        justifyContent={'center'}
        noValidate
        autoComplete="off"
      >
        <FormControl
          onChange={changeHandler}
          variant="outlined"
          margin="normal"
        >
          {Object.entries(stats).map(([key, value]) => (
            <TextField
              key={key}
              id={key}
              label={key}
              type="number"
              value={value}
              onChange={changeHandler}
            />
          ))}
          <Button variant={'contained'} onClick={calculateCombat}>
            Calculate
          </Button>
          <Button variant={'outlined'} onClick={resetStats}>
            Reset
          </Button>
        </FormControl>
      </Box>
      <Divider />
      <Box>
        <Typography
          text-align={'center'}
        >{`Your combat level is ${combatLevel}`}</Typography>
      </Box>
    </Box>
  )
}

// ['attack', 'strength', 'defence', 'ranged', 'prayer', 'magic']
