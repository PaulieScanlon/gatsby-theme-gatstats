import { formatPathname } from './format-pathname'

describe('formatPathname', () => {
  it('a capatilized pathname', () => {
    const testPathname = formatPathname('/Posts/')
    expect(testPathname).toEqual('Posts')
  })
})
