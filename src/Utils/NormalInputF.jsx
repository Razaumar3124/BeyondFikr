import { TextField, useTheme } from '@mui/material'
import React from 'react'

const NormalInputF = ({ name, type, mt }) => {

    const theme = useTheme();

  return (
    <TextField
    label={name}
    variant="outlined"
    type={type}
    required
    sx={{ width: {xs: "90%",md: "80%"}, mt: mt }}
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
        },
    },
    pattern: "[0-9]{10}",
    title: "Phone number must be 10 digits",
    inputMode: "numeric",
    maxLength: 10,
    }}
    InputLabelProps={{
    sx: {
        color: `${theme.palette.custom.theme1}`,
        '&.Mui-focused': {
        color: `${theme.palette.custom.theme1}`,
        },
        '&:hover': {
        color: `${theme.palette.custom.theme1}`,
        },
    },
    }}
/>
  )
}

export default NormalInputF