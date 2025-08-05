import { Box, Button, IconButton, styled, Tooltip, useTheme } from '@mui/material';
import React, { useState } from 'react';
import logo from "../../assets/logo/logo.png";
import { HiMenuAlt2 } from "react-icons/hi";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TemporaryDrawer from '../../Utils/TemporaryDrawer';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const navData = [
    { path: "/", navName: "Home" },
    { path: "/services", navName: "Services" },
    { path: "/about", navName: "About Us" },
    { path: "/contact", navName: "Contact" },
  ];

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => setOpen(newOpen);

  const rememberedUser = JSON.parse(localStorage.getItem('rememberedUser'));
  const sessionUser = JSON.parse(sessionStorage.getItem('sessionUser'));
  const activeUser = rememberedUser || sessionUser;

  const handleLogout = () => {
    localStorage.removeItem('rememberedUser');
    sessionStorage.removeItem('sessionUser');
    navigate('/');
  };

  const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .MuiTooltip-tooltip`]: {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
      padding: 8,
      borderRadius: 4,
    },
  }));

  const handleClick = () => {
    window.open("https://forms.gle/UuGzqKgcFPYtxJd77", "_blank");
  }

  return (
    <Box
      sx={{
        bgcolor: "white",
        padding: "10px 15px",
        position: "sticky",
        top: "0px",
        zIndex: "3",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)"
      }}
    >
      {/* Left - Logo & Nav */}
      <Box sx={{ display: "flex", gap: { lg: "4%" }, alignItems: "center" }}>
        <Box
          component="img"
          src={logo}
          alt="logo not found"
          sx={{ width: { xs: "30%", lg: "10%" } }}
        />
        <IconButton onClick={() => toggleDrawer(true)} sx={{ display: { lg: "none" } }} size="large">
          <HiMenuAlt2 style={{ fontSize: "1.2em", color: "black" }} />
        </IconButton>
        <TemporaryDrawer open={open} toggleDrawer={toggleDrawer} />
        <Box sx={{ height: { lg: "60%" }, fontSize: "1.7em", display: { xs: "none", lg: "flex" }, gap: "20px" }}>
          {navData.map((val, i) => (
            <NavLink
              key={i}
              to={val.path}
              style={({ isActive }) => ({
                wordSpacing: "-8px",
                fontFamily: theme.palette.custom.fontfamily,
                fontWeight: "bold",
                padding: "0px 10px",
                color: `black`,
                textDecorationLine: "none",
                borderRadius: "20px 0",
                borderTop: isActive && "3px solid rgb(95,170,160)",
                borderRight: isActive && "3px solid rgb(46,108,111)",
                borderBottom: isActive && "3px solid rgb(46,108,111)",
                borderLeft: isActive && "3px solid rgb(95,170,160)",
              })}
              end
            >
              {val.navName}
            </NavLink>
          ))}
        </Box>
      </Box>

      {/* Right - User + Book Button */}
      <Box sx={{ display: { md: "flex" }, gap: "30px", alignItems: "center" }}>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            fontSize: "1.7em",
            fontFamily: `${theme.palette.custom.fontfamily}`,
            fontWeight: "bold",
            wordSpacing: "-9px",
            cursor: activeUser ? "pointer" : "default"
          }}
        >
          {activeUser ? (
            <StyledTooltip
              title={
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleLogout}
                  sx={{
                    backgroundColor: 'red',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#cc0000',
                    },
                  }}
                >
                  Logout
                </Button>
              }
              placement="bottom"
              arrow
            >
              <span>Welcome, {activeUser.email?.slice(0, 5)}...</span>
            </StyledTooltip>
          ) : (
            <NavLink
              to='/log'
              style={{
                textDecorationLine: "none",
                color: "black",
                whiteSpace: "nowrap"
              }}
            >
              Log / SignUp
            </NavLink>
          )}
        </Box>
        <Button
          onClick={()=>handleClick()}
          variant='contained'
          sx={{
            fontSize: { xs: "10px", md: "13px" },
            borderRadius: "20px",
            color: "white",
            bgcolor: "black",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            borderColor: "black",
            whiteSpace: "nowrap"
          }}
        >
          <CalendarMonthIcon sx={{ fontSize: "18px" }} /> Book Appointment
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
