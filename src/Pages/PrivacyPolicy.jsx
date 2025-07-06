import { Box, Button, Typography, useTheme } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {

    const title = 'Privacy Policy'
    const sections = [
      {
        heading: '1. Information We Collect',
        content: 'We may collect the following types of information: \n- Personal Information: Name, email address, phone number (only if you provide it via contact forms or messages). \n- Usage Data: Data about how you interact with our page (likes, comments, shares, time spent, etc.). \n- Cookies and Analytics: If you visit our website, we may collect cookies and analytics data to improve our services.',
      },
      {
        heading: '2. How We Use Your Information',
        content: 'We use your information to: \n- Respond to your queries or messages \n- Share relevant psychology content or updates \n- Improve user experience and content quality \n- Maintain safety and community standards \nWe do not sell, rent, or share your personal data with third parties for marketing purposes.',
      },
      {
        heading: '3. Third-Party Services',
        content: 'We may use tools like: \n- Google Analytics or social media insights to understand user behavior \n- Email tools (e.g., Mailchimp) if you subscribe to our newsletter \nThese services have their own privacy policies which we encourage you to review.',
      },
      {
        heading: '4. Data Protection',
        content: 'We take appropriate technical and organizational measures to protect your data. While no system is 100% secure, we strive to keep your information safe.',
      },
      {
        heading: '5. Your Rights',
        content: 'You have the right to: \n- Access, update, or delete your personal data \n- Opt out of any communications at any time \n- Request clarification about how your data is used \nTo exercise these rights, contact us at: beyondfikr@gmail.com',
      },
      {
        heading: '6. Children’s Privacy',
        content: 'BeyondFikr is not directed at individuals under the age of 13. We do not knowingly collect personal data from children.',
      },
      {
        heading: '7. Changes to This Policy',
        content: 'We may update this Privacy Policy from time to time. We will notify you of any significant changes via our website or social media.',
      },
      {
        heading: '8. Contact Us',
        content: 'If you have any questions about this Privacy Policy or how your data is handled, please contact us at: beyondfikr@gmail.com \nIndia',
      },
    ]
    const buttonText = 'Contact Us'
    const linkTo = '/contact'

  const theme = useTheme();
  const titleRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Animate title (odd, from left)
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animate sections (odd from left, even from right)
    sectionRefs.current.forEach((el, index) => {
      const isOdd = index % 2 === 0;
      gsap.fromTo(
        el,
        { opacity: 0, x: isOdd ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <Box
      sx={{
        padding: { xs: '20px', md: '40px' },
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '80%' },
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <Typography
          variant="h4"
          ref={titleRef}
          sx={{
            fontFamily: theme.palette.custom?.fontFamily || 'inherit',
            fontWeight: 'bold',
            fontSize: { xs: '32px', md: '40px' },
            mb: '20px',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        {sections.map((section, index) => (
          <Box
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: theme.palette.custom?.fontFamily || 'inherit',
                fontWeight: 'bold',
                fontSize: { xs: '20px', md: '24px' },
              }}
            >
              {section.heading}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '16px', md: '18px' },
                lineHeight: '1.6',
                whiteSpace: 'pre-line',
              }}
            >
              {section.content}
            </Typography>
          </Box>
        ))}
        <NavLink to={linkTo}>
          <Button
            variant="contained"
            sx={{
              color: 'white',
              bgcolor: 'black',
              '&:hover': { bgcolor: '#333' },
            }}
          >
            {buttonText}
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;