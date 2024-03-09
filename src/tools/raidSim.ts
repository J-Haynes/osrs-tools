import { randomNumber } from './randomNumber'

export function cox(points: number, numberOfRaids: number) {
  let loot = {
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
      kwarm: 0,
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
  }

  let percentageChance = (points / 867600) * 100

  for (let i = 0; i < numberOfRaids; i++) {
    let resourceRoll = Math.random() * 33 + 1
    let resourceRoll2 = Math.random() * 33 + 1
    if (Math.random() * 100 + 1 < percentageChance) {
      if (Math.trunc(Math.random() * 54 + 1) === 53) {
        loot.olmlet++
      }
      let randomLoot = Math.trunc(Math.random() * 69 + 1)
      if (randomLoot <= 20) {
        loot.dex++
      } else if (randomLoot >= 20 && randomLoot <= 40) {
        loot.arcane++
      } else if (randomLoot >= 41 && randomLoot <= 44) {
        loot.twistedBuckler++
      } else if (randomLoot >= 45 && randomLoot <= 48) {
        loot.dhcb++
      } else if (randomLoot >= 49 && randomLoot <= 51) {
        loot.bulwark++
      } else if (randomLoot >= 52 && randomLoot <= 54) {
        loot.dClaws++
      } else if (randomLoot >= 55 && randomLoot <= 57) {
        loot.ancestHat++
      } else if (randomLoot >= 58 && randomLoot <= 60) {
        loot.ancestTop++
      } else if (randomLoot >= 61 && randomLoot <= 63) {
        loot.ancestBottom++
      } else if (randomLoot >= 64 && randomLoot <= 65) {
        loot.elderMaul++
      } else if (randomLoot >= 66 && randomLoot <= 67) {
        loot.kodai++
      } else if (randomLoot >= 68 && randomLoot <= 69) {
        loot.twistedBow++
      }
    } else {
      if (resourceRoll === 1) {
        loot.resources.deathRune =
          loot.resources.deathRune + randomNumber(1, 3640)
      } else if (resourceRoll === 2) {
        loot.resources.bloodRune =
          loot.resources.bloodRune + randomNumber(1, 4095)
      } else if (resourceRoll === 3) {
        loot.resources.soulRune =
          loot.resources.soulRune + randomNumber(1, 6553)
      } else if (resourceRoll === 4) {
        loot.resources.soulRune =
          loot.resources.soulRune + randomNumber(1, 6553)
      } else if (resourceRoll === 5) {
        loot.resources.runeArrow =
          loot.resources.runeArrow + randomNumber(1, 6553)
      }
    }
  }
  return loot
}

// Total weight: 69

// Dex: 20 //          1-20
// Arcane: 20 //       21-40

// Buckler: 4 //       41-44
// Dhcb: 4 //          45-48

// Bulwark: 3 //       49-51
// D claws: 3 //       52-54
// Ancest hat: 3 //    55-57
// Ancest top: 3 //    58-60
// Ancest bottom: 3 // 61-63

// Elder maul: 2 //    64-65
// Kodai: 2 //         66-67
// Twisted bow: 2 //   68-69
