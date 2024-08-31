import { randomNumber, randomPlusMinusTenPercent } from './randomNumber'

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
  }

  function resourceRollFunc(num: number) {
    if (num === 1) {
      loot.resources.deathRune +=
        randomPlusMinusTenPercent(916) * (points / 33000)
    } else if (num === 2) {
      loot.resources.bloodRune +=
        randomPlusMinusTenPercent(1031) * (points / 33000)
    } else if (num === 3) {
      loot.resources.soulRune +=
        randomPlusMinusTenPercent(1650) * (points / 33000)
    } else if (num === 4) {
      loot.resources.runeArrow +=
        randomPlusMinusTenPercent(2357) * (points / 33000)
    } else if (num === 5) {
      loot.resources.dragonArrow +=
        randomPlusMinusTenPercent(163) * (points / 33000)
    } else if (num === 6) {
      loot.resources.ranarrWeed +=
        randomPlusMinusTenPercent(41) * (points / 33000)
    } else if (num === 7) {
      loot.resources.toadflax +=
        randomPlusMinusTenPercent(63) * (points / 33000)
    } else if (num === 8) {
      loot.resources.iritLeaf +=
        randomPlusMinusTenPercent(203) * (points / 33000)
    } else if (num === 9) {
      loot.resources.kwuarm += randomPlusMinusTenPercent(87) * (points / 33000)
    } else if (num === 10) {
      loot.resources.snapdragon +=
        randomPlusMinusTenPercent(25) * (points / 33000)
    } else if (num === 11) {
      loot.resources.cadantine +=
        randomPlusMinusTenPercent(100) * (points / 33000)
    } else if (num === 12) {
      loot.resources.lantadyme +=
        randomPlusMinusTenPercent(133) * (points / 33000)
    } else if (num === 13) {
      loot.resources.dwarfWeed +=
        randomPlusMinusTenPercent(165) * (points / 33000)
    } else if (num === 14) {
      loot.resources.torstol += randomPlusMinusTenPercent(40) * (points / 33000)
    } else if (num === 15) {
      loot.resources.silver +=
        randomPlusMinusTenPercent(1650) * (points / 33000)
    } else if (num === 16) {
      loot.resources.coal += randomPlusMinusTenPercent(1650) * (points / 33000)
    } else if (num === 17) {
      loot.resources.gold += randomPlusMinusTenPercent(750) * (points / 33000)
    } else if (num === 18) {
      loot.resources.mithril +=
        randomPlusMinusTenPercent(1031) * (points / 33000)
    } else if (num === 19) {
      loot.resources.adamantite +=
        randomPlusMinusTenPercent(198) * (points / 33000)
    } else if (num === 20) {
      loot.resources.runite += randomPlusMinusTenPercent(16) * (points / 33000)
    } else if (num === 21) {
      loot.resources.sapphire +=
        randomPlusMinusTenPercent(175) * (points / 33000)
    } else if (num === 22) {
      loot.resources.emerald +=
        randomPlusMinusTenPercent(232) * (points / 33000)
    } else if (num === 23) {
      loot.resources.ruby += randomPlusMinusTenPercent(136) * (points / 33000)
    } else if (num === 24) {
      loot.resources.diamond += randomPlusMinusTenPercent(64) * (points / 33000)
    } else if (num === 25) {
      loot.resources.lizardmanFang +=
        randomPlusMinusTenPercent(1178) * (points / 33000)
    } else if (num === 26) {
      loot.resources.pureEssence +=
        randomPlusMinusTenPercent(16500) * (points / 33000)
    } else if (num === 27) {
      loot.resources.saltpetre +=
        randomPlusMinusTenPercent(1375) * (points / 33000)
    } else if (num === 28) {
      loot.resources.teakPlank +=
        randomPlusMinusTenPercent(343) * (points / 33000)
    } else if (num === 29) {
      loot.resources.mahoganyPlank +=
        randomPlusMinusTenPercent(138) * (points / 33000)
    } else if (num === 30) {
      loot.resources.dynamite +=
        randomPlusMinusTenPercent(611) * (points / 33000)
    } else if (num === 31) {
      loot.resources.tornPrayerScroll++
    } else if (num === 32) {
      loot.resources.darkRelic++
    }
  }

  function uniqueRoll(num: number) {
    if (num <= 20) {
      loot.dex++
    } else if (num >= 21 && num <= 40) {
      loot.arcane++
    } else if (num >= 41 && num <= 44) {
      loot.twistedBuckler++
    } else if (num >= 45 && num <= 48) {
      loot.dhcb++
    } else if (num >= 49 && num <= 51) {
      loot.bulwark++
    } else if (num >= 52 && num <= 54) {
      loot.dClaws++
    } else if (num >= 55 && num <= 57) {
      loot.ancestHat++
    } else if (num >= 58 && num <= 60) {
      loot.ancestTop++
    } else if (num >= 61 && num <= 63) {
      loot.ancestBottom++
    } else if (num >= 64 && num <= 65) {
      loot.elderMaul++
    } else if (num >= 66 && num <= 67) {
      loot.kodai++
    } else if (num >= 68 && num <= 69) {
      loot.twistedBow++
    }
  }

  let percentageChance = Math.min((points / 867600) * 100, 100)

  for (let i = 0; i < numberOfRaids; i++) {
    if (Math.random() * 100 < percentageChance) {
      if (Math.trunc(Math.random() * 54 + 1) === 53) {
        loot.olmlet++
      }
      uniqueRoll(randomNumber(1, 69))
    } else {
      resourceRollFunc(randomNumber(1, 32))
      resourceRollFunc(randomNumber(1, 32))
    }
  }
  console.log(loot)
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

