function combat_level(attack, strength, defence, ranged, magic, prayer) {
  let base = (defence + hitpoints + Math.trunc(prayer / 2)) / 4
  let melee = (13 / 40) * (attack + strength)
  let ranger = (13 / 40) * (ranged * 1.5)
  let mager = (13 / 40) * (magic * 1.5)

  let combat_level = base + Math.max(melee, ranger, mager)

  return combat_level
}
