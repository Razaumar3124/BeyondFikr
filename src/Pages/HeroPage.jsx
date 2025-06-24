import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer.jsx'
import ScrollToTop from '../Utils/ScrollToTop.jsx'

const HeroPage = () => {
  return (
    <Box 
    sx={{padding: {xs: "10px 0px 10px 0px",md: "5px 0px 5px 0px"}}} 
    >
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />  
    </Box>
  )
}

export default HeroPage