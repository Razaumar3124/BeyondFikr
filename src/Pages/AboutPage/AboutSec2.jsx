import { Box, Button, Card, CardContent, IconButton, Typography, useTheme } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import hakimaImg from "../../assets/AboutPageImg/hakima5.jpg"
import pranitaImg from "../../assets/AboutPageImg/Pranita6.jpg"

gsap.registerPlugin(ScrollTrigger);

const AboutSec2 = () => {

    const theme = useTheme();

    const teamList = [
      {
        img: hakimaImg,
        position: "Founder & Director",
        name: "Hakima Shaikh",
        role: "Counseling Psychoogist",
        summary: "",
        instaP: "",
        linkedinP: "https://www.linkedin.com/in/hakima-shaikh-904b0a234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        img: pranitaImg,
        position: "Co-founder",
        name: "Pranita Mane",
        role: "Counseling",
        summary: "",
        instaP: "",
        linkedinP: "https://www.linkedin.com/in/pranita-mane-898693245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ]

    const AnimateRef = useRef([]);
    
    useEffect(()=>{
      

      AnimateRef.current.forEach((el,i)=>{
        if (!el) return;

        gsap.fromTo(
          el,
          { opacity: 0, y: 100 },
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
    sx={{marginTop: "30px"}}
    >
        <Typography
        variant='body1'
        sx={{fontFamily: theme.palette.custom.fontfamily,fontWeight: "bold",fontSize: {xs: "40px",md: "50px"},display: "flex",justifyContent: "center",textAlign: "center"}}
        >
            Meet Our Dedicated Team
        </Typography>
        <Box
        sx={{marginTop: "40px",display: "flex",flexWrap: "wrap",justifyContent: "center",gap: {xs: "70px",md: "100px"}}}
        >
            {teamList.map((val,i)=>(
              <Card
              key={i}
              ref={el => (AnimateRef.current[i] = el)}
              sx={{ maxWidth: 365 }}
              >
                <Box
                sx={{height: "420px",display: "flex",flexDirection: "column",justifyContent: "end",position: "relative"}}
                >
                  <Box
                  sx={{
                    height: "50%",
                    background: "linear-gradient(135deg, #3B1515 0%, #732C2C 100%)",
                    borderRadius: "8px"
                  }}
                  />
                  <Box 
                  component="img"
                  src={val.img}
                  sx={{width: "300px",height: "350px",position: "absolute",left: "30px",bottom: "40px",borderRadius: "10px"}}
                  />
                </Box>
                <CardContent 
                sx={{position: "relative",display: "flex",flexDirection: "column",gap: "10px"}}
                >
                  <Box
                  sx={{display: "flex",flexDirection: "column",gap: "10px"}}
                  >
                    <Typography
                    variant='body1'
                    sx={{fontFamily: theme.palette.custom.fontfamily,wordSpacing: "-2px"}}
                    >
                      {val.position}
                    </Typography>
                    <Typography
                    variant='body1'
                    sx={{fontFamily: theme.palette.custom.fontfamily,fontWeight: "bold",fontSize: "25px"}}
                    >
                      {val.name}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                    variant='body1'
                    sx={{fontFamily: theme.palette.custom.fontfamily,fontWeight: "bold",fontSize: "20px"}}
                    >
                      {val.role}
                    </Typography>
                    <Typography
                    variant='body1'
                    sx={{fontFamily: theme.palette.custom.fontfamily,lineHeight: {xs: "25px",md: "20px"},color: "gray"}}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, possimus quo ab esse optio, dolorem reprehenderit nostrum, sapiente veniam cum atque nulla? Quasi inventore id culpa quis ullam dignissimos. Rerum.
                    </Typography>
                  </Box>
                  <Box
                  sx={{position: "absolute",top: "0px",right: "0px"}}
                  >
                    <NavLink
                    to={val.linkedinP}
                    target='_blank'
                    >
                      <IconButton>
                        <LinkedInIcon sx={{color: "rgb(0,123,182)",fontSize: "35px"}}/>
                      </IconButton>
                    </NavLink>
                  </Box>
                </CardContent>
              </Card>
            ))}
        </Box>
    </Box>
  )
}

export default AboutSec2