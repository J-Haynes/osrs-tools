export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + 1
}

export function randomPlusMinusTenPercent(num: number) {
  let min = Math.trunc(0.9 * num)
  let max = Math.trunc(1.1 * num)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
