import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material'
import React from 'react'
import logo from "../assets/logo/logo.png"
import { NavLink } from 'react-router-dom';
import Loglogic from './loglogic';

const TemporaryDrawer = ({open, toggleDrawer}) => {

  const theme = useTheme();

  const HSAC = [
    {
        navName: "Home",
        navigateTo: "/",
    },
    {
        navName: "Services",
        navigateTo: "/services",
    },
    {
        navName: "About Us",
        navigateTo: "/aboutus",
    },
    {
        navName: "Contact",
        navigateTo: "/contact",
    },
  ]

  const DrawerList = (
    <Box sx={{width: 300, height: "100%", bgcolor: "rgb(232, 232, 232)", padding: "8px 0",display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}} role="presentation" onClick={()=>toggleDrawer(false)}>
        <List sx={{display: "flex",flexDirection: "column", alignItems: "center"}}>
            <Box
                component="img"
                src={logo}
                sx={{width: "140px",marginTop: "10px"}}
            Box />
            <Typography 
                variant='h5'
                sx={{marginTop: "10px",fontFamily: `${theme.palette.custom.fontfamily}`,fontWeight: "bold"}}
            >
                BeyondFikr
            </Typography>
            <Typography 
            variant='body1'
            sx={{fontFamily: `${theme.palette.custom.fontfamily}`,fontWeight: 'bold'}}
            >
                Where Mental Peace Matters
            </Typography>
            <List sx={{marginTop: "20px",display: "flex",flexDirection: "column",alignItems: "center",gap: "20px"}}>
            {HSAC.map((val, i) => (
                <Typography 
                    variant='body1'
                    sx={{fontfamily: `${theme.palette.custom.fontfamily}`,fontWeight: "bold",fontSize: "20px"}}
                >
                    <NavLink 
                    to={val.navigateTo} 
                    style={({isActive})=>({
                        padding: "8px",
                        textDecorationLine: "none",
                        color: "black",
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
                </Typography>
            ))}
            </List>
        </List>
        <List sx={{display: "flex",flexDirection: "column",alignItems: "center",gap: "15px"}}>
            <Typography 
                variant='body1'
                sx={{fontfamily: `${theme.palette.custom.fontfamily}`,fontWeight: "bold",fontSize: "20px"}}
            >
                <Loglogic />
            </Typography>
            <Typography 
                variant='body1'
                sx={{fontfamily: `${theme.palette.custom.fontfamily}`,fontWeight: "bold",fontSize: "20px"}}
            >
                Log Out
            </Typography>
        </List>
    </Box>
  );

  return (
    <Drawer open={open} onClose={()=>toggleDrawer(false)}>
        {DrawerList}
    </Drawer>
  )
}

export default TemporaryDrawer