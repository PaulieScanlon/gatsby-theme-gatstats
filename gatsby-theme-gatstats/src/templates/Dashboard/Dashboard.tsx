/** @jsx jsx */
import { jsx, Flex, Box, Styled } from 'theme-ui'

import { YearChartContainer } from '../../components/YearChart'
// import { TagsChart } from "../features/TagsChart"
import { DaysChartContainer } from '../../components/DaysChart'
// import { LatestPost } from "../features/LatestPost"

export const Dashboard = () => (
  <Styled.div>
    <Flex
      sx={{
        flexWrap: 'wrap'
      }}
    >
      <Box
        sx={{
          width: ['100%', '100%', '50%']
        }}
      >
        <YearChartContainer />
      </Box>
      <Box
        sx={{
          width: ['100%', '100%', '50%']
        }}
      >
        {/* <TagsChart /> */}
      </Box>
      <Box
        sx={{
          width: ['100%', '100%', '50%']
        }}
      >
        <DaysChartContainer />
      </Box>
      <Box
        sx={{
          width: ['100%', '100%', '100%']
        }}
      >
        {/* <LatestPost /> */}
      </Box>
    </Flex>
  </Styled.div>
)
