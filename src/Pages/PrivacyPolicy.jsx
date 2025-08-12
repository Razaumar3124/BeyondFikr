import React from 'react';
import { Box, Typography, Paper, Divider, useTheme } from '@mui/material';
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

const SectionCard = ({ title, children }) => (
  <Paper elevation={1} sx={{ p: 2, my: 2, borderRadius: 2, backgroundColor: '#f9f9f9' }}>
    {title && <Typography variant="subtitle1" fontWeight="bold" gutterBottom>{title}</Typography>}
    <Typography>{children}</Typography>
  </Paper>
);

const PrivacyPolicy = () => {

  const theme = useTheme();

  return (
    <>
    <SEO
      title="Privacy Policy | BeyondFikr"
      description={`Read BeyondFikr's Privacy Policy to understand how we collect, use, and protect your 
                  personal information. We are committed to ensuring your privacy while providing mental health 
                  and therapy services.`}
      keywords={`BeyondFikr privacy policy, Privacy policy for mental health services, Data protection BeyondFikr, 
                BeyondFikr terms and privacy, Personal information security BeyondFikr, Mental health data privacy, 
                BeyondFikr confidentiality policy, Therapy privacy guidelines, Online therapy privacy, 
                BeyondFikr data handling practices, Secure counseling services BeyondFikr`}
      url="https://beyondfikr.com/privacy"
    />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: '1000px',
          mx: 'auto',
          my: 4,
          p: { xs: 2, sm: 4 },
          borderRadius: 3,
          backgroundColor: '#ffffff',
        }}
      >
        <GradientHeader title="Privacy Policy - BeyondFikr" color1={theme.palette.custom.theme1} color2={theme.palette.custom.theme1} />

        <Typography variant="body2" color="text.secondary" align="right">
          Last Updated: June 29, 2025
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Box
          sx={{
            maxHeight: '70vh',
            overflowY: 'auto',
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
          <SectionCard title="1. Information We Collect">
            <ul style={{ paddingLeft: '20px' }}>
              <li><strong>Personal Information:</strong> Name, email address, phone number (only if you provide it via contact forms or messages).</li>
              <li><strong>Usage Data:</strong> Data about how you interact with our page (likes, comments, shares, time spent, etc.).</li>
              <li><strong>Cookies & Analytics:</strong> Collected when visiting our website to improve services.</li>
            </ul>
          </SectionCard>

          <SectionCard title="2. How We Use Your Information">
            <ul style={{ paddingLeft: '20px' }}>
              <li>To respond to your queries or messages</li>
              <li>To share relevant psychology content or updates</li>
              <li>To improve user experience and content quality</li>
              <li>To maintain safety and community standards</li>
            </ul>
            <Typography mt={1}>
              We <strong>do not sell, rent, or share</strong> your personal data with third parties for marketing purposes.
            </Typography>
          </SectionCard>

          <SectionCard title="3. Third-Party Services">
            <Typography>
              We may use tools like:
              <ul style={{ paddingLeft: '20px' }}>
                <li>Google Analytics or social media insights</li>
                <li>Email tools (e.g., Mailchimp) for newsletters</li>
              </ul>
              These tools have their own privacy policies which we encourage you to review.
            </Typography>
          </SectionCard>

          <SectionCard title="4. Data Protection">
            <Typography>
              We take appropriate technical and organizational measures to protect your data. While no system is 100% secure, we strive to keep your information safe.
            </Typography>
          </SectionCard>

          <SectionCard title="5. Your Rights">
            <ul style={{ paddingLeft: '20px' }}>
              <li>Access, update, or delete your personal data</li>
              <li>Opt out of communications at any time</li>
              <li>Request clarification about how your data is used</li>
            </ul>
            <Typography mt={1}>
              To exercise these rights, contact us at: <strong>beyondfikr@gmail.com</strong>
            </Typography>
          </SectionCard>

          <SectionCard title="6. Children’s Privacy">
            <Typography>
              BeyondFikr is not directed at individuals under the age of 13. We do not knowingly collect personal data from children.
            </Typography>
          </SectionCard>

          <SectionCard title="7. Changes to This Policy">
            <Typography>
              We may update this Privacy Policy occasionally. We’ll notify users via website or social media if there are significant changes.
            </Typography>
          </SectionCard>

          <SectionCard title="8. Contact Us">
            <Typography>
              If you have any questions about this Privacy Policy or how your data is handled, contact us at:
              <br />
              <strong>beyondfikr@gmail.com</strong><br />
              <strong>India</strong>
            </Typography>
          </SectionCard>
        </Box>
      </Paper>
    </motion.div>
    </>
  );
};

export default PrivacyPolicy;
