import { Box, Button, Checkbox, FormControlLabel, Typography, useTheme } from '@mui/material'
import React from 'react'
import Signupimg from "../assets/login_signup_imgs/bgimg2.jpg";
import logo1 from "../assets/logo/logo.png";
import NormalInputF from '../Utils/NormalInputF';
import { Link } from 'react-router-dom';
import PwdInputF from '../Utils/PwdInputF';

const SignupPage = () => {

    const theme = useTheme();

    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVh();
    window.addEventListener('resize', setVh);

  return (
    <Box sx={{
        height: "calc(var(--vh, 1vh) * 100)",
        display: "flex",
        justifyContent: {xs: "center",lg: "right"},
        alignItems: "center",
        bgcolor: `${theme.palette.custom.theme2}`,
        backgroundImage: { lg: `url(${Signupimg})` },
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
    }}>
        <Box
        component="form"
        sx={{
            mr: {lg: "6%"},
            width: { xs: "90%", sm: "70%", md: "50%", lg: "35%" },
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            backgroundColor: "rgb(255,255,255)",
            padding: { xs: "30px 10px", sm: "15px", md: "20px" },
        }}
        >
            <Box
            component="img"
            src={logo1}
            alt="Description"
            sx={{ width: "30%", cursor: "auto" }}
            />

            <Box 
            sx={{ 
                color: `${theme.palette.custom.theme1}`, 
                padding: "0px 20px", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center" 
            }}>
                <Typography
                variant="h6" 
                sx={{ fontSize: { xs: "21px", sm: "25px" } }}
                >
                  Start your path to wellness.
                </Typography>
                <Typography 
                variant="body1" 
                sx={{ fontSize: { xs: "15px" } }}
                >
                  Join BeyondFikr today.
                </Typography>
            </Box>

            <NormalInputF name="Email" type="email" mt="15px" />

            <NormalInputF name="Contact" type="tel" mt="5px" />
            
            <PwdInputF name="Password" mt="5px" />

            <Box 
            sx={{ width: {xs: "85%",md: "77%"}, }}>
                <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      m: 0,
                      p: 0,
                      color: `${theme.palette.custom.theme1}`,
                      '&.Mui-checked': {
                        color: `${theme.palette.custom.theme1}`,
                      },
                      '& .MuiSvgIcon-root': {
                        borderRadius: '4px',
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    variant="body1"
                    sx={{ color: `${theme.palette.custom.theme1}`, fontSize: {xs: "13px" ,md: "14px"}, ml: "3px", cursor: 'pointer' }}
                  >
                    Remember for 30 days
                  </Typography>
                }
              />
            </Box>
            
            <Button
              variant="outlined"
              type="submit"
              sx={{
                width: {xs: "90%",md: "80%"},
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
                Register
            </Button>

            <Typography 
            variant='body1' 
            sx={{ color: `${theme.palette.custom.theme1}`, display: "flex", gap: "5px" }}>
                Already have an account? 
                <Link style={{ color: "green", textDecorationLine: "none" }} 
                to="/log"
                >
                    Login
                </Link>
          </Typography>

        </Box>
    </Box>
  )
}

export default SignupPage