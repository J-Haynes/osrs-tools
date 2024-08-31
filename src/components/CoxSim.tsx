import React, { useState } from 'react'

import { cox } from '../tools/raidSim'
import { Box, Button, Slider } from '@mui/material'

export default function CoxSim() {
  const [sliderValue, setSliderValue] = useState(100)

  const [loot, setLoot] = useState({
    dex: 0,
    arcane: 0,
    twistedBuckler: 0,
    dhcb: 0,
    bulwark: 0,
    dClaws: 0,
    ancestHat: 0,
    ancestTop: 0,
    ancestBottom: 0,
    elderMaul: 0,
    kodai: 0,
    twistedBow: 0,
    olmlet: 0,
    resources: {
      deathRune: 0,
      bloodRune: 0,
      soulRune: 0,
      runeArrow: 0,
      dragonArrow: 0,
      ranarrWeed: 0,
      toadflax: 0,
      iritLeaf: 0,
      avantoe: 0,
      kwuarm: 0,
      snapdragon: 0,
      cadantine: 0,
      lantadyme: 0,
      dwarfWeed: 0,
      torstol: 0,
      silver: 0,
      coal: 0,
      gold: 0,
      mithril: 0,
      adamantite: 0,
      runite: 0,
      sapphire: 0,
      emerald: 0,
      ruby: 0,
      diamond: 0,
      lizardmanFang: 0,
      pureEssence: 0,
      saltpetre: 0,
      teakPlank: 0,
      mahoganyPlank: 0,
      dynamite: 0,
      tornPrayerScroll: 0,
      darkRelic: 0,
    },
  })

  const raid1 = () => {
    setLoot(cox(33000, 1))
  }

  const raid100 = () => {
    setLoot(cox(33000, 100))
  }

  function valuetext(value: number) {
    return `${value}`
  }

  const raidX = () => {
    setLoot(cox(33000, sliderValue))
  }

  function handleSliderChange(_event: any, newValue: any) {
    setSliderValue(newValue)
  }

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Button variant={'contained'} onClick={raid1}>
        Raid 1
      </Button>
      <Button variant={'contained'} onClick={raid100}>
        Raid 100
      </Button>
      <Box sx={{ width: 300 }}>
        <Slider
          value={sliderValue}
          aria-label="Temperature"
          defaultValue={100}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={100}
          onChange={handleSliderChange}
          marks
          min={100}
          max={1000}
        />
        <Button variant={'contained'} onClick={raidX}>
          Raid X
        </Button>
      </Box>
      <Box>
        <img src="./rewards2x.png" className="cox-loot" alt="loot chest" />
        <Box
          id="item1"
          width={'56px'}
          height={'56px'}
          position={'relative'}
          bottom={'244px'}
          left={'230px'}
          zIndex={'0'}
        ></Box>
        <Box
          id="item2"
          width={'56px'}
          height={'56px'}
          position={'relative'}
          bottom={'300px'}
          left={'310px'}
          zIndex={'0'}
        ></Box>
        <Box
          id="item3"
          width={'56px'}
          height={'56px'}
          position={'relative'}
          bottom={'295px'}
          left={'230px'}
          zIndex={'0'}
        ></Box>
      </Box>
      <p>
        Dex: <span>{loot.dex}</span>
      </p>

      <p>Arcane:</p>
      <span>{loot.arcane}</span>
      <p>Twisted Buckler:</p>
      <span>{loot.twistedBuckler}</span>
      <p>DHCB:</p>
      <span>{loot.dhcb}</span>
      <p>Bulwark:</p>
      <span>{loot.bulwark}</span>
      <p>D Claws:</p>
      <span>{loot.dClaws}</span>
      <p>Ancestral Hat:</p>
      <span>{loot.ancestHat}</span>
      <p>Ancestrl Top:</p>
      <span>{loot.ancestTop}</span>
      <p>Ancestral Bottom:</p>
      <span>{loot.ancestBottom}</span>
      <p>Elder Maul:</p>
      <span>{loot.elderMaul}</span>
      <p>Kodai:</p>
      <span>{loot.kodai}</span>
      <p>Twisted Bow:</p>
      <span>{loot.twistedBow}</span>
      <p>Olmlet:</p>
      <span>{loot.olmlet}</span>
    </Box>
  )
}
