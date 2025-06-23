import { Box } from '@mui/material'
import React from 'react'
import HomeSec1 from './HomePage/HomeSec1.jsx'
import HomeSec2 from './HomePage/HomeSec2.jsx'
import HomeSec4 from './HomePage/HomeSec4.jsx'
import HomeSec5 from './HomePage/HomeSec5.jsx'
import HomeSec3 from './HomePage/HomeSec3.jsx'

const HomePage = () => {
  return (
    <Box>
      <HomeSec1 />
      <HomeSec2 />
      <HomeSec3 />
      <HomeSec4 />
      <HomeSec5 />
    </Box>
  )
}

export default HomePage