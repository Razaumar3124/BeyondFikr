import { Box, Button, Typography, useTheme } from '@mui/material'
import servicesImg from "../../assets/HomePageImgs/NewImage.jpg"
import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import useStore from '../../Store/Store';

gsap.registerPlugin(ScrollTrigger);

const HomeSec3 = () => {

    const theme = useTheme();

    const ParaRef = useRef(null);
    const ImgRef = useRef(null);
    const sideAnim = useStore((state) => state.sideAnimation);
  
    useEffect(() => {
      sideAnim(ParaRef, 30);
      sideAnim(ImgRef, -30);
    }, []);

  return (
    <Box>
        <Typography
        variant='h6'
        sx={{padding: {xs: "40px",md: "30px"},display: "flex",textAlign: "center",justifyContent: "center",fontFamily: `${theme.palette.custom.fontfamily}`, wordSpacing: "-2px",fontSize: {xs: "32px",md: "50px"},fontWeight: "bold"}}
        >
            Explore Our Offerings
        </Typography>
        <Box
        sx={{display: "flex",flexWrap: "wrap-reverse",justifyContent: "center",m: {md: "30px 0"}}}
        >
            <Box
            ref={ParaRef}
            sx={{width: {xs: "80%",md: "50%"},padding: {xs: "30px 0px",md: "50px 100px"},display: "flex",flexDirection: "column",justifyContent: "center",gap: "20px"}}
            >
                <Typography
                variant='body1'
                sx={{fontFamily: theme.palette.custom.fontfamily,fontWeight: "bold", wordSpacing: "-2px",fontSize: {xs: "25px",md: "35px"}}}
                >
                    Services That Empower Your Mind
                </Typography>
                <Typography
                variant='body1'
                sx={{fontFamily: theme.palette.custom.fontfamily,color: "rgb(110,110,110)"}}
                >
                    We provide a range of psychological training programs designed to enhance emotional resilience and mental clarity. Our services are tailored to help you strengthen your mind, develop coping strategies, and foster a supportive community. Whether youre seeking personal growth or professional development, our programs are here to guide you on your journey.
                </Typography>
                
                <Button
                variant='outlined'
                sx={{border: "2px solid black",color: "black",width: {xs: "50%",md: "25%"}}}
                >   
                    <NavLink
                    to="/services"
                    style={{color: "black",textDecorationLine: "none"}}
                    >
                        Learn More
                    </NavLink>

                </Button>
            </Box>
            <Box
            sx={{width: {xs: "100%",md: "50%"},display: "flex",justifyContent: "center",alignItems: "center"}}
            >
                <Box 
                ref={ImgRef}
                component="img"
                src={servicesImg}
                sx={{width: {xs: "300px",md: "600px"},height: {xs: "300px",md: "500px"},borderRadius: "20px"}}
                />
            </Box>
        </Box>
    </Box>
  )
}

export default HomeSec3