// ./components/Policies.jsx
import React from 'react';
import { Box, Tab, Tabs, Typography, Paper, Divider, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SEO from '../Components/SEO';

const GradientHeader = ({ title, color1, color2 }) => (
  <Box
    sx={{
      py: 2,
      px: 3,
      background: `linear-gradient(90deg, ${color1} 0%, ${color2} 100%)`,
      borderRadius: 2,
      color: '#fff',
      mb: 3,
      textAlign: 'center',
    }}
  >
    <Typography variant="h5" fontWeight="bold">{title}</Typography>
  </Box>
);

const SectionCard = ({ children }) => (
  <Paper elevation={1} sx={{ p: 2, my: 2, borderRadius: 2, backgroundColor: '#f9f9f9' }}>
    {children}
  </Paper>
);

const TermsContent = ({ theme }) => (
  <Box>
    <GradientHeader title="Terms & Conditions - BeyondFikr" color1={theme.palette.custom.theme1} color2={theme.palette.custom.theme1}/>
    <SectionCard>
      <Typography paragraph>
        Welcome to BeyondFikr! These Terms and Conditions outline the rules and regulations for using our website, therapy services, and content.
        By accessing or using BeyondFikr, you agree to be bound by these Terms.
      </Typography>
    </SectionCard>

    {[
      {
        title: '1. Use of Services',
        body: `Our services are intended for mental wellness support, coaching, or therapy-related content. You agree to use them responsibly.
        Note: BeyondFikr does not provide emergency mental health services. Please contact your local services if in crisis.`
      },
      {
        title: '2. Therapy Disclaimer',
        body: `Sessions do not replace medical or psychiatric care. No outcomes are guaranteed. Confidentiality is ensured unless required by law.`
      },
      {
        title: '3. Intellectual Property',
        body: `All content on this platform belongs to BeyondFikr unless stated otherwise. Do not reuse without permission.`
      },
      {
        title: '4. Privacy',
        body: `We respect your privacy. Refer to our Privacy Policy for full details.`
      },
      {
        title: '5. User Conduct',
        body: `Do not engage in harmful, abusive, or misleading behavior. We may terminate access if these terms are violated.`
      },
      {
        title: '6. Payments & Bookings',
        body: `All sessions must be paid for in advance. Cancellation policies apply as described at the time of booking.`
      },
      {
        title: '7. Limitation of Liability',
        body: `We are not liable for any damages arising from use of our services or content.`
      },
      {
        title: '8. Modifications',
        body: `We may update these Terms at any time. Continued use means acceptance of updated terms.`
      },
      {
        title: '9. Governing Law',
        body: `These terms follow the laws of [Insert Country/State]. You agree to the exclusive jurisdiction of the courts there.`
      }
    ].map(({ title, body }, idx) => (
      <SectionCard key={idx}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>{title}</Typography>
        <Typography>{body}</Typography>
      </SectionCard>
    ))}

    <Box mt={3}>
      <Typography variant="body2">
        Contact Us<br />
        Email: info@beyondfikr.com<br />
        Website: www.beyondfikr.com
      </Typography>
    </Box>
  </Box>
);

const RefundContent = ({ theme }) => (
  <Box>
    <GradientHeader title="Refund Policy - BeyondFikr" color1={theme.palette.custom.theme1} color2={theme.palette.custom.theme1}/>
    {[
      {
        title: '1. 1:1 Therapy Sessions',
        body: (
          <>
            <ul>
              <li>Refunds available only if cancelled 24+ hours before the session.</li>
              <li>No refunds for late cancellations or no-shows.</li>
              <li>Reschedule up to 12 hours prior with no fee.</li>
              <li>Package refunds only for unused sessions (10% processing fee applies).</li>
            </ul>
          </>
        )
      },
      {
        title: '2. Digital Products / Tools for Growth',
        body: `All digital sales are final once accessed or downloaded.`
      },
      {
        title: '3. Workshops & Webinars',
        body: `Cancel and get a refund 48+ hours before the event. Or request a recording or transfer the spot.`
      },
      {
        title: '4. Processing Time',
        body: `Refunds are processed within 5–7 business days to the original payment method.`
      }
    ].map(({ title, body }, idx) => (
      <SectionCard key={idx}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>{title}</Typography>
        <Typography>{body}</Typography>
      </SectionCard>
    ))}

    <Box mt={3}>
      <Typography variant="body2">
        Contact Us<br />
        Email: beyondfikr@beyondfikr.com
      </Typography>
    </Box>
  </Box>
);

const Policies = () => {
  const [tab, setTab] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
    <SEO
      title="Terms and Conditions | BeyondFikr"
      description={`Read BeyondFikr's Terms and Conditions to understand our policies, 
                  service agreements, and user responsibilities regarding therapy sessions, training programs, 
                  workshops, and mental health services.`}
      keywords={`BeyondFikr terms and conditions, BeyondFikr policies, BeyondFikr service agreement, 
                Therapy service terms, Counseling service terms, Training program terms, Workshop participation terms, 
                BeyondFikr legal policies, User agreement BeyondFikr`}
      url="https://beyondfikr.com/terms"
    />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          my: 4,
          p: { xs: 2, sm: 4 },
          borderRadius: 3,
          backgroundColor: "#ffffff",
          boxShadow: theme.shadows[5],
        }}
      >
        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          textColor="primary"
          indicatorColor="primary"
          variant={isMobile ? "scrollable" : "fullWidth"}
          scrollButtons="auto"
          sx={{ mb: 2 }}
        >
          <Tab label="Terms & Conditions" />
          <Tab label="Refund Policy" />
        </Tabs>
        <Divider />
        <Box
          sx={{
            maxHeight: "70vh",
            overflowY: "auto",
            pr: 1,
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ccc',
              borderRadius: '4px',
            }
          }}
        >
          {tab === 0 ? <TermsContent theme={theme} /> : <RefundContent theme={theme} />}
        </Box>
      </Paper>
    </motion.div>
    </>
  );
};

export default Policies;
