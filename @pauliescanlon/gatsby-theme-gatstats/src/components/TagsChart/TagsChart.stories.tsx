import * as React from 'react'
import { ParentSize } from '@vx/responsive'

import { TagsChart } from './TagsChart'

export default {
  title: 'TagsChart',
  parameters: {
    component: TagsChart,
    componentSubtitle: 'TagsChart is...'
  }
}

export const usage = () => (
  <ParentSize>
    {(parent: any) => (
      <TagsChart
        tagsChartData={[
          {
            label: 'ES6',
            usage: 12
          },
          {
            label: 'Jest',
            usage: 10
          },
          {
            label: 'React',
            usage: 9
          },
          {
            label: 'TypeScript',
            usage: 8
          },
          {
            label: 'Next.js',
            usage: 5
          }
        ]}
        width={parent.width}
        height={300}
      />
    )}
  </ParentSize>
)
