import { Box, Button, Checkbox, FormControlLabel, Typography, useTheme } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import Signupimg from "../assets/login_signup_imgs/bgimg2.jpg";
import logo1 from "../assets/logo/logo.png";
import NormalInputF from '../Utils/NormalInputF';
import { Link, useNavigate } from 'react-router-dom';
import PwdInputF from '../Utils/PwdInputF';
import useStore from '../Store/Store';

const SignupPage = () => {

    const theme = useTheme();

    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVh();
    window.addEventListener('resize', setVh);

    let leftRef = useRef(null);
    let aleftRef = useRef(null);
    let rightRef = useRef(null);
    let btnRef = useRef(null);
    let leftAnimation = useStore((state) => state.sideAnimation);
    let rightAnimation = useStore((state)=>state.sideAnimation);
    let btnAnimation = useStore((state)=>state.sideAnimation);
    

    useEffect(() => {
      leftAnimation(leftRef, "-100px", "0px"); 
      rightAnimation(rightRef, "100px", "0px");
      btnAnimation(btnRef, "0px", "30px");
      leftAnimation(aleftRef, "-100px", "0px"); 
    }, []);

    const {
      email,
      mobile,
      password,
      agree,
      errors,
      setEmail,
      setMobile,
      setPassword,
      setAgree,
      submit,
      fetchData
    } = useStore();

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
      e.preventDefault();
      const success = await submit();
      if (success) {
        await fetchData();      // ✅ Refresh latest data
        navigate("/log");     // ✅ Navigate after update
      }
    }

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
        onSubmit={handleSubmit}
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

            <NormalInputF ref={aleftRef} name="Email" type="email" mt="15px" method={(e) => setEmail(e.target.value)} error={!!errors.email} helpertxt={errors.email} />

            <NormalInputF ref={rightRef} name="Contact" type="tel" mt="5px" method={(e) => setMobile(e.target.value)} error={!!errors.mobile} helpertxt={errors.mobile} />
            
            <PwdInputF ref={leftRef} name="Password" mt="5px" method={(e) => setPassword(e.target.value)} error={!!errors.password} helpertxt={errors.password} />

            <Box 
            sx={{ width: {xs: "85%",md: "77%"} }}>
                <FormControlLabel
                sx={{display: "flex",alignItems: "start"}}
                control={
                  <Checkbox
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
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
                    By signing up you accept the <Typography component="span" sx={{color: "green"}}>Term of service</Typography> and <Typography component="span" sx={{color: "green"}}>Privacy policy</Typography>
                  </Typography>
                }
              />
            </Box>
            {errors.agree && (
              <Typography color="error" variant="caption">
                {errors.agree}
              </Typography>
            )}
            
            <Button
              variant="outlined"
              type="submit"
              ref={btnRef}
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