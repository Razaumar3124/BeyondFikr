import { Box } from '@mui/material'
import heroImg from "../assets/HeroSecImg/heroimg.jpg"
import React from 'react'

const HomePage = () => {
  return (
    <Box
    sx={{height: {xs: "80vh",md: "87vh"},backgroundImage: `url(${heroImg})`,backgroundRepeat: "no-repeat",backgroundPosition: "center"}}
    >

    </Box>
  )
}

export default HomePage