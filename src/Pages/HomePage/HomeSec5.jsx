import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from '@mui/material'
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import confusedMan from "../../assets/HomePageImgs/confusedMan.png"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const HomeSec5 = () => {

    const theme = useTheme();

    const QuestionList = [
        {
            question: "How can I enroll?",
            answer: "You can enroll by signing up through our website. Just fill out a short form and select the service that best fits your needs."
        },
        {
            question: "Who can benefit from this program?",
            answer: "Anyone seeking emotional well-being, personal growth, or support through life challenges—students, professionals, and individuals from all walks of life—can benefit from our services."
        },
        {
            question: "How is the content delivered?",
            answer: "Through a blend of interactive online modules, video sessions, and personal guidance, tailored to your pace and preferences."
        },
        {
            question: "Is there a community aspect?",
            answer: "Yes, we offer a safe and supportive community space for discussions, group activities, and peer learning."
        },
        {
            question: "Is my information kept confidential?",
            answer: "Absolutely. Your privacy is our priority. All personal data and interactions are kept strictly confidential and handled with the utmost care, following industry-standard security practices."
        },
    ]

    const ImgRef = useRef(null);
    const AccordionRef = useRef([]);

    useEffect(()=>{
        const el = ImgRef.current;

        gsap.fromTo(
            el,
            { opacity: 0, x: -70 },
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

        AccordionRef.current.forEach((tl,i)=>{
            if (!tl) return;

            gsap.fromTo(
                tl,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: tl,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                }
            )
        })
    },[])

  return (
    <Box
    sx={{marginTop: "40px"}}
    >
        <Box
        sx={{display: "flex",flexDirection: "column",alignItems: "center"}}
        >
            <Typography
            variant='body1'
            sx={{fontFamily: `${theme.palette.custom.fontfamily}`,fontSize: {xs: "34px",md: "50px"},fontWeight: "bold"}}
            >
                Common Question
            </Typography>
            <Typography
            variant='body1'
            sx={{width: "80%",display: "flex", textAlign: "center",justifyContent: "center",fontFamily: `${theme.palette.custom.fontfamily}`,fontSize: {xs: "18px",md: "25px"},fontWeight: "bold"}}
            >
                Here are some of the most frequently asked questions.
            </Typography>
        </Box>
        <Box
        sx={{marginTop: "10px",display: "flex",flexWrap: "wrap"}}
        >
            <Box
            sx={{width: {xs: "100%",md: "50%"},display: "flex", justifyContent: "center",alignItems: "center" }}
            >
                <Box 
                component='img'
                src={confusedMan}
                ref={ImgRef}
                sx={{width: {xs: "350px",md: "80%"},height: {xs: "350px",md: "80%"}}}
                />
            </Box>
            <Box
            sx={{width: {xs: "auto",md: "50%"},padding: {xs: "20px",md: "0px 40px 0px 0px"},display: "flex",flexDirection: "column",justifyContent: "center",gap: "10px"}}
            >
                {QuestionList.map((val,i)=>(
                    <Accordion 
                    key={i}
                    ref={tl => (AccordionRef.current[i] = tl)}
                    sx={{
                        color: "blue", 
                        padding: "7px 0", 
                        borderTop: "1px solid blue",
                        boxShadow: "none",
                        borderRadius: 0, 
                        "&:before": {display: "none"}}}
                    >
                        <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{color: "blue"}} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <Typography component="span">{val.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            {val.answer}
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box>
    </Box>
  )
}

export default HomeSec5