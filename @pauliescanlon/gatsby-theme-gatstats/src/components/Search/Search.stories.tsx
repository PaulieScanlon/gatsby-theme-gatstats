import * as React from 'react'

import { Search } from './Search'

export default {
  title: 'Search',
  decorators: [
    (storFn: any) => <div style={{ minHeight: 300 }}>{storFn()}</div>
  ],
  parameters: {
    component: Search,
    componentSubtitle: 'Search is...'
  }
}

export const usage = () => (
  <Search
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
