import { Typography, Box, TextField, Button, Checkbox, FormControlLabel, useTheme } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import logo1 from "../assets/logo/logo5.png"
import loginimg from "../assets/login_signup_imgs/loginimg1.jpg"
import { Link, useNavigate } from 'react-router'; // Fixed import
import gsap from 'gsap';
import VisibilityInputField from '../Utils/VisibilityInputField';
import useStore from '../Store/Store';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const logoRef = useRef(null);
  const textFieldsRef = useRef([]);
  const buttonRef = useRef(null);
  const { data, fetchData } = useStore();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const setVh = () => {
      const vh = (window.visualViewport?.height || window.innerHeight) * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);

    // GSAP Animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(containerRef.current, {
        duration: 0.5,
        backgroundColor: "#000000",
    });

    tl.from(logoRef.current, {
        duration: 0.8,
        y: -50,
        opacity: 0,
        scale: 0.8,
        ease: "elastic.out(1, 0.5)"
    }, "-=0.3");

    tl.from(formRef.current, {
        duration: 0.6,
        opacity: 0,
        y: 30,
        ease: "back.out(1)"
    }, "-=0.5");

    textFieldsRef.current.forEach((field, index) => {
        tl.from(field, {
            duration: 0.4,
            x: index % 2 === 0 ? -20 : 20,
            opacity: 0,
            ease: "power2.out"
        }, `-=${0.3}`);
    });

    tl.from(buttonRef.current, {
        duration: 0.6,
        y: 20,
        opacity: 0,
        ease: "bounce.out"
    }, "-=0.4");

    return () => {
        window.removeEventListener('resize', setVh);
        tl.kill();
    };
  }, [theme.palette.custom.theme1]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        await fetchData();
        console.log('Fetched data:', data); // Debug
      } catch (error) {
        console.error('Fetch error:', error);
        toast.error('Failed to load user data', {
          position: 'top-center',
          autoClose: 3000,
        });
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [fetchData]);

  const addToRefs = (el) => {
    if (el && !textFieldsRef.current.includes(el)) {
      textFieldsRef.current.push(el);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log('Identifier:', identifier); // Debug
    console.log('Password:', password); // Debug
    console.log('Data:', data); // Debug

    const trimmedIdentifier = identifier.trim();
    const trimmedPassword = password.trim();

    if (!trimmedIdentifier) {
      toast.error('Please enter email or contact number', {
        position: 'top-center',
        autoClose: 3000,
      });
      return;
    }

    if (!trimmedPassword) {
      toast.error('Please enter password', {
        position: 'top-center',
        autoClose: 3000,
      });
      return;
    }

    if (!data) {
      toast.error('User data not loaded. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
      });
      return;
    }

    const user = data.find((user) => {
      const emailMatch = user.email?.trim() === trimmedIdentifier;
      const contactMatch = user.contact?.trim() === trimmedIdentifier;
      const passwordMatch = user.password?.trim() === trimmedPassword;
      console.log(`User: ${user.email}, Email: ${emailMatch}, Contact: ${contactMatch}, Password: ${passwordMatch}`); // Debug
      return (emailMatch || contactMatch) && passwordMatch;
    });

    if (user) {
      toast.success('Login successful!', {
        position: 'top-center',
        autoClose: 2000,
      });
      navigate('/nav');
    } else {
      toast.error('Invalid email/contact or password', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  };

  return (
    <Box sx={{
      height: "calc(var(--vh, 1vh) * 100)",
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
      }}>
        <Box ref={formRef} component="form" onSubmit={handleLogin} sx={{
            border: "1px solid rgb(48,107,115)",
            width: { xs: "90%", sm: "70%", md: "50%", lg: "70%" },
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            padding: { xs: "30px 10px", sm: "15px", md: "20px", lg: "20px" },
            willChange: "transform, opacity",
            backgroundColor: "rgba(48,107,115,0.1)",
            backdropFilter: "blur(100px)",
            WebkitBackdropFilter: "blur(100px)",
        }}>
          <Box
            ref={logoRef}
            component="img"
            src={logo1}
            alt="Description"
            sx={{ width: {xs: "35%", sm: "35%", lg: "35%"}, height: {xs: "10%"}, cursor: "not-allowed"}}
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
              type="text"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              InputProps={{
                sx: {
                  color: `${theme.palette.custom.theme1}`,
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

            <VisibilityInputField props={{ 
              addToRefs,
              textlabel: "Password",
              onPasswordChange: setPassword
            }}/>

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
              disabled={isLoading}
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
              {isLoading ? 'Loading...' : 'Login'}
            </Button>
          </Box>  
          
          <Typography variant='body1' sx={{color: `${theme.palette.custom.theme1}`, display: "flex", gap: "5px"}}>Don't have an account? <Link style={{color: "green", textDecorationLine: "none"}} to="/signup">Register</Link></Typography>
        </Box>
      </Box>
      <Box sx={{
        width: { lg: "50%" },
        borderRadius: "10px",
        height: "100%",
        display: {xs: "none",lg: "flex"},
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Box
          component="img"
          src={loginimg}
          alt='Login Img'
          sx={{display: {xs: "none",lg: "block"},width: {lg: "99%"},height: {lg: "99%"},borderRadius: "10px"}}
        />
      </Box>
    </Box>
  )
}

export default Login;