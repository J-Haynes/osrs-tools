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
          <TextField
            id="Attack"
            label="Attack"
            type="number"
            defaultValue={1}
          />
          <TextField
            id="Strength"
            label="Strength"
            type="number"
            defaultValue={1}
            required
          />
          <TextField
            id="Defence"
            label="Defence"
            type="number"
            defaultValue={1}
            required
          />
          <TextField
            id="Hitpoints"
            label="Hitpoints"
            type="number"
            defaultValue={10}
            required
          />
          <TextField
            id="Ranged"
            label="Ranged"
            type="number"
            defaultValue={1}
            required
          />
          <TextField
            id="Magic"
            label="Magic"
            type="number"
            defaultValue={1}
            required
          />
          <TextField
            id="Prayer"
            label="Prayer"
            type="number"
            defaultValue={1}
            required
          />
          <Button variant={'contained'} onClick={calculateCombat}>
            Calculate
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
