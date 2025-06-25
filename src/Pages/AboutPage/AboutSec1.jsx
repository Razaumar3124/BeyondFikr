import { Box, Typography } from '@mui/material'
import trainingImg from "../../assets/servicesImgs/trainingImg.jpg"
import React, { useEffect } from 'react'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const AboutSec1 = () => {
  
  const AnimateRef = useRef(null);
  const ParaRef = useRef(null);

  useEffect(()=>{
    const tl = ParaRef.current;
    const el = AnimateRef.current;

    gsap.fromTo(
      tl,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tl,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      }
    )

    gsap.fromTo(
      el,
      { opacity: 0, x: -40,y: 40 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    )
  },[]);

  return (
    <Box sx={{
      display: "flex",
      flexWrap: "wrap",
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
            <Box sx={{
              width: {xs: "300px",md: "400px"},
              height: {xs: "300px",md: "400px"},
              borderRadius: "10px",
              clipPath: "polygon(0 0, 100% 100%, 0 100%)",
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
        sx={{width: {xs: "100%",md: "50%"},display: "flex",justifyContent: "center",alignItems: "center"}}
        >
          <Box
          ref={ParaRef}
          sx={{width: "80%"}}
          >
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, saepe tempore maxime dolores animi id amet ducimus optio, iure, molestiae facilis sapiente cupiditate nesciunt eum doloremque nulla? Architecto soluta explicabo eaque minima accusantium ut ipsa itaque et recusandae officia! Laudantium earum velit vero ea rerum quisquam, unde vel praesentium, perspiciatis accusamus quae obcaecati sint quod dolorum, laboriosam temporibus esse dolor sed. Hic quibusdam excepturi id sunt sint dignissimos voluptatem consequuntur? Fuga ex atque molestiae quis, illo veritatis alias obcaecati, repellendus quos sit quas eveniet assumenda? Doloribus optio aperiam ipsum quam id consequuntur maiores asperiores, nulla voluptates quis, fuga ratione a at quos harum architecto veritatis aliquid in. Laboriosam beatae, odit nam temporibus eum praesentium doloribus tempora amet rem fuga mollitia omnis facere ab! Non mollitia modi qui impedit distinctio sunt atque odit numquam sapiente, aliquid aut itaque fuga, recusandae vitae totam accusantium alias, consectetur nihil explicabo voluptas ad cupiditate. Eos quas eum repudiandae minus facere. Eum porro quidem iure molestias accusantium impedit omnis, velit voluptas! Neque expedita officia quibusdam corporis. Tenetur, ducimus doloribus blanditiis ab possimus magnam incidunt at minima soluta similique praesentium nihil vel nam. Fugit repellendus quaerat sapiente possimus expedita, ipsam eligendi qui a excepturi. Doloribus, illum animi.
            </Typography>
          </Box>
        </Box>
    </Box>
  )
}

export default AboutSec1