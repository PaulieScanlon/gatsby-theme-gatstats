/** @jsx jsx */
import { jsx, Flex, Box, Styled } from "theme-ui"

import { TagsChart } from "../features/TagsChart"
import { DaysChart } from "../features/DaysChart"
import { LatestPost } from "../features/LatestPost"

export const DashboardLayout = () => (
  <Styled.div>
    <Flex
      sx={{
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          width: ["100%", "50%"],
        }}
      >
        <TagsChart />
      </Box>
      <Box
        sx={{
          width: ["100%", "50%"],
        }}
      >
        <DaysChart />
      </Box>
      <Box
        sx={{
          width: ["100%", "100%"],
        }}
      >
        <LatestPost />
      </Box>
    </Flex>
  </Styled.div>
)
