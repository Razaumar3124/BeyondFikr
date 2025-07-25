import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import loginimg from "../assets/login_signup_imgs/bgimg1.jpg";
import logo1 from "../assets/logo/logo.png";
import NormalInputF from "../Utils/NormalInputF";
import { Link, NavLink, useNavigate } from "react-router-dom";
import PwdInputF from "../Utils/PwdInputF";
import useStore from "../Store/Store";
import bcrypt from "bcryptjs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const {
    logEmail,
    logPassword,
    logEmailError,
    logPasswordError,
    setLogEmail,
    setLogPassword,
    validate,
    rememberMe,
    setRememberMe,
  } = useStore();

  let users = useStore((state) => state.data.users);

  // Set viewport height for mobile fix
  const setVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  setVh();
  window.addEventListener("resize", setVh);

  // Autofill email if remembered
  useEffect(() => {
    const remembered =
      JSON.parse(localStorage.getItem("rememberedUser")) ||
      JSON.parse(sessionStorage.getItem("sessionUser"));

    if (remembered) {
      const thirtyDays = 30 * 24 * 60 * 60 * 1000;
      if (Date.now() - remembered.timestamp < thirtyDays) {
        setLogEmail(remembered.email);
        setRememberMe(true);
      } else {
        localStorage.removeItem("rememberedUser");
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validate()) {
      const matchUser = users.find((user) => user.email === logEmail);
  
      if (matchUser) {
        const isMatch = await bcrypt.compare(logPassword, matchUser.password);
  
        if (isMatch) {
          const userData = {
            email: logEmail,
            timestamp: Date.now()
          };
  
          if (rememberMe) {
            localStorage.setItem("rememberedUser", JSON.stringify(userData));
            sessionStorage.removeItem("sessionUser");
          } else {
            sessionStorage.setItem("sessionUser", JSON.stringify(userData));
            localStorage.removeItem("rememberedUser");
          }
  
          toast.success("Login successful!");
          navigate("/");
        } else {
          toast.error("Invalid password!");
        }
      } else {
        toast.error("User not found!");
      }
    }
  };

  const handleEmailChange = (e) => {
    setLogEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setLogPassword(e.target.value);
  };

  // Login Animation
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const btnRef = useRef(null);
  const sideAnim = useStore((state) => state.sideAnimation);

  useEffect(() => {
    sideAnim(leftRef, "-100", "0");
    sideAnim(rightRef, "100", "0");
    sideAnim(btnRef, "0", "30");
  }, []);

  return (
    <Box
      sx={{
        height: "calc(var(--vh, 1vh) * 100)",
        display: "flex",
        justifyContent: { xs: "center", lg: "left" },
        alignItems: "center",
        bgcolor: `${theme.palette.custom.theme2}`,
        backgroundImage: { lg: `url(${loginimg})` },
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          ml: { lg: "6%" },
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
          alt="Logo"
          sx={{ width: "30%", cursor: "auto" }}
        />

        <Box
          sx={{
            color: `${theme.palette.custom.theme1}`,
            padding: "0px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "21px", sm: "25px" } }}
          >
            BeyondFikr welcomes you!
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: "15px" } }}>
            Please log in to continue.
          </Typography>
        </Box>

        <NormalInputF
          ref={leftRef}
          name="Email"
          mt="15px"
          type="email"
          method={handleEmailChange}
          error={logEmailError}
          helpertxt={logEmailError}
        />

        <PwdInputF
          ref={rightRef}
          name="Password"
          mt="5px"
          method={handlePasswordChange}
          error={!!logPasswordError}
          helpertxt={logPasswordError}
        />

        <Box
          sx={{
            width: { xs: "85%", md: "76%" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                sx={{
                  m: 0,
                  p: 0,
                  color: `${theme.palette.custom.theme1}`,
                  "&.Mui-checked": {
                    color: `${theme.palette.custom.theme1}`,
                  },
                  "& .MuiSvgIcon-root": {
                    borderRadius: "4px",
                  },
                }}
              />
            }
            label={
              <Typography
                variant="body1"
                sx={{
                  color: `${theme.palette.custom.theme1}`,
                  ml: "3px",
                  fontSize: { xs: "13px", md: "14px" },
                  cursor: "pointer",
                }}
              >
                Remember for 30 days
              </Typography>
            }
          />
          <NavLink 
          to="/forgot" 
          style={{ 
          textDecorationLine: "none",
          color: "salmon", 
          fontSize: "13px", 
          cursor: "pointer" 
          }}>
            Forgot password?
          </NavLink>
        </Box>

        <Button
          variant="outlined"
          type="submit"
          ref={btnRef}
          sx={{
            width: { xs: "90%", md: "80%" },
            color: `${theme.palette.custom.theme1}`,
            borderColor: `${theme.palette.custom.theme1}`,
            "&:hover": {
              borderColor: `${theme.palette.custom.theme1}`,
              backgroundColor: "rgba(0,255,255,0.1)",
            },
            padding: "12px 0px",
            fontSize: "17px",
          }}
        >
          Login
        </Button>

        <Typography
          variant="body1"
          sx={{
            color: `${theme.palette.custom.theme1}`,
            display: "flex",
            gap: "5px",
          }}
        >
          Don't have an account?
          <Link
            style={{ color: "green", textDecorationLine: "none" }}
            to="/sign"
          >
            Register
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
