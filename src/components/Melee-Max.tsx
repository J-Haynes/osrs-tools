import {
  Box,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material'
import React, { ChangeEvent, useState } from 'react'

export default function MeleeMax() {
  let [params, setParams] = useState({
    strengthLevel: '1',
    style: 'Aggressive',
    potion: 'None',
    prayer: 'None',
    strengthBonus: 0,
  })

  const strengthHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParams({ ...params, strengthLevel: e.target.value })
  }

  const styleHandler = (e: SelectChangeEvent<string>) => {
    setParams({ ...params, style: e.target.value })
  }

  const potionHandler = (e: SelectChangeEvent<string>) => {
    setParams({ ...params, potion: e.target.value })
  }

  const prayerHandler = (e: SelectChangeEvent<string>) => {
    setParams({ ...params, prayer: e.target.value })
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
        border={'1px solid #ff5277'}
        borderRadius={'5px'}
        width={'450px'}
        margin={'auto'}
        flexDirection={'column'}
        alignItems={'center'}
        paddingLeft={'100px'}
        paddingRight={'100px'}
      >
        <FormControl variant="outlined" margin="normal" fullWidth>
          <TextField
            label={'Strength Level'}
            value={params.strengthLevel}
            onChange={strengthHandler}
          />
        </FormControl>

        <FormControl variant="outlined" margin="normal" fullWidth>
          <InputLabel htmlFor="style">Style</InputLabel>
          <Select
            value={params.style}
            id="style"
            onChange={styleHandler}
            label="Style"
          >
            <MenuItem value={'Accurate'}>Accurate</MenuItem>
            <MenuItem value={'Aggressive'}>Aggressive</MenuItem>
            <MenuItem value={'Controlled'}>Controlled</MenuItem>
            <MenuItem value={'Defensive'}>Defensive</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" margin="normal" fullWidth>
          <InputLabel htmlFor="potion">Potion</InputLabel>
          <Select
            value={params.potion}
            id="potion"
            onChange={potionHandler}
            label="Potion"
          >
            <MenuItem value={'None'}>None</MenuItem>
            <MenuItem value={'Strength Potion'}>Strength Potion</MenuItem>
            <MenuItem value={'Super Strength Potion'}>
              Super Strength Potion
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" margin="normal" fullWidth>
          <InputLabel htmlFor="prayer">Prayer</InputLabel>
          <Select
            value={params.prayer}
            id="prayer"
            onChange={prayerHandler}
            label="prayer"
          >
            <MenuItem value={'None'}>None</MenuItem>
            <MenuItem value={'Burst of Strength'}>Burst of Strength</MenuItem>
            <MenuItem value={'Superhuman Strength'}>
              Super human Strength
            </MenuItem>
            <MenuItem value={'Ultimate Strength'}>Ultimate Strength</MenuItem>
            <MenuItem value={'Chivalry'}>Chivalry</MenuItem>
            <MenuItem value={'Piety'}>Piety</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}
