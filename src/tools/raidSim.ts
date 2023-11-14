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
  }

  let percentageChance = (points / 867600) * 100

  for (let i = 0; i < numberOfRaids; i++) {
    if (Math.random() * 100 + 1 < percentageChance) {
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
