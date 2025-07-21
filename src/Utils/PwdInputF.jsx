import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField, useTheme } from '@mui/material';
import React, { useState } from 'react';

const PwdInputF = ({ ref, name, mt, method, error, helpertxt }) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <TextField
      id="outlined-adornment-password"
      type={showPassword ? 'text' : 'password'}
      label={name}
      ref={ref}
      onChange={method}
      error={!!error}
      helperText={helpertxt}
      required
      sx={{ width: {xs: "90%",md: "80%"}, mt: mt }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label={showPassword ? 'hide the password' : 'display the password'}
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? (
                <Visibility sx={{ color: theme.palette.custom.theme1 }} />
              ) : (
                <VisibilityOff sx={{ color: theme.palette.custom.theme1 }} />
              )}
            </IconButton>
          </InputAdornment>
        ),
        sx: {
          color: theme.palette.custom.theme1,
          '& input': {
            color: theme.palette.custom.theme1,
          },
          '&::placeholder': {
            color: theme.palette.custom.theme1,
            opacity: 1,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.custom.theme1,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.custom.theme1,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.custom.theme1,
          },
        },
      }}
      InputLabelProps={{
        sx: {
          color: theme.palette.custom.theme1,
          '&.Mui-focused': {
            color: theme.palette.custom.theme1,
          },
        },
      }}
    />
  );
};

export default PwdInputF;
