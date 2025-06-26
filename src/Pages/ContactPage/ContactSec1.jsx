import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const ContactSec1 = () => {
    const theme = useTheme();
    const formData = useRef();

    const contactList = [
        {
            path: "tel:+919767067285",
            icon: <CallIcon />,
            msg: "+91 9767067285"
        },
        {
            path: "mailto:info@beyondfikr.com",
            icon: <MailIcon />,
            msg: "info@beyondfikr.com"
        },
    ];

    const sendEmail = (e) => {
        e.preventDefault();

        const full_name = formData.current.full_name.value;
        const age = formData.current.age.value;
        const phone_no = formData.current.phone_no.value;
        const email = formData.current.email.value;
        const msg = formData.current.msg.value;
        const time_date = new Date().toLocaleString();

        const finalMessage = `
            Name: ${full_name}
            Age: ${age}
            Phone: ${phone_no}
            Email: ${email}
            Date/Time: ${time_date}

            Message:
            ${msg}
        `;

        formData.current.message.value = finalMessage;

        emailjs.sendForm(
            "service_mrend73",
            "template_fybydry",
            formData.current,
            "-5QdY6eATwnYzbVf5"
        ).then(
            () => {
                toast.success("Message Sent Successfully!", {
                    position: "top-center"
                });
            },
            (error) => {
                toast.error("Failed to send message, please try again.", {
                    position: "top-center"
                });
            }
        );
    };

    return (
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box
                sx={{
                    width: { xs: "100%", md: "50%" },
                    padding: "50px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: { xs: "normal", md: "center" },
                    gap: "20px"
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontFamily: theme.palette.custom?.fontfamily,
                        fontWeight: "bold",
                        fontSize: "40px"
                    }}
                >
                    Get In Touch
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center"
                    }}
                >
                    If you have any questions or need assistance, don’t hesitate to reach out. We're here to help 24x7!
                </Typography>
                {contactList.map((val, i) => (
                    <NavLink
                        key={i}
                        to={val.path}
                        style={{ textDecorationLine: "none", color: "black" }}
                    >
                        <Typography
                            variant="body1"
                            sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                        >
                            {val.icon} {val.msg}
                        </Typography>
                    </NavLink>
                ))}
            </Box>
            <Box
                component="form"
                ref={formData}
                onSubmit={sendEmail}
                sx={{
                    width: { xs: "100%", md: "50%" },
                    padding: { xs: "30px", md: "50px" },
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px"
                }}
            >
                <TextField
                    variant="outlined"
                    label="Full Name"
                    name="full_name"
                    required
                    sx={{ width: { xs: "100%", md: "60%" } }}
                />

                <TextField
                    variant="outlined"
                    label="Age"
                    name="age"
                    required
                    sx={{ width: { xs: "20%", md: "30%" } }}
                />

                <TextField
                    variant="outlined"
                    label="Phone no."
                    name="phone_no"
                    required
                    sx={{ width: { xs: "73.5%", sm: "76%", md: "30%" } }}
                />

                <TextField
                    variant="outlined"
                    label="Email"
                    name="email"
                    required
                    sx={{ width: { xs: "100%", md: "60%" } }}
                />

                <TextField
                    multiline
                    rows={4}
                    variant="outlined"
                    label="Your Message"
                    name="msg"
                    required
                    sx={{ width: { xs: "100%", md: "93%" } }}
                />

                {/* Hidden final message textarea */}
                <textarea name="message" style={{ display: "none" }} readOnly />

                <Button
                    variant="contained"
                    type="submit"
                    sx={{ color: "white", bgcolor: "black" }}
                >
                    Send Message
                </Button>
            </Box>
        </Box>
    );
};

export default ContactSec1;
