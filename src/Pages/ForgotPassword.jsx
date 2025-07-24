import React, { useEffect } from 'react';
import {
  Box, Button, TextField, Typography, Paper,
  InputAdornment, Alert, CircularProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Email as EmailIcon, LockReset as LockResetIcon } from '@mui/icons-material';
import useStore from '../Store/Store';

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

const ForgotPassword = () => {
  const {
    forgotEmail,
    setforgotEmail,
    resetPassword,
    forgotsuccessMsg,
    forgoterrorMsg,
    forgotLoading
  } = useStore();

  useEffect(() => {
    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetPassword();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(var(--vh, 1vh) * 100)',
        p: 2,
        bgcolor: 'background.default'
      }}
    >
      <StyledPaper elevation={3}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <LockResetIcon color="primary" sx={{ fontSize: 60 }} />
        </Box>

        <Typography component="h1" variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Forgot Password?
        </Typography>

        <Typography variant="body2" color="textSecondary" align="center" paragraph>
          Enter your email address and we'll send you a link to reset your password.
        </Typography>

        <Box sx={{ width: '100%' }} component="form" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={forgotEmail}
            onChange={(e) => setforgotEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon color="action" />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                '&:hover fieldset': {
                  borderColor: 'primary.main',
                },
              },
            }}
          />

          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            startIcon={forgotLoading ? <CircularProgress size={20} color="inherit" /> : <LockResetIcon />}
            disabled={forgotLoading}
          >
            {forgotLoading ? 'Sending...' : 'Send Reset Link'}
          </StyledButton>

          {forgotsuccessMsg && <Alert severity="success">{forgotsuccessMsg}</Alert>}
          {forgoterrorMsg && <Alert severity="error" sx={{ mt: 2 }}>{forgoterrorMsg}</Alert>}
        </Box>
      </StyledPaper>
    </Box>
  );
};

export default ForgotPassword;