import { scaleLinear } from '@vx/scale'

export const colorRange = (a: string, b: string, amount: number) => {
  const colors = []
  const scale = scaleLinear({
    range: [a, b],
    domain: [1, amount]
  })

  for (let i = 0; i < amount; i++) {
    colors.push(scale(i))
  }

  return colors
}
