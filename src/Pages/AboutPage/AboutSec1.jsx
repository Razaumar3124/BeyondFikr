import { Box, Typography, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import aboutImg from "../../assets/AboutPageImg/aboutimg.jpg"
import useStore from '../../Store/Store'

gsap.registerPlugin(ScrollTrigger);

const AboutSec1 = () => {

  const theme = useTheme();
  
  const leftRef = useRef(null);
  const righttopRef = useRef(null);
  const rightbtmRef = useRef(null);
  const sideAnim = useStore((state) => state.sideAnimation);

  useEffect(() => {
    sideAnim(leftRef, -100, 0);
    sideAnim(righttopRef, -40, 40);
    sideAnim(rightbtmRef, 40, -40, 1);
  }, []);

  return (
    <Box sx={{
      display: "flex",
      flexWrap: "wrap",
      mt: "30px"
    }}>
        <Box
        sx={{
          width: {xs: "100%",md: "50%"},
          padding: "70px 0px 30px 0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        >
          <Box sx={{position: "relative",marginRight: {xs: "10%",md: "5%"}}}>
            <Box 
            ref={rightbtmRef}
            sx={{
              width: {xs: "300px",md: "400px"},
              height: {xs: "300px",md: "400px"},
              borderRadius: "10px",
              clipPath: "polygon(0 0, 100% 100%, 0 100%)",
              background: "linear-gradient(90deg, #3498db 0%, #2c3e50 100%)",
              zIndex: -1,
            }}>
            </Box>
            <Box
              component="img"
              src={aboutImg}
              ref={righttopRef}
              sx={{
                position: "absolute",
                bottom: "40px",
                left: "40px",
                width: {xs: "300px",md: "400px"},
                height: {xs: "300px",md: "400px"},
                objectFit: "cover",
                borderRadius: "8px",
                zIndex: 1
              }}
            />
          </Box>
        </Box>
        <Box
        sx={{width: {xs: "100%",md: "50%"},display: "flex",justifyContent: {xs: "center",md: "left"},alignItems: "center"}}
        >
          <Box
          ref={leftRef}
          sx={{width: "80%"}}
          >
            <Typography 
            variant='subtitle1'>
              <Typography component="span" sx={{fontSize: {xs: "1.5em",md: "2.5em"}}}>
                At Beyond Fikr
              </Typography>, we believe healing begins in a space where you're held emotionally, mentally, and spiritually. Our approach is rooted in safety, non-judgment, and compassion. Whether you're experiencing anxiety, inner conflict, or emotional heaviness, our goal is to offer secure space where you can pause, reflect, and begin again. We understand that before healing can begin, one must feel seen, heard, and supported and that’s where we start.
            </Typography>
            <Typography variant='subtitle1'>
              The name Beyond Fikr reflects the journey we walk with you moving past fikr worry, fear, and emotional chaos toward clarity, strength, and resilience. Just like a plant that rises from nurturing hands toward the light, we believe transformation happens naturally when you're met with care, empathy, and evidence-based tools. Our sessions are not just about coping they're about discovering your own capacity to thrive, grow, and move beyond limitations.
            </Typography>
            <Typography variant='subtitle1'>
              Beyond Fikr isn’t just therapy it’s a quiet revolution of hope, emotional rebirth, and the rediscovery of inner peace. You're not alone and you were never meant to heal alone.
            </Typography>
          </Box>
        </Box>
    </Box>
  )
}

export default AboutSec1