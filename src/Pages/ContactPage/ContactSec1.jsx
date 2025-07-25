import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm, Controller } from 'react-hook-form';

const ContactSec1 = () => {
    const theme = useTheme();
    const formRef = useRef();

    const {
        control,
        handleSubmit,
        reset,
        formState: { isSubmitSuccessful }
    } = useForm({
        defaultValues: {
            full_name: '',
            age: '',
            phone_no: '',
            email: '',
            msg: '',
            message: ''
        }
    });

    React.useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

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

    const onSubmit = async (data) => {
        const time_date = new Date().toLocaleString();
        const finalMessage = `
            Name: ${data.full_name}
            Age: ${data.age}
            Phone: ${data.phone_no}
            Email: ${data.email}
            Date/Time: ${time_date}

            Message:
            ${data.msg}
                    `;

        try {
            // Create a temporary form element to hold our values
            const formData = new FormData();
            formData.append('full_name', data.full_name);
            formData.append('age', data.age);
            formData.append('phone_no', data.phone_no);
            formData.append('email', data.email);
            formData.append('msg', data.msg);
            formData.append('message', finalMessage);

            await emailjs.send(
                "service_mrend73",
                "template_fybydry",
                Object.fromEntries(formData),
                "-5QdY6eATwnYzbVf5"
            );
            
            toast.success("Message Sent Successfully!", {
                position: "top-center",
                autoClose: 3000
            });
        } catch (error) {
            toast.error("Failed to send message, please try again.", {
                position: "top-center",
                autoClose: 3000
            });
        }
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
                        fontSize: {xs: "33px",md: "40px"}
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
                    If you have any questions or need assistance, don't hesitate to reach out. We're here to help 24x7!
                </Typography>
                {contactList.map((val, i) => (
                    <NavLink
                        key={i}
                        to={val.path}
                        style={{ textDecorationLine: "none", color: "blue" }}
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
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    width: { xs: "100%", md: "50%" },
                    padding: { xs: "30px", md: "50px" },
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px"
                }}
            >
                <Controller
                    name="full_name"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            variant="outlined"
                            label="Full Name"
                            required
                            sx={{ width: { xs: "100%", md: "60%" } }}
                        />
                    )}
                />

                <Controller
                    name="age"
                    control={control}
                    rules={{
                        required: "Age is required",
                        max: {
                            value: 100,
                            message: "Age cannot be more than 100"
                        }
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            variant="outlined"
                            label="Age"
                            type="number"
                            required
                            error={!!error}
                            helperText={error ? error.message : ""}
                            sx={{ width: { xs: "20%", md: "30%" } }}
                        />
                    )}
                />

                <Controller
                    name="phone_no"
                    control={control}
                    rules={{
                        required: "Phone number is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Phone number must be 10 digits"
                        }
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            variant="outlined"
                            label="Phone no."
                            required
                            error={!!error}
                            helperText={error ? error.message : ""}
                            sx={{ width: { xs: "73.5%", sm: "76%", md: "30%" } }}
                        />
                    )}
                />

                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address"
                        }
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            variant="outlined"
                            label="Email"
                            required
                            error={!!error}
                            helperText={error ? error.message : ""}
                            sx={{ width: { xs: "100%", md: "60%" } }}
                        />
                    )}
                />

                <Controller
                    name="msg"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            multiline
                            rows={4}
                            variant="outlined"
                            label="Your Message"
                            required
                            sx={{ width: { xs: "100%", md: "93%" } }}
                        />
                    )}
                />

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