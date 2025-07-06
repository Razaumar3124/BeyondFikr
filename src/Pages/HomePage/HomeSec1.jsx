import { Box, Button, Typography, useTheme } from '@mui/material'
import heroImg from "../../assets/HeroSecImg/heroimg3.png"
import React from 'react'

const HomeSec1 = () => {

  const theme = useTheme();

  return (
    <Box
    sx={{
    height: {xs: "90vh",md: "100vh"},
    backgroundImage: `url(${heroImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: {xs: "center",md: "left"},
    alignItems: "center",
    }}
    >
        <Box
        sx={{
          width: {xs: "80%",md: "35%"},
          height: {xs: "50%",md: "45%"},
          marginBottom: "70px",
          ml: "3%",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: {xs: "10px",md: "5px"},
          wordSpacing: "-7px",
          backgroundColor: "rgba(255, 255, 255, 0.05)", // Slightly increased opacity for visibility
          backdropFilter: "blur(10px)", // Keep strong background blur
          WebkitBackdropFilter: "blur(10px)", // Cross-browser compatibility
          boxShadow: "0 0 60px 25px rgba(255, 255, 255, 0.05)", // White glow for outward blur
        }}
        >
            <Typography
            variant='h5'
            sx={{display: "flex",textAlign: "center",fontSize: {xs: "20px",md: "25px"},fontFamily: `${theme.palette.custom.fontfamily}`,fontWeight: "bold"}}
            >
              BeyondFikr! WHERE MENTAL PEACE MATTERS
            </Typography>
            <Typography
            variant='h5'
            sx={{display: "flex",textAlign: "center",fontSize: {xs: "26px",md: "30px"},fontFamily: `${theme.palette.custom.fontfamily}`,fontWeight: "bold",wordSpacing: "-4px"}}
            >
              IN A NOISY WORLD, YOUR MIND DESERVES PEACE
            </Typography>
            <Typography
            variant='h5'
            sx={{display: "flex",textAlign: "center",fontSize: {xs: "20px",md: "25px"},fontFamily: `${theme.palette.custom.fontfamily}`,fontWeight: "500"}}
            >
              TAKE YOUR FIRST STEP WITH US BEYOND WORRY
            </Typography>
            <Button
            variant='outlined'
            sx={{marginTop: "10px",padding: "10px 30px",borderColor: "black",color: "black"}}
            >
              Know more
            </Button>
        </Box>
    </Box>
  )
}

export default HomeSec1