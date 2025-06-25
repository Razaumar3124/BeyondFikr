import { Box, Typography, useTheme } from '@mui/material'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const HomeSec2 = () => {

    const theme = useTheme();

    const benefitList = [
        {
            header: "Build Resilience",
            body: "Strengthen your ability to bounce back from challenges and maintain a positive outlook through life’s ups and downs."
        },
        {
            header: "Enhance Emotional Strength",
            body: "Develop tools to manage your emotions better, promoting a healthier and more balanced life."
        },
        {
            header: "Gain Clarity",
            body: "Find focus and direction in your personal and professional life, leading to better decision-making and fulfillment."
        },
        {
            header: "Foster Community Support",
            body: "Join a supportive network of like-minded individuals to share experiences and encourage one another in your journeys."
        },
    ]

    const AnimateRef = useRef([]);

    useEffect(()=>{
        AnimateRef.current.forEach((el,i)=>{
            if (!el) return;

            gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                }
            )
        })    
    },[])

  return (
    <Box
    sx={{padding: "30px 0",display: "flex",flexDirection: "column",alignItems: "center"}}
    >
        <Typography
        variant='h6'
        sx={{padding: {xs: "40px",md: "30px"},display: "flex",textAlign: "center",fontFamily: `${theme.palette.custom.fontfamily}`,fontSize: {xs: "34px",md: "50px"},fontWeight: "bold"}}
        >
            Key Benefits of Our Program
        </Typography>
        <Box
        sx={{padding: {md: "40px"},display: "flex",flexWrap: "wrap", justifyContent: "center",gap: {xs: "30px",md: "60px"}}}
        >
            {benefitList.map((val,i)=>{
                return(
                    <Box
                    key={i}
                    ref={el => (AnimateRef.current[i] = el)}
                    sx={{border: "2px solid",padding: "20px",width: "280px",minWidth: "250px",borderRadius: "20px"}}
                    >
                        <StarRoundedIcon sx={{color: "goldenrod",fontSize: "70px"}} />
                        <Typography
                        sx={{fontSize: "22px",fontFamily: `${theme.palette.custom.fontfamily}`,fontWeight: "bold"}}
                        >
                            {val.header}
                        </Typography>
                        <Typography
                        variant='body1'
                        sx={{fontFamily: `${theme.palette.custom.fontfamily}`}}
                        >
                            {val.body}
                        </Typography>
                    </Box>
                )
            })}
        </Box>
    </Box>
  )
}

export default HomeSec2