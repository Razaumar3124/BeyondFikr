import React, { useEffect, useState } from 'react';
import { TextField, InputAdornment, IconButton, useTheme, Tooltip, Typography, Box } from '@mui/material';
import { Visibility, VisibilityOff, CheckCircle, Cancel } from '@mui/icons-material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VisibilityInputField = ({ props }) => {
  const { addToRefs, textlabel, onPasswordChange } = props;
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  // Password validation checks
  const isLengthValid = password.length >= 8 && password.length <= 16;
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isPasswordValid = isLengthValid && hasUppercase && hasSpecialChar;

  // Handle password input change
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setTooltipOpen(true);
    // Pass the password to parent only if valid
    if (isPasswordValid) {
      onPasswordChange?.(newPassword);
    } else {
      onPasswordChange?.('');
    }
  };

  // Handle validation on blur
  const handleBlur = () => {
    if (password && !isPasswordValid) {
      toast.error('Invalid password: Must be 8-16 characters, include one uppercase letter, and one special character.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      // Clear password in parent if invalid
      onPasswordChange?.('');
    }
  };

  // Hide tooltip when password field is empty
  useEffect(() => {
    if (password === '') {
      setTooltipOpen(false);
      onPasswordChange?.('');
    }
  }, [password, onPasswordChange]);

  return (
    <>
      <Tooltip
        open={tooltipOpen}
        title={
          <Box sx={{ p: 1 }}>
            <Typography variant="caption" display="flex" alignItems="center">
              {isLengthValid ? <CheckCircle sx={{ color: 'green', mr: 1, fontSize: 16 }} /> : <Cancel sx={{ color: 'red', mr: 1, fontSize: 16 }} />}
              8-16 characters
            </Typography>
            <Typography variant="caption" display="flex" alignItems="center">
              {hasUppercase ? <CheckCircle sx={{ color: 'green', mr: 1, fontSize: 16 }} /> : <Cancel sx={{ color: 'red', mr: 1, fontSize: 16 }} />}
              At least one uppercase letter
            </Typography>
            <Typography variant="caption" display="flex" alignItems="center">
              {hasSpecialChar ? <CheckCircle sx={{ color: 'green', mr: 1, fontSize: 16 }} /> : <Cancel sx={{ color: 'red', mr: 1, fontSize: 16 }} />}
              At least one special character
            </Typography>
          </Box>
        }
        placement="bottom"
        arrow
      >
        <TextField
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          label={textlabel}
          ref={addToRefs}
          required
          value={password}
          onChange={handlePasswordChange}
          onBlur={handleBlur}
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
                  {showPassword ? <Visibility sx={{ color: `${theme.palette.custom.theme1}` }} /> : <VisibilityOff sx={{ color: `${theme.palette.custom.theme1}` }} />}
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              color: `${theme.palette.custom.theme1}`,
              '& input': {
                color: `${theme.palette.custom.theme1}`,
              },
              '&::placeholder': {
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
          }}
          InputLabelProps={{
            sx: {
              color: `${theme.palette.custom.theme1}`,
              '&.Mui-focused': {
                color: `${theme.palette.custom.theme1}`,
              },
            },
          }}
        />
      </Tooltip>
    </>
  );
};

export default VisibilityInputField;