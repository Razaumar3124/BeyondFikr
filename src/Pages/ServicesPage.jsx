import { Box, Button, Typography, useTheme } from '@mui/material'
import groupTherapyImg from "../assets/servicesImgs/groupTherapyImg.jpg"
import coupleImg from "../assets/servicesImgs/coupleImg.jpg"
import individualImg from "../assets/servicesImgs/individualImg.jpg"
import trainingImg from "../assets/servicesImgs/trainingImg.jpg"
import workshopImg from "../assets/servicesImgs/workshopImg.jpg"
import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const ServicesPage = () => {

  const theme = useTheme();

  const servicesList = [
    {
      img: individualImg,
      title: "Individual Therapy",
      summary: "A safe and supportive one-on-one space to explore your thoughts, feelings, and patterns. Our therapists work with you to understand your challenges and help you build clarity, emotional resilience, and inner balance at your own pace.",
      path: "https://forms.gle/Cw4esDQTEEYNQLyu9",
    },
    {
      img: groupTherapyImg,
      title: "Group Therapy",
      summary: "Healing through connection. Group therapy offers a safe, shared space to learn, grow, and support one another. Guided by a skilled therapist, these sessions allow you to relate, reflect, Heal and feel less alone in your journey.",
      path: "https://forms.gle/Hk1qiiodPFphaueR7",
    },
    {
      img: coupleImg,
      title: "Couple Therapy",
      summary: "Strengthen your bond with honest conversations and guided support. Whether you're navigating conflict or deepening your connection, couple therapy helps partners understand each other better and grow together.",
      path: "https://forms.gle/tymcemRHraNG1WCi7",
    },
    {
      img: trainingImg,
      title: "Training Programs",
      summary: "We offer structured training programs for students, professionals, and organizations to build psychological skills, emotional intelligence, and mental health awareness. Each program is designed with real-world applicability and evidence-based practices.",
      path: "https://forms.gle/z7FjdoJg1LE1ryDj7",
    },
    {
      img: workshopImg,
      title: "Workshops",
      summary: "Interactive and insightful, our workshops cover a wide range of essential mental health topics—from stress management to self-awareness. Thoughtfully designed to spark reflection and equip you with practical tools for everyday emotional well-being.",
      path: "https://forms.gle/cnhz3GzhnwYoGb33A",
    },
  ]

  const handleClick = (path) => {
    window.open(path, "_blank")
  }

  gsap.registerPlugin(ScrollTrigger);

  const boxRef = useRef([]);

  useEffect(() => {
    boxRef.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.1, // optional: stagger animation slightly
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <Box
    sx={{padding: {xs: "30px 0px",sm: "30px 60px"},display: "flex",flexWrap: "wrap",justifyContent: {xs: "center"},gap: {xs: "40px",md: "50px"}}}
    >
      {servicesList.map((val,i)=>(
        <Box
        key={i}
        ref={el => (boxRef.current[i] = el)}
        sx={{bgcolor: "whitesmoke",width: {xs: "90%",md: "370px",xl: "410px"},padding: "20px",display: "flex",flexDirection: "column",gap: "15px",borderRadius: "10px"}}>
          <Box 
          component="img"
          src={val.img}
          sx={{width: "100%",height: "250px",borderRadius: "inherit"}}
          />
          <Typography
          variant='body1'
          sx={{fontFamily: theme.palette.custom.fontfamily, fontWeight: "bold",fontSize: "30px"}}
          >
            {val.title}
          </Typography>
          <Typography
          variant='body1'
          sx={{color: "rgb(110,110,110)"}}
          >
            {val.summary}
          </Typography>
          <Button
          variant='contained'
          onClick={()=>handleClick(val.path)}
          sx={{bgcolor: 'black',width: '100%'}}
          >
              Book appointment
          </Button>
        </Box>
      ))}
    </Box>
  )
}

export default ServicesPage