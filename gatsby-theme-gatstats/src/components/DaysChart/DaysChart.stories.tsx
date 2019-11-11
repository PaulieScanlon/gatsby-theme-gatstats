import * as React from 'react'
import { ParentSize } from '@vx/responsive'

import { DaysChart } from './DaysChart'

export default {
  title: 'DaysChart',
  parameters: {
    component: DaysChart,
    componentSubtitle: 'DaysChart is...'
  }
}

export const usage = () => (
  <ParentSize>
    {(parent: any) => (
      <DaysChart
        daysChartData={[
          { label: 'M', day: 'Mon', count: 1 },
          { label: 'T', day: 'Tue', count: 6 },
          { label: 'W', day: 'Wed', count: 2 },
          { label: 'T', day: 'Thu', count: 2 },
          { label: 'F', day: 'Fri', count: 2 },
          { label: 'S', day: 'Sat', count: 3 },
          { label: 'S', day: 'Sun', count: 4 }
        ]}
        width={parent.width}
        height={300}
      />
    )}
  </ParentSize>
)
