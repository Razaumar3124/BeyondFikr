import React, { useEffect, useState } from 'react';
import {
  Box, Button, TextField, Typography, Paper,
  InputAdornment, IconButton, CircularProgress
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  LockReset as LockResetIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import useStore from '../Store/Store';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SEO from '../Components/SEO';

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: '450px',
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '16px',
  boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.15)'
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
  padding: theme.spacing(1.5),
  borderRadius: '12px',
  fontWeight: 'bold',
  letterSpacing: '1px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 5px 15px ${theme.palette.primary.main}40`
  }
}));

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = new URLSearchParams(location.search).get('token');

  const {
    newPassword,
    confirmPassword,
    setNewPassword,
    setConfirmPassword,
    resetPasswordAction,
    resetSuccessMsg,
    resetErrorMsg,
    resetLoading
  } = useStore();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [mismatchError, setMismatchError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Token is missing from the URL.");
      return;
    }

    if (!newPassword || !confirmPassword) {
      toast.error("Both fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMismatchError('Passwords do not match.');
      return;
    }

    setMismatchError('');
    await resetPasswordAction(token, newPassword);
  };

  useEffect(() => {
    if (resetSuccessMsg) {
      toast.success(resetSuccessMsg);
      setTimeout(() => {
        navigate('/log');
      }, 2500);
    }

    if (resetErrorMsg) {
      toast.error(resetErrorMsg);
    }
  }, [resetSuccessMsg, resetErrorMsg, navigate]);

  return (
    <>
    <SEO
      title="Reset Password | BeyondFikr"
      description={`Securely reset your BeyondFikr account password to regain access to your mental health and 
                  therapy services. Protect your account and ensure uninterrupted access to our online counseling platform.`}
      keywords={`BeyondFikr reset password, Reset BeyondFikr account password, Password recovery BeyondFikr, 
                BeyondFikr login help, Secure password reset BeyondFikr, Recover BeyondFikr account, Online therapy account recovery, 
                BeyondFikr password assistance, Forgot password BeyondFikr, Mental health services login reset`}
      url="https://beyondfikr.com/reset"
    />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default',
        p: 2
      }}
    >
      <ToastContainer position="top-center" />
      <StyledPaper elevation={3}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <LockResetIcon color="primary" sx={{ fontSize: 60 }} />
        </Box>

        <Typography component="h1" variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Reset Password
        </Typography>

        <Typography variant="body2" color="textSecondary" align="center" paragraph>
          Enter your new password below.
        </Typography>

        <Box sx={{ width: '100%' }} component="form" onSubmit={handleSubmit}>
          <TextField
            label="New Password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type={showPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
          />

          <TextField
            label="Confirm Password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowConfirmPassword((prev) => !prev)} edge="end">
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
          />

          {mismatchError && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {mismatchError}
            </Typography>
          )}

          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            startIcon={resetLoading ? <CircularProgress size={20} color="inherit" /> : <LockResetIcon />}
            disabled={resetLoading}
          >
            {resetLoading ? 'Resetting...' : 'Reset Password'}
          </StyledButton>
        </Box>
      </StyledPaper>
    </Box>
    </>
  );
};

export default ResetPassword;
