import { Box, Button, IconButton, useTheme } from '@mui/material'
import React, { useState } from 'react'
import logo from "../../assets/logo/logo.png"
import { HiMenuAlt2 } from "react-icons/hi";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from '../../Utils/TemporaryDrawer'
import { NavLink } from 'react-router';
import Loglogic from '../../Utils/loglogic';

const Navbar = () => {

  const theme = useTheme();

  let navData = [
    {
      path: "/",
      navName: "Home"
    },
    {
      path: "/services",
      navName: "Services"
    },
    {
      path: "/aboutus",
      navName: "About Us"
    },
    {
      path: "/contact",
      navName: "Contact"
    },
  ]

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen)=>{
    setOpen(newOpen);
  }

  return (
      <Box 
        sx={{bgcolor: "white",padding: "10px 15px",display: "flex",justifyContent: "space-between",alignItems: "center"}}
      >
        <Box
          sx={{display: "flex",gap: {lg: "4%"},alignItems: "center"}}
        >
          <Box 
            component="img"
            src={logo}
            alt="logo not found"
            sx={{width: {xs: "30%",lg: "10%"}}}
          />
          <IconButton onClick={()=>toggleDrawer(true)} sx={{display: {lg: "none"}}} size="large">
            <HiMenuAlt2 style={{fontSize: "1.2em",color: "black"}}/>
          </IconButton>
          <TemporaryDrawer open={open} toggleDrawer={toggleDrawer} />
          <Box
            sx={{height: {lg: "60%"}, fontSize: "1.7em",display: {xs: "none",lg: "flex"}, gap: "20px"}}
          >
            {navData.map((val,i)=>{
              return(
                <NavLink 
                to={val.path} 
                style={({isActive})=>({
                  wordSpacing: "-8px",
                  fontFamily: `${theme.palette.custom.fontfamily}`,
                  fontWeight: "bold",
                  padding: "0px 10px",
                  color: `black`,
                  textDecorationLine: "none",
                  borderRadius: "20px 0",
                  borderTop: isActive && "3px solid red",
                  borderRight: isActive && "3px solid black",
                  borderBottom: isActive && "3px solid black",
                  borderLeft: isActive && "3px solid red",
                })}
                end
                >
                  {val.navName}
                </NavLink>
              )
            })}
          </Box>
        </Box>
        
        <Box
          sx={{display: {md: "flex"},gap: "30px"}}
        >
          <Box
            sx={{display: {xs: "none",md: "flex"}, alignItems: "center", fontSize: "1.7em",fontFamily: `${theme.palette.custom.fontfamily}`,fontWeight: "bold", wordSpacing: "-9px",cursor: "pointer"}}
          >
            <Loglogic />
          </Box>
          <Button
            variant='contained'
            sx={{fontSize: {xs: "10px",md: "13px"}, borderRadius: "20px",color: "white", bgcolor: "black", display: "flex", alignItems: "center",gap: "5px", borderColor: "black",whiteSpace: "nowrap"}}
          >
            <CalendarMonthIcon sx={{fontSize: "18px"}}/> Book Appointment
          </Button>


        </Box>
      </Box>
  )
}

export default Navbar