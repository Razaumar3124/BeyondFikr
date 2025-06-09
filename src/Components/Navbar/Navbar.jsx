import { Box } from '@mui/material'
import React from 'react'
import TemporaryDrawer from '../../Utils/TemporaryDrawer'

const Navbar = () => {
  return (
    <Box sx={{height: "20vh", border: "2px solid red"}}>
      <TemporaryDrawer />
    </Box>
  )
}

export default Navbar