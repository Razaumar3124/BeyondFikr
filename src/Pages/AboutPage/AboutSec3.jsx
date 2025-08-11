import { Box, Button, Typography, useTheme } from '@mui/material'
import trainingImg from "../../assets/servicesImgs/trainingImg.jpg"
import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import useStore from '../../Store/Store';

gsap.registerPlugin(ScrollTrigger);

const AboutSec3 = () => {

  const theme = useTheme();

  const rightRef = useRef(null);
  const lefttopRef = useRef(null);
  const leftbtmRef = useRef(null);
  const sideAnim = useStore((state) => state.sideAnimation);

  useEffect(() => {
    sideAnim(rightRef, 30, 0);
    sideAnim(lefttopRef, 40, 40);
    sideAnim(leftbtmRef, -40, -40, 1);
  }, []);

  return (
    <Box sx={{
      display: "flex",
      flexWrap: "wrap-reverse",
      marginTop: "50px"
    }}>
        <Box
        sx={{width: {xs: "100%",md: "50%"},display: "flex",justifyContent: {xs: "center",md: "right"},alignItems: "center"}}
        >
            <Box 
            ref={rightRef}
            sx={{width: "80%",display: "flex",flexDirection: "column",gap: "20px"}}
            >
                <Typography
                variant='body1'
                sx={{fontFamily: theme.palette.custom.fontfamily,fontWeight: "bold",wordSpacing: "-4px",fontSize: {xs: "35px",md: "40px"},lineHeight: "50px"}}
                >
                    Our Training Program
                </Typography>
                <Typography
                variant='subtitle1'
                sx={{fontSize: {xs: "15px",md: "18px"}, color: "rgba(0,0,0,0.6)"}}
                >
                    We provide comprehensive and tailored training programs aimed at empowering students, professionals, and organizations with essential psychological skills and emotional intelligence. Our offerings focus on enhancing mental health awareness through practical, real-life applications and are grounded in proven, evidence-based approaches. These programs are thoughtfully structured to foster resilience, self-awareness, and effective communication equipping participants to thrive personally and professionally.
                </Typography>
                <NavLink to="/services">
                    <Button
                    variant='contained'
                    sx={{color: "white",bgcolor: "black"}}
                    >
                        Learn More
                    </Button>
                </NavLink>
            </Box>
        </Box>  
        <Box
        sx={{
          width: {xs: "100%",md: "50%"},
          padding: "70px 0px 30px 0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        >
          <Box sx={{position: "relative",marginLeft: {xs: "15%",md: "5%"}}}>
            <Box 
            ref={leftbtmRef}
            sx={{
              width: {xs: "250px",md: "400px"},
              height: {xs: "250px",md: "400px"},
              borderRadius: "10px",
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
              background: "linear-gradient(90deg, #3498db 0%, #2c3e50 100%)"
            }}>
            </Box>
            <Box
              component="img"
              src={trainingImg}
              ref={lefttopRef}
              sx={{
                position: "absolute",
                bottom: {xs: "25px", md: "40px"},
                right: {xs: "25px", md: "40px"},
                width: {xs: "280px",md: "400px"},
                height: {xs: "280px",md: "400px"},
                objectFit: "cover",
                borderRadius: "8px",
                zIndex: 1
              }}
            />
          </Box>
        </Box>
    </Box>
  )
}

export default AboutSec3