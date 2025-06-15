import { Box, Button, IconButton, useTheme } from '@mui/material'
import React from 'react'
import logo from "../../assets/logo/logo.png"
import { HiMenuAlt2 } from "react-icons/hi";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from '../../Utils/TemporaryDrawer'
import { NavLink } from 'react-router';

const Navbar = () => {

  const theme = useTheme();

  let navData = [
    {
      path: "/home",
      navName: "Home"
    },
    {
      path: "",
      navName: "Services"
    },
    {
      path: "",
      navName: "About Us"
    },
    {
      path: "/about",
      navName: "Contact"
    },
  ]

  return (
      <Box 
        sx={{padding: "10px 15px",display: "flex",justifyContent: "space-between",alignItems: "center"}}
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
          <IconButton sx={{display: {lg: "none"}}} size="large">
            <HiMenuAlt2 style={{fontSize: "1.2em",color: "black"}}/>
          </IconButton>
          <Box
            sx={{height: {lg: "60%"}, fontSize: "1.7em",display: {xs: "none",lg: "flex"}, gap: "50px"}}
          >
            {navData.map((val,i)=>{
              return(
                <NavLink style={{wordSpacing: "-8px",fontFamily: "monospace" , fontWeight: "bold  ",color: `black`,textDecorationLine: "none"}}>{val.navName}</NavLink>
              )
            })}
          </Box>
        </Box>
        
        <Box
          sx={{display: {md: "flex"},gap: "30px"}}
        >
          <Box
            sx={{display: {xs: "none",md: "flex"}, alignItems: "center", fontSize: "1.7em",fontFamily: "monospace",fontWeight: "bold", wordSpacing: "-9px",cursor: "pointer"}}
          >
            <NavLink 
              to='/login'
              style={{textDecorationLine: "none",color: "black"}}
            >
              Log / SignIn
            </NavLink>
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