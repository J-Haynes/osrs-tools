export default function combat_level(
  attack: number,
  strength: number,
  defence: number,
  hitpoints: number,
  ranged: number,
  magic: number,
  prayer: number
) {
  let base = (defence + hitpoints + Math.trunc(prayer / 2)) / 4
  let melee = (13 / 40) * (attack + strength)
  let ranger = (13 / 40) * (ranged * 1.5)
  let mager = (13 / 40) * (magic * 1.5)

  let combat_level = Number((base + Math.max(melee, ranger, mager)).toFixed(2))

  return combat_level
}
