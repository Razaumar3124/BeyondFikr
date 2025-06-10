import React, { useEffect, useRef } from 'react';
import { TextField, InputAdornment, IconButton, useTheme } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import gsap from 'gsap';

const VisibilityInputField = ({ props }) => {

  const { addToRefs, textlabel } = props;

  const theme = useTheme()

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  
  return (
    <TextField
      id="outlined-adornment-password"
      type={showPassword ? 'text' : 'password'}
      label={textlabel}
      ref={addToRefs}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label={showPassword ? 'hide the password' : 'display the password'}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge="end"
            >
              {showPassword ? <Visibility sx={{ color: 'skyblue' }} /> : <VisibilityOff sx={{ color: 'skyblue' }} />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        color: `${theme.palette.custom.theme1}`,
        '& .MuiInputLabel-root': {
          color: `${theme.palette.custom.theme1}`, // Placeholder (label) color when not focused
          '&.Mui-focused': {
            color: `${theme.palette.custom.theme1}`, // Placeholder (label) color when focused
          },
        },
        '& .MuiOutlinedInput-root': {
          '& input': {
            color: `${theme.palette.custom.theme1}`, // Text color when typing
          },
          '&::placeholder': {
            color: `${theme.palette.custom.theme1}`, // Fallback placeholder color
            opacity: 1,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: `${theme.palette.custom.theme1}`, // Border color
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: `${theme.palette.custom.theme1}`, // Border color on hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: `${theme.palette.custom.theme1}`, // Border color when focused
          },
        },
      }}
    />
  );
};

export default VisibilityInputField;