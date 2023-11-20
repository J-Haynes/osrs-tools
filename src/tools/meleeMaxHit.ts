export function meleeMaxHit(
  strengthLevel: string,
  style: string,
  potion: string,
  prayer: string,
  strengthBonus: string
) {
  let effectiveStrength = Number(strengthLevel) + 8

  // potions

  if (potion === 'Strength Potion') {
    effectiveStrength += Math.trunc(Number(strengthLevel) / 10) + 3
  } else if (potion === 'Super Strength Potion') {
    effectiveStrength += Math.trunc((Number(strengthLevel) * 15) / 100) + 5
  }

  // prayers

  if (prayer === 'Burst of Strength') {
    effectiveStrength = effectiveStrength * 1.05
  } else if (prayer === 'Super human Strength') {
    effectiveStrength = effectiveStrength * 1.1
  } else if (prayer === 'Ultimate Strength') {
    effectiveStrength = effectiveStrength * 1.15
  } else if (prayer === 'Chivalry') {
    effectiveStrength = effectiveStrength * 1.18
  } else if (prayer === 'Piety') {
    effectiveStrength = effectiveStrength * 1.23
  }

  // style

  if (style === 'Aggressive') {
    effectiveStrength += 3
  } else if (style === 'Controlled') {
    effectiveStrength += 1
  }

  // damage

  return Math.trunc(
    0.5 + (effectiveStrength * (Number(strengthBonus) + 64)) / 640
  )
}
