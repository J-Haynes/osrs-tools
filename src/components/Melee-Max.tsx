import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'

export default function MeleeMax() {
  let [params, setParams] = useState({
    strengthLevel: undefined,
    style: 'Aggressive',
    potion: 'none',
    prayer: 'none',
    strengthBonus: 0,
  })

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
        border={'1px solid pink'}
        borderRadius={'5px'}
        width={'450px'}
        margin={'auto'}
      >
        <FormControl variant="outlined">
          <TextField label={'Strength Level'} value={params.strengthLevel} />
          <Select label="Style" value={params.style} id="style">
            <MenuItem value={'Accurate'}>Accurate</MenuItem>
            <MenuItem value={'Aggressive'}>Aggressive</MenuItem>
            <MenuItem value={'Controlled'}>Controlled</MenuItem>
            <MenuItem value={'Defensive'}>Defensive</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}
