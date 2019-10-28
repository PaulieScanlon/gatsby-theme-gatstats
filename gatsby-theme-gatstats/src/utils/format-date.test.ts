import { formatDate } from './format-date'

describe('formatDate', () => {
  it('returns a date in the correct format', () => {
    const testDate = formatDate('2014-02-27T08:19:38.441-00:00')
    expect(testDate).toEqual('27-Feb-2014')
  })

  it('returns the default string if null', () => {
    const testDate = formatDate(null)
    expect(testDate).toEqual('nn/sss/nnnn')
  })
})
