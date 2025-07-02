import { Box, Button, Typography, useTheme } from '@mui/material'
import logo from "../../assets/logo/logo.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {

  const theme = useTheme();

  const exploreList = [
    {
      name: "About Us",
      path: "/aboutus"
    },
    {
      name: "Terms & Conditions",
      path: ""
    },
    {
      name: "Policy Privacy",
      path: "/policy"
    },
    {
      name: "Feedback",
      path: ""
    },
  ]

  const followBtn = [
    {
      icon: <InstagramIcon sx={{color: "white",fontSize: "40px"}} />,
      bcolor: "rgb(225, 48, 108)",
      path: ""
    },
    {
      icon: <FacebookOutlinedIcon sx={{color: "white",fontSize: "40px"}} />,
      bcolor: "blue",
      path: ""
    },
    {
      icon: <WhatsAppIcon sx={{color: "white",fontSize: "40px"}} />,
      bcolor: "green",
      path: ""
    },
    {
      icon: <XIcon sx={{color: "white",fontSize: "30px"}} />,
      bcolor: "black",
      path: ""
    },
  ]

  return (
    <Box sx={{bgcolor: "white",marginTop: {xs: "30px",md: "0px"}}}>
      <Box
      sx={{padding: {xs: "20px",md: "40px"},display: "flex",flexWrap: "wrap",justifyContent: {xs: "center",md: "space-evenly"},gap: {xs: "30px",md: "150px"}}}
      >
        <Box
        sx={{display: "flex",flexDirection: "column",alignItems:"center", minWidth: "300px",border: ""}}
        >
          <Box
          component="img"
          src={logo}
          sx={{width: '50%'}}
          />
          <Typography
          variant="h5"
          sx={{marginTop: "20px",fontSize: "30px" ,fontFamily: `${theme.palette.custom.fontfamily}`,fontWeight: "bold"}}
          >
            Talk. Heal. Grow.
          </Typography>
          <Typography
          variant="h5"
          sx={{fontFamily: `${theme.palette.custom.fontfamily}`,fontWeight: "bold"}}
          >
            Go BeyondFikr.
          </Typography>
        </Box>
        <Box
        sx={{minWidth: {xs: "150px",sm: "250px"},display: "flex",flexDirection: "column",alignItems: "center",gap: "20px"}}
        >
          <Typography
          variant='h5'
          sx={{fontFamily: `${theme.palette.custom.fontfamily}`,fontWeight: "bold" ,fontSize: "30px"}}
          >
            Explore
          </Typography>
          <Box
          sx={{display: "flex",flexDirection: "column",alignItems: "center",gap: "8px"}}
          >
            {exploreList.map((val,i)=>{
              return(
                <Typography
                key={i}
                variant='body2'
                >
                  <NavLink
                  to={val.path}
                  style={({isActive})=>({
                    color: "black",
                    textDecorationLine: "none",
                    borderBottom: isActive && "3px solid black",
                  })}
                  >
                    {val.name}
                  </NavLink>
                </Typography>
              )
            })}
          </Box>
        </Box>
        <Box
        sx={{minWidth: {xs: "150px",md: "270px"},display: "flex",flexDirection: "column",alignItems: "center",gap: "20px"}}
        >
          <Typography
          variant='h5'
          sx={{fontFamily: `${theme.palette.custom.fontfamily}`, fontWeight: "bold",fontSize: "30px"}}
          >
            Follow Us
          </Typography>
          <Box
          sx={{display: "flex",flexWrap: "wrap", justifyContent: "center",gap: "15px", width: {xs: "150px",md: "270px"},minWidth: {xs: "150px",md: "250px"}}}
          >
            {followBtn.map((val,i)=>{
              return(
                <Button
                key={i}
                variant='contained'
                sx={{bgcolor: `${val.bcolor}`, width: "54px", minWidth: "54px",borderRadius: "250px"}}
                >
                  {val.icon}
                </Button>
              )
            })}
          </Box>
        </Box>
      </Box>
      <Box sx={{display: 'flex',justifyContent: "center",alignItems: "center"}}>
        <Typography
        variant='subtitle2'
        >
          © 2025 BeyondFikr. All rights reserved.
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer