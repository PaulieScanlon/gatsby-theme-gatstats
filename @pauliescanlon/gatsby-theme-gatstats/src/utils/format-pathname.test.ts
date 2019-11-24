import { formatPathname } from './format-pathname'

describe('formatPathname', () => {
  it('a capatilized pathname', () => {
    const testPathname = formatPathname('/posts/')
    expect(testPathname).toEqual('Posts')
  })

  it('doesnt return the | if it its the index', () => {
    const testPathname = formatPathname('/')
    expect(testPathname).toEqual('')
  })
})
