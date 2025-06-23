import { Box, Button, Typography, useTheme } from '@mui/material'
import servicesImg from "../../assets/HomePageImgs/servicesImg.jpg"
import React from 'react'
import { NavLink } from 'react-router-dom';

const HomeSec3 = () => {

    const theme = useTheme();

  return (
    <Box>
        <Typography
        variant='h6'
        sx={{padding: {xs: "40px",md: "30px"},display: "flex",textAlign: "center",justifyContent: "center",fontFamily: `${theme.palette.custom.fontfamily}`,fontSize: {xs: "34px",md: "50px"},fontWeight: "bold"}}
        >
            Explore Our Offerings
        </Typography>
        <Box
        sx={{display: "flex",flexWrap: "wrap-reverse",justifyContent: "center"}}
        >
            <Box
            sx={{width: {xs: "80%",md: "50%"},padding: {xs: "30px 0px",md: "50px 100px"},display: "flex",flexDirection: "column",justifyContent: "center",gap: "20px"}}
            >
                <Typography
                variant='body1'
                sx={{fontFamily: theme.palette.custom.fontfamily,fontWeight: "bold",fontSize: "30px"}}
                >
                    Services That Empower Your Mind
                </Typography>
                <Typography
                variant='body1'
                sx={{fontFamily: theme.palette.custom.fontfamily,color: "rgb(110,110,110)"}}
                >
                    We provide a range of psychological training programs designed to enhance emotional resilience and mental clarity. Our services are tailored to help you strengthen your mind, develop coping strategies, and foster a supportive community. Whether youre seeking personal growth or professional development, our programs are here to guide you on your journey.
                </Typography>
                <NavLink
                to="/services"
                >
                    <Button
                    variant='outlined'
                    sx={{border: "2px solid black",color: "black"}}
                    >
                        Learn More
                    </Button>
                </NavLink>
            </Box>
            <Box
            sx={{width: {xs: "100%",md: "50%"},display: "flex",justifyContent: "center",alignItems: "center"}}
            >
                <Box 
                component="img"
                src={servicesImg}
                sx={{width: "80%",height: {xs: "300px",md: "80%",lg: "auto"},borderRadius: "20px"}}
                />
            </Box>
        </Box>
    </Box>
  )
}

export default HomeSec3