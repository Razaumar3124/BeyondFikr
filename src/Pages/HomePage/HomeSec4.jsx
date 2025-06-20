import { Box, Typography, useTheme } from '@mui/material'
import clientImg from "../../assets/HomePageImgs/clientimg1.webp"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'

const HomeSec4 = () => {

    const theme = useTheme();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

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
    <Box
    sx={{display: "flex",flexDirection: "column",alignItems: "center"}}
    >
        <Typography
        variant='h6'
        sx={{padding: {xs: "40px",md: "30px"},display: "flex",textAlign: "center",fontFamily: `${theme.palette.custom.fontfamily}`,fontSize: {xs: "34px",md: "50px"},fontWeight: "bold"}}
        >
            What Our Clients Say
        </Typography>
        <Box
        sx={{width: "80%",display: "flex",flexDirection: "column",alignItems: "center",gap: {xs: "30px",md: "20px"}}}
        >
            <Box 
            component="img"
            src={clientImg}
            sx={{width: {xs: "130px",md: "110px"},borderRadius: "100%"}}
            />
            <Typography
            variant='body1'
            sx={{fontFamily: `${theme.palette.custom.fontfamily}`,display: "flex",textAlign: "center"}}
            >
                The tools I gained from this training were eye-opening. Now I approach challenges with a clear mind and feel way more resilient!
            </Typography>
            <Box
            sx={{display: "flex",flexDirection: "column",alignItems: "center"}}
            >
                <Typography
                variant='h6'
                sx={{display: "flex",textAlign: "center",fontFamily: `${theme.palette.custom.fontfamily}`,fontSize: "25px",fontWeight: "bold"}}
                >
                    Michael Lee
                </Typography>
                <Typography
                variant='subtitle1'
                sx={{display: "flex",textAlign: "center",fontFamily: `${theme.palette.custom.fontfamily}`}}
                >
                    Project Manager, Innovative Designs
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default HomeSec4