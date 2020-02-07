import * as React from 'react'

import { TextInput } from '.'
import { Search } from '../Search'

export default {
  title: 'TextInput',
  decorators: [
    (storFn: any) => <div style={{ color: '#fff' }}>{storFn()}</div>
  ],
  parameters: {
    component: TextInput,
    componentSubtitle: 'TextInput is ...'
  }
}

export const usage = () => (
  <div>
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
    <TextInput />
  </div>
)
