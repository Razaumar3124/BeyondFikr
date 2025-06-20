import { Box, Typography, useTheme } from '@mui/material'
import clientImg from "../../assets/HomePageImgs/clientimg1.webp"
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
            msg: "The tools I gained from this training were eye-opening. Now I approach challenges with a clear mind and feel way more resilient!",
            name: "Michael Lee",
            position: "Project Manager, Innovative Designs"
        },
        {
            pic: "",
            msg: "I loved the focus on emotional strength. It’s given me control over my reactions, which is invaluable in my job!",
            name: "Emily Carter",
            position: "Project Manager, Innovative Designs"
        },
        {
            pic: "",
            msg: "I loved the focus on emotional strength. It’s given me control over my reactions, which is invaluable in my job!",
            name: "Emily Carter",
            position: "Marketing Specialist, Creative Agency"
        },
    ]

  return (
    <Box>
        <Typography
        variant='h6'
        sx={{padding: "40px",display: "flex",justifyContent: "center",textAlign: "center",fontFamily: `${theme.palette.custom.fontfamily}`,fontSize: {xs: "34px",md: "50px"},fontWeight: "bold"}}
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
                    sx={{width: "100%",display: "flex",flexDirection: "column",alignItems: "center",gap: {xs: "30px",md: "20px"}}}
                    >
                        <Box 
                        component="img"
                        src={clientImg}
                        sx={{width: {xs: "130px",md: "110px"},borderRadius: "100%"}}
                        />
                        <Typography
                        variant='body1'
                        sx={{width: {xs: "80%",md: "auto"},fontFamily: `${theme.palette.custom.fontfamily}`,display: "flex",textAlign: "center"}}
                        >
                            {val.msg}
                        </Typography>
                        <Box
                        sx={{display: "flex",flexDirection: "column",alignItems: "center"}}
                        >
                            <Typography
                            variant='h6'
                            sx={{width: {xs: "80%",md: "auto"},display: "flex",justifyContent: "center",textAlign: "center",fontFamily: `${theme.palette.custom.fontfamily}`,fontSize: "25px",fontWeight: "bold"}}
                            >
                                {val.name}
                            </Typography>
                            <Typography
                            variant='subtitle1'
                            sx={{width: {xs: "80%",md: "auto"},display: "flex",justifyContent: "center",textAlign: "center",fontFamily: `${theme.palette.custom.fontfamily}`}}
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