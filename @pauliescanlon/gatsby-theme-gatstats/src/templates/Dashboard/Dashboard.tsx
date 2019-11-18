/** @jsx jsx */
import { jsx, Flex, Box, Styled } from 'theme-ui'

import { YearChartContainer } from '../../components/YearChart'
import { TagsChartContainer } from '../../components/TagsChart'
import { DaysChartContainer } from '../../components/DaysChart'
import { LatestPostsContainer } from '../../components/LatestPosts'

export const Dashboard = () => (
  <Styled.div>
    <Flex
      sx={{
        flexWrap: 'wrap'
      }}
    >
      <Box
        sx={{
          width: ['100%', '100%', '50%'],
          pr: [0, 0, 2],
          pb: 3
        }}
      >
        <YearChartContainer />
      </Box>
      <Box
        sx={{
          width: ['100%', '100%', '50%'],
          pl: [0, 0, 2],
          pb: 3
        }}
      >
        <TagsChartContainer />
      </Box>
      <Box
        sx={{
          width: ['100%', '100%', '50%'],
          pr: [0, 0, 2],
          pb: 3
        }}
      >
        <DaysChartContainer />
      </Box>
      <Box
        sx={{
          width: ['100%', '100%', '50%'],
          pl: [0, 0, 2],
          pb: 3
        }}
      >
        <LatestPostsContainer />
      </Box>
    </Flex>
  </Styled.div>
)
