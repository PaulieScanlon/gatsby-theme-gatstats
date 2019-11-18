import { colorRange } from './color-range'

describe('colorRange', () => {
  it('returns a range of colours', () => {
    const testRange = colorRange('#a92aeb', '#688ce0', 3)
    expect(testRange.length).toEqual(3)
  })
})
