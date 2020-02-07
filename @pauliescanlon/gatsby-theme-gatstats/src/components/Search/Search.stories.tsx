import * as React from 'react'

import { Search } from './Search'

export default {
  title: 'Search',
  decorators: [
    (storFn: any) => (
      <div style={{ minHeight: 300, color: '#fff' }}>{storFn()}</div>
    )
  ],
  parameters: {
    component: Search,
    componentSubtitle: 'Search is...'
  }
}

export const usage = () => (
  <Search
    selectedTag="TypeScript"
    filterData={[
      { value: 'TypeScript' },
      { value: 'React' },
      { value: 'ES6' },
      { value: 'Storybook' },
      { value: 'Jest' },
      { value: 'Enzyme' }
    ]}
    onSearch={(value: any) => console.log(value)}
  />
)
