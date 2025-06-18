import { Box } from '@mui/material'
import heroImg from "../../assets/HeroSecImg/heroimg3.png"
import React from 'react'

const HomeSec1 = () => {
  return (
    <Box
    sx={{
    height: {xs: "90vh",md: "100vh"},
    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 100%), url(${heroImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
    }}
    >
        <Box
        >
            
        </Box>
    </Box>
  )
}

export default HomeSec1