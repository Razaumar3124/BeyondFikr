import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation} from "swiper/modules";

const HomeSec4 = () => {

    const theme = useTheme();

    const ClientList = [
        {
            pic: "",
            msg: "Sessions by beyondfikr was a game-changer for managing my stress. The techniques I learned there helped me find calm amidst chaos and approach challenges with confidence!",
            name: "Ibrahim Khan",
            init: "I K",
            position: "Cloud Solutions Engineer",
            col: "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)"
        },
        {
            pic: "",
            msg: "The Individual Therapy sessions helped me manage my academic stress so much better. I feel more focused and ready to tackle my studies!",
            name: "Ananya Sharma",
            init: "A S",
            position: "B.Tech Student",
            col: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)"
        },
        {
            pic: "",
            msg: "The Training Program was a revelation! It gave me practical tools to handle work pressure and stay calm during tight deadlines.",
            name: "Vikram Singh",
            init: "V S",
            position: "Software Developer",
            col: "linear-gradient(135deg, #141e30 0%, #243b55 100%)"
        },
        {
            pic: "",
            msg: "Group Therapy was a safe space to share my challenges. It’s made me more resilient in handling my business’s ups and downs.",
            name: "Priya Malhotra",
            init: "P M",
            position: "Entrepreneur",
            col: "linear-gradient(135deg, #ff6a88 0%, #ff99ac 100%)"
        },
        {
            pic: "",
            msg: "Couple Therapy saved us during a tough phase. The sessions taught us how to communicate better and reduce stress together.",
            name: "Rahul Verma",
            init: "R V",
            position: "Marketing Manager",
            col: "linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)"
        },
        {
            pic: "",
            msg: "The Workshop on stress management was eye-opening. I now approach my office tasks with a clearer, calmer mindset!",
            name: "Sneha Patel",
            init: "S P",
            position: "HR Executive",
            col: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
        },
        {
            pic: "",
            msg: "Individual Therapy gave me the strength to balance college and personal life. I feel so much more in control now!",
            name: "Arjun Nair",
            init: "A N",
            position: "MBA Student",
            col: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)"
        }
    ]

  return (
    <Box>
        <Typography
        variant='h6'
        sx={{padding: "40px",display: "flex",justifyContent: "center",textAlign: "center",fontFamily: `${theme.palette.custom.fontfamily}`, wordSpacing: "-2px",fontSize: {xs: "32px",md: "50px"},fontWeight: "bold"}}
        >
            What Our Clients Say
        </Typography>
        <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{delay: 5000}}
        // pagination={{ clickable: true }}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        style={{padding: "0 0 35px 0"}}
        >
            {ClientList.map((val,i)=>(
                <SwiperSlide key={i} >
                    <Box
                    sx={{width: "100%",display: "flex",flexDirection: "column",alignItems: "center", justifyContent: "center",gap: {xs: "30px",md: "40px"}}}
                    >
                        <Box
                        sx={{
                            width: { xs: 90, md: 100 },
                            height: { xs: 90, md: 100 },
                            background: val.col, // Gradient
                            display: "flex",
                            mt: "10px",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: { xs: 36, md: 40 },
                            fontWeight: 700,
                            color: "white",
                            wordSpacing: "-8px",
                            borderRadius: "50%",
                            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25), 0 0 20px rgba(101, 78, 163, 0.4)", // Glow + shadow
                            border: "4px solid rgba(255, 255, 255, 0.5)", // Border ring
                        }}
                        >
                        {val.init}
                        </Box>

                        <Typography
                        variant='body1'
                        sx={{width: "80%",fontFamily: `${theme.palette.custom.fontfamily}`, color: "rgba(0,0,0,0.6)",display: "flex", justifyContent: "center", textAlign: "center", fontSize: {xs: "18px",md: "20px"}}}
                        >
                            {val.msg}
                        </Typography>
                        <Box
                        sx={{display: "flex",flexDirection: "column",alignItems: "center"}}
                        >
                            <Typography
                            variant='h6'
                            sx={{display: "flex",justifyContent: "center",textAlign: "center",fontFamily: `${theme.palette.custom.fontfamily}`,fontSize: {xs: "25px",md: "30px"},fontWeight: "bold"}}
                            >
                                {val.name}
                            </Typography>
                            <Typography
                            variant='subtitle1'
                            sx={{color: "rgba(0,0,0,0.6)", display: "flex",justifyContent: "center",textAlign: "center", fontSize: {xs: "18px",md: "20px"},fontFamily: `${theme.palette.custom.fontfamily}`}}
                            >
                                {val.position}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        className="swiper-button-prev"
                        sx={{
                            color: theme.palette.primary.main,
                            '&::after': {
                                fontSize: { xs: '30px', md: '40px' },
                            },
                            left: { xs: '10px', md: '20px' },
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}
                    />
                    <Box
                        className="swiper-button-next"
                        sx={{
                            color: theme.palette.primary.main,
                            '&::after': {
                                fontSize: { xs: '30px', md: '40px' },
                            },
                            right: { xs: '10px', md: '20px' },
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    </Box>
  )
}

export default HomeSec4