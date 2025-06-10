import { Typography, Box, TextField, Button, Checkbox, FormControlLabel, useTheme, InputLabel, OutlinedInput, IconButton, InputAdornment } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import logo1 from "../assets/logo/logo2.png"
import { Link } from 'react-router';
import gsap from 'gsap';
import VisibilityInputField from '../Utils/VisibilityInputField';

const Login = () => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const logoRef = useRef(null);
  const textFieldsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const setVh = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);

    // GSAP Animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Background animation
    tl.from(containerRef.current, {
        duration: 0.5,
        backgroundColor: "#000000",
    });

    // Logo animation
    tl.from(logoRef.current, {
        duration: 0.8,
        y: -50,
        opacity: 0,
        scale: 0.8,
        ease: "elastic.out(1, 0.5)"
    }, "-=0.3");

    // Form container animation
    tl.from(formRef.current, {
        duration: 0.6,
        opacity: 0,
        y: 30,
        ease: "back.out(1)"
    }, "-=0.5");

    // Text fields animation
    textFieldsRef.current.forEach((field, index) => {
        tl.from(field, {
            duration: 0.4,
            x: index % 2 === 0 ? -20 : 20,
            opacity: 0,
            ease: "power2.out"
        }, `-=${0.3}`);
    });

    // Button animation
    tl.from(buttonRef.current, {
        duration: 0.6,
        y: 20,
        opacity: 0,
        ease: "bounce.out"
    }, "-=0.4");

    // Continuous subtle animation for the form border
    gsap.to(formRef.current, {
        duration: 5,
        boxShadow: `0 0 15px ${theme.palette.custom.theme1}`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    return () => {
        window.removeEventListener('resize', setVh);
        tl.kill();
    };
}, [theme.palette.custom.theme1]);

// Add ref to text fields
    const addToRefs = (el) => {
        if (el && !textFieldsRef.current.includes(el)) {
            textFieldsRef.current.push(el);
        }
    };

  return (
    <Box sx={{
      bgcolor: "black",
      height: "calc(var(--vh, 1vh) * 100)", // Fixes 100vh issue
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Box sx={{
        width: { xs: "100%", lg: "50%" },
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}>
        <Box ref={formRef} component="form" sx={{
            width: { xs: "90%", sm: "70%", md: "50%", lg: "70%" },
            boxShadow: `0 0 15px 10px ${theme.palette.custom.theme1}`,
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            padding: { xs: "30px 10px", sm: "15px", md: "20px", lg: "20px" },
            willChange: "transform, opacity",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(100px)", // This adds blur behind the box, including border
            WebkitBackdropFilter: "blur(100px)",
        }}>
          <Box
            ref={logoRef}
            component="img"
            src={logo1}
            alt="Description"
            sx={{ width: {xs: "70%", sm: "60%", lg: "50%"}, height: {xs: "10%"}, cursor: "not-allowed" }}
          />

          <Box sx={{color: `${theme.palette.custom.theme1}`, padding: "0px 20px", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant="h6" sx={{fontSize: {xs: "21px",sm: "25px"}}}>BeyondFikr welcomes you!</Typography>
            <Typography variant="body1" sx={{fontSize: {xs: "15px"}}}>Please log in to continue.</Typography>
          </Box>

          <Box sx={{marginTop: "25px",display: "flex", flexDirection: "column", gap: "15px", width: "95%"}}>
            <TextField
              ref={addToRefs}
              label="Email or Contact"
              variant="outlined"
              fullWidth
              type="Email or Contact"
              required
              InputProps={{
                sx: {
                  color: "white",
                  '& input::placeholder': {
                    color: `${theme.palette.custom.theme1}`,
                    opacity: 1,
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: `${theme.palette.custom.theme1}`,
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: `${theme.palette.custom.theme1}`,
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: `${theme.palette.custom.theme1}`,
                  }
                }
              }}
              InputLabelProps={{
                sx: {
                  color: `${theme.palette.custom.theme1}`,
                  '&.Mui-focused': {
                    color: `${theme.palette.custom.theme1}`,
                  },
                  '&:hover': {
                    color: `${theme.palette.custom.theme1}`,
                  }
                }
              }}
            />  

          <VisibilityInputField props={{ addToRefs ,textlabel: "Password *"}}/>

            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <FormControlLabel
                control={
                  <Checkbox
                    id="remember"
                    sx={{
                      color: `${theme.palette.custom.theme1}`,
                      '&.Mui-checked': {
                        color: `${theme.palette.custom.theme1}`,
                      },
                      '& .MuiSvgIcon-root': {
                        border: `1px solid ${theme.palette.custom.theme1}`,
                        borderRadius: '4px',
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    variant="body1"
                    sx={{ color: `${theme.palette.custom.theme1}`, fontSize: "14px", cursor: 'pointer'}}
                  >
                    Remember for 30 days
                  </Typography>
                }
              />
              <Typography variant='body1' sx={{color: "salmon", fontSize: "14px",cursor: "pointer"}}>Forgot password?</Typography>
            </Box>

            <Button
              ref={buttonRef}
              variant="outlined"
              fullWidth
              type="submit"
              sx={{
                color: `${theme.palette.custom.theme1}`,
                borderColor: `${theme.palette.custom.theme1}`,
                '&:hover': {
                  borderColor: `${theme.palette.custom.theme1}`,
                  backgroundColor: 'rgba(0,255,255,0.1)',
                },
                padding: "12px 0px",
                fontSize: "17px"
              }}
            >
              Login
            </Button>
          </Box>  
          
          <Typography variant='body1' sx={{color: `${theme.palette.custom.theme1}`, display: "flex", gap: "5px"}}>Don't have an account? <Link style={{color: "green", textDecorationLine: "none"}} to="/signup">Register</Link></Typography>

        </Box>
      </Box>
      <Box sx={{
        width: { lg: "50%" },
        border: "1px solid red",
        borderRadius: "10px",
        height: "100%"
      }}>
        {/* Add any form or content here */}
      </Box>
    </Box>
  )
}

export default Login;