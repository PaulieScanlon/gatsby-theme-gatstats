import * as React from 'react'
import { ParentSize } from '@vx/responsive'

import { YearChart } from './YearChart'

export default {
  title: 'YearChart',
  parameters: {
    component: YearChart,
    componentSubtitle: 'YearChart is...'
  }
}

export const usage = () => (
  <ParentSize>
    {(parent: any) => (
      <YearChart
        previousYearData={[
          { label: 'J', monthName: 'Jan', month: 0, count: 0 },
          { label: 'F', monthName: 'Feb', month: 1, count: 4 },
          { label: 'M', monthName: 'Mar', month: 2, count: 2 },
          { label: 'A', monthName: 'Apr', month: 3, count: 7 },
          { label: 'M', monthName: 'May', month: 4, count: 1 },
          { label: 'J', monthName: 'Jun', month: 5, count: 3 },
          { label: 'J', monthName: 'Jul', month: 6, count: 1 },
          { label: 'A', monthName: 'Aug', month: 7, count: 10 },
          { label: 'S', monthName: 'Sep', month: 8, count: 3 },
          { label: 'O', monthName: 'Oct', month: 9, count: 0 },
          { label: 'N', monthName: 'Nov', month: 10, count: 9 },
          { label: 'D', monthName: 'Dec', month: 11, count: 0 }
        ]}
        currentYearData={[
          { label: 'J', monthName: 'Jan', month: 0, count: 1 },
          { label: 'F', monthName: 'Feb', month: 1, count: 1 },
          { label: 'M', monthName: 'Mar', month: 2, count: 1 },
          { label: 'A', monthName: 'Apr', month: 3, count: 2 },
          { label: 'M', monthName: 'May', month: 4, count: 1 },
          { label: 'J', monthName: 'Jun', month: 5, count: 1 },
          { label: 'J', monthName: 'Jul', month: 6, count: 1 },
          { label: 'A', monthName: 'Aug', month: 7, count: 1 },
          { label: 'S', monthName: 'Sep', month: 8, count: 3 },
          { label: 'O', monthName: 'Oct', month: 9, count: 0 },
          { label: 'N', monthName: 'Nov', month: 10, count: 0 },
          { label: 'D', monthName: 'Dec', month: 11, count: 0 }
        ]}
        width={parent.width}
        height={300}
      />
    )}
  </ParentSize>
)
