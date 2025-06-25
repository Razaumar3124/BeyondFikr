import { Box, Button, Card, CardContent, IconButton, Typography, useTheme } from '@mui/material'
import trainingImg from "../../assets/servicesImgs/trainingImg.jpg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const AboutSec2 = () => {

    const theme = useTheme();

    const teamList = [
      {
        img: "",
        position: "Founder & Director",
        name: "Hakima Shaikh",
        role: "Counseling Psychoogist",
        summary: "",
        instaP: "",
        linkedinP: "",
      },
      {
        img: "",
        position: "Co-founder",
        name: "Pranita Singh",
        role: "Counseling",
        summary: "",
        instaP: "",
        linkedinP: "",
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
                sx={{height: "310px",display: "flex",flexDirection: "column",justifyContent: "end",position: "relative"}}
                >
                  <Box
                  sx={{
                    height: "50%",
                    background: "linear-gradient(#667eea 50%, #764ba2 100%)",
                    borderRadius: "8px"
                  }}
                  />
                  <Box 
                  component="img"
                  src={trainingImg}
                  sx={{width: "300px",height: "250px",position: "absolute",left: "30px",bottom: "40px",borderRadius: "10px"}}
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
                    <NavLink>
                      <IconButton>
                        <InstagramIcon sx={{color: "rgb(255,1,160)",fontSize: "35px"}}/>
                      </IconButton>
                    </NavLink>
                    <NavLink>
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