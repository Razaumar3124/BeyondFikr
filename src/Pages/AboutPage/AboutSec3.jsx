import { Box, Button, Typography, useTheme } from '@mui/material'
import trainingImg from "../../assets/servicesImgs/trainingImg.jpg"
import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const AboutSec3 = () => {

  const theme = useTheme();

  const AnimateRef = useRef(null);
  const ParaRef = useRef(null);

  useEffect(()=>{
    const tl = AnimateRef.current;
    const el = ParaRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      }
    )

    gsap.fromTo(
      tl,
      { opacity: 0, x: 40, y: 40 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tl,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    )

  },[])

  return (
    <Box sx={{
      display: "flex",
      flexWrap: "wrap-reverse",
      marginTop: "50px"
    }}>
        <Box
        sx={{width: {xs: "100%",md: "50%"},display: "flex",justifyContent: "right",alignItems: "center"}}
        >
            <Box 
            ref={ParaRef}
            sx={{width: "80%",display: "flex",flexDirection: "column",gap: "20px"}}
            >
                <Typography
                variant='body1'
                sx={{fontFamily: theme.palette.custom.fontfamily,fontWeight: "bold",fontSize: "40px",wordSpacing: "-8px",lineHeight: "50px"}}
                >
                    Our Training Program
                </Typography>
                <Typography
                variant='subtitle1'
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
          <Box sx={{position: "relative",marginLeft: {xs: "10%",md: "5%"}}}>
            <Box sx={{
              width: {xs: "300px",md: "400px"},
              height: {xs: "300px",md: "400px"},
              borderRadius: "10px",
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
              background: "linear-gradient(90deg, #3498db 0%, #2c3e50 100%)"
            }}>
            </Box>
            <Box
              component="img"
              src={trainingImg}
              ref={AnimateRef}
              sx={{
                position: "absolute",
                bottom: "40px",
                right: "40px",
                width: {xs: "300px",md: "400px"},
                height: {xs: "300px",md: "400px"},
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