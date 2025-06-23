import { Box, Button, TextField, Typography, useTheme } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react'

const ContactSec1 = () => {

    const theme = useTheme();

    const contactList = [
        {
            icon: <CallIcon />,
            msg: "+91 0987654321"
        },
        {
            icon: <MailIcon />,
            msg: "beyond@beyondfikr.com"
        },
    ]

  return (
    <Box
    sx={{display: "flex",flexWrap: "wrap"}}
    >
        <Box 
        sx={{width: {xs: "100%",md: "50%"},padding: "50px",display: "flex",flexDirection: "column",alignItems: "center",justifyContent: {xs: "normal",md: "center"},gap: "20px"}}
        >
            <Typography
            variant='h6'
            sx={{fontFamily: theme.palette.custom.fontfamily,fontWeight: "bold",fontSize: "40px"}}
            >
                Get In Touch
            </Typography>
            <Typography
            variant='body1'
            sx={{display: "flex",justifyContent: "center",alignItems: "center",textAlign: "center"}}
            >
                If you have any questions or need assistance, don’t hesitate to reach out. Were here to help!
            </Typography>
            {contactList.map((val,i)=>(
                <Typography
                variant='body1'
                sx={{display: "flex",alignItems: "center",gap: "10px"}}
                >
                    {val.icon} {val.msg}
                </Typography>
            ))}
        </Box>
        <Box 
        component="form"
        sx={{width: {xs: "100%",md: "50%"},padding: {xs: "30px",md: "50px"},display: "flex",flexWrap: "wrap",gap: "20px"}}
        >
            <TextField 
            variant='outlined'
            label="Full Name"
            sx={{width: {xs: "100%",md: "60%"}}}
            />

            <TextField 
            variant='outlined'
            label="Age"
            sx={{width: {xs: "20%",md: "30%"}}}
            />

            <TextField 
            variant='outlined'
            label="Phone no."
            sx={{width: {xs: "73.5%",sm: "76%",md: "30%"}}}
            />

            <TextField 
            variant='outlined'
            label="Email"
            sx={{width: {xs: "100%",md: "60%"}}}
            />

            <TextField 
            multiline
            rows={8}
            variant='outlined'
            label="Message"
            sx={{width: {xs: "100%",md: "93%"}}}
            />

            <Button
            variant='contained'
            sx={{color: "white",bgcolor: "black"}}
            >
                Send Message
            </Button>

        </Box>
    </Box>
    )
}

export default ContactSec1