// if (Math.trunc(Math.random() * 54 + 1) === 53) {
//   loot.olmlet++
// }
// let randomLoot = Math.trunc(Math.random() * 69 + 1)
// if (randomLoot <= 20) {
//   loot.dex++
// } else if (randomLoot >= 20 && randomLoot <= 40) {
//   loot.arcane++
// } else if (randomLoot >= 41 && randomLoot <= 44) {
//   loot.twistedBuckler++
// } else if (randomLoot >= 45 && randomLoot <= 48) {
//   loot.dhcb++
// } else if (randomLoot >= 49 && randomLoot <= 51) {
//   loot.bulwark++
// } else if (randomLoot >= 52 && randomLoot <= 54) {
//   loot.dClaws++
// } else if (randomLoot >= 55 && randomLoot <= 57) {
//   loot.ancestHat++
// } else if (randomLoot >= 58 && randomLoot <= 60) {
//   loot.ancestTop++
// } else if (randomLoot >= 61 && randomLoot <= 63) {
//   loot.ancestBottom++
// } else if (randomLoot >= 64 && randomLoot <= 65) {
//   loot.elderMaul++
// } else if (randomLoot >= 66 && randomLoot <= 67) {
//   loot.kodai++
// } else if (randomLoot >= 68 && randomLoot <= 69) {
//   loot.twistedBow++
// }
// } else {
// if (resourceRoll === 1) {
//   loot.resources.deathRune =
//     loot.resources.deathRune + randomPlusMinusTenPercent(916)
// } else if (resourceRoll === 2) {
//   loot.resources.bloodRune =
//     loot.resources.bloodRune + randomPlusMinusTenPercent(1031)
// } else if (resourceRoll === 3) {
//   loot.resources.soulRune =
//     loot.resources.soulRune + randomPlusMinusTenPercent(1650)
// } else if (resourceRoll === 4) {
//   loot.resources.runeArrow =
//     loot.resources.runeArrow + randomPlusMinusTenPercent(2357)
// } else if (resourceRoll === 5) {
//   loot.resources.dragonArrow =
//     loot.resources.dragonArrow + randomPlusMinusTenPercent(163)
// } else if (resourceRoll === 6) {
//   loot.resources.ranarrWeed =
//     loot.resources.ranarrWeed + randomPlusMinusTenPercent(41)
// } else if (resourceRoll === 7) {
//   loot.resources.toadflax =
//     loot.resources.toadflax + randomPlusMinusTenPercent(63)
// } else if (resourceRoll === 8) {
//   loot.resources.iritLeaf =
//     loot.resources.iritLeaf + randomPlusMinusTenPercent(203)
// } else if (resourceRoll === 9) {
//   loot.resources.kwuarm =
//     loot.resources.kwuarm + randomPlusMinusTenPercent(87)
// } else if (resourceRoll === 10) {
//   loot.resources.snapdragon =
//     loot.resources.snapdragon + randomPlusMinusTenPercent(25)
// } else if (resourceRoll === 11) {
//   loot.resources.cadantine =
//     loot.resources.cadantine + randomPlusMinusTenPercent(100)
// } else if (resourceRoll === 12) {
//   loot.resources.lantadyme =
//     loot.resources.lantadyme + randomPlusMinusTenPercent(133)
// } else if (resourceRoll === 13) {
//   loot.resources.dwarfWeed =
//     loot.resources.dwarfWeed + randomPlusMinusTenPercent(165)
// } else if (resourceRoll === 14) {
//   loot.resources.torstol =
//     loot.resources.torstol + randomPlusMinusTenPercent(40)
// } else if (resourceRoll === 15) {
//   loot.resources.silver =
//     loot.resources.silver + randomPlusMinusTenPercent(1650)
// } else if (resourceRoll === 16) {
//   loot.resources.coal =
//     loot.resources.coal + randomPlusMinusTenPercent(1650)
// } else if (resourceRoll === 17) {
//   loot.resources.gold =
//     loot.resources.gold + randomPlusMinusTenPercent(750)
// } else if (resourceRoll === 18) {
//   loot.resources.mithril =
//     loot.resources.mithril + randomPlusMinusTenPercent(1031)
// } else if (resourceRoll === 19) {
//   loot.resources.adamantite =
//     loot.resources.adamantite + randomPlusMinusTenPercent(198)
// } else if (resourceRoll === 20) {
//   loot.resources.runite =
//     loot.resources.runite + randomPlusMinusTenPercent(16)
// } else if (resourceRoll === 21) {
//   loot.resources.sapphire =
//     loot.resources.sapphire + randomPlusMinusTenPercent(175)
// } else if (resourceRoll === 22) {
//   loot.resources.emerald =
//     loot.resources.emerald + randomPlusMinusTenPercent(232)
// } else if (resourceRoll === 23) {
//   loot.resources.ruby =
//     loot.resources.ruby + randomPlusMinusTenPercent(136)
// } else if (resourceRoll === 24) {
//   loot.resources.diamond =
//     loot.resources.diamond + randomPlusMinusTenPercent(64)
// } else if (resourceRoll === 25) {
//   loot.resources.lizardmanFang =
//     loot.resources.lizardmanFang + randomPlusMinusTenPercent(1178)
// } else if (resourceRoll === 26) {
//   loot.resources.pureEssence =
//     loot.resources.pureEssence + randomPlusMinusTenPercent(16500)
// } else if (resourceRoll === 27) {
//   loot.resources.saltpetre =
//     loot.resources.saltpetre + randomPlusMinusTenPercent(1375)
// } else if (resourceRoll === 28) {
//   loot.resources.teakPlank =
//     loot.resources.teakPlank + randomPlusMinusTenPercent(343)
// } else if (resourceRoll === 29) {
//   loot.resources.mahoganyPlank =
//     loot.resources.mahoganyPlank + randomPlusMinusTenPercent(138)
// } else if (resourceRoll === 30) {
//   loot.resources.dynamite =
//     loot.resources.dynamite + randomPlusMinusTenPercent(611)
// } else if (resourceRoll === 31) {
//   loot.resources.tornPrayerScroll++
// } else if (resourceRoll === 32) {
//   loot.resources.darkRelic++
// }
// }
