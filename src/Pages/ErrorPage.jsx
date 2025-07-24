import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  SentimentVeryDissatisfied as ErrorIcon,
  Home as HomeIcon,
  Warning as WarningIcon,
  BrokenImage as BrokenImageIcon
} from '@mui/icons-material';

const ErrorPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const setVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  setVh();
  window.addEventListener("resize", setVh);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(var(--vh, 1vh) * 100)',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        padding: theme.spacing(3),
        textAlign: 'center',
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ width: '100%' }}
      >
        {/* Error Icon */}
        <motion.div 
          variants={itemVariants}
          whileHover="hover"
        >
          <ErrorIcon
            sx={{
              fontSize: isMobile ? '5rem' : '8rem',
              color: theme.palette.error.main,
              mb: 2,
              filter: 'drop-shadow(3px 3px 0 rgba(0,0,0,0.1))',
            }}
          />
        </motion.div>

        {/* Error Code */}
        <motion.div variants={itemVariants}>
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            sx={{
              fontWeight: 700,
              color: theme.palette.error.dark,
              mb: 1,
              textShadow: '2px 2px 0 rgba(0,0,0,0.1)',
            }}
          >
            404
          </Typography>
        </motion.div>

        {/* Title */}
        <motion.div variants={itemVariants}>
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            sx={{
              mb: 2,
              fontWeight: 600,
              color: theme.palette.text.primary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <WarningIcon color="warning" fontSize="large" />
            Oops! Page Not Found
          </Typography>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants}>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              maxWidth: '600px',
              margin: '0 auto',
              color: theme.palette.text.secondary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <BrokenImageIcon color="disabled" />
            The page you're looking for doesn't exist or has been moved.
          </Typography>
        </motion.div>

        {/* Home Button */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<HomeIcon />}
            sx={{
              mt: 2,  
              px: 4,
              py: 1.5,
              borderRadius: '50px',
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: theme.shadows[4],
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: theme.shadows[8],
                background: theme.palette.primary.dark,
              },
            }}
          >
            Return to Home
          </Button>
        </motion.div>

        {/* Additional Help */}
        <motion.div variants={itemVariants}>
          <Typography
            variant="body2"
            sx={{
              mt: 4,
              color: theme.palette.text.secondary,
            }}
          >
            Need help? Contact our support team
          </Typography>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default ErrorPage;