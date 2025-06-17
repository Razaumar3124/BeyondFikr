import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

const HeroPage = () => {
  return (
    <Box sx={{height: '100vh',bgcolor: "rgb(232, 232, 232)",padding: {xs: "10px 0 0 0",md: "5px 0 0 0"}}}>
        <Navbar />
        <Outlet />
        <Footer />  
    </Box>
  )
}

export default HeroPage