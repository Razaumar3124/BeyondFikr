import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const HeroPage = () => {
  return (
    <Box sx={{height: '100vh',bgcolor: "rgb(232, 232, 232)",padding: {xs: "10px 0 0 0",md: "5px 0 0 0"}}}>
        <Navbar />
        <Outlet />
    </Box>
  )
}

export default HeroPage