import { Box } from '@mui/material'
import React from 'react'
import AboutSec1 from './AboutPage/AboutSec1.jsx'
import AboutSec3 from './AboutPage/AboutSec3.jsx'
import AboutSec2 from './AboutPage/AboutSec2.jsx'
import SEO from '../Components/SEO.jsx'

const AboutusPage = () => {
  return (
    <Box>
      <SEO
        title="About BeyondFikr | Your Trusted Mental Health Partner"
        description={`Learn about BeyondFikr's mission, values, and professional approach to mental health. 
                    We provide individual, group, and couple therapy sessions, along with training programs and workshops, 
                    led by experienced and compassionate therapists dedicated to your emotional well-being.`}
        keywords={`BeyondFikr about us, BeyondFikr mission, BeyondFikr values, Professional therapists at BeyondFikr, 
                  Mental health experts in India, BeyondFikr story, Our approach to therapy, Licensed counselors at BeyondFikr, 
                  BeyondFikr psychology services, Holistic therapy approach, Mental health support, BeyondFikr compassionate care, 
                  Therapy and counseling in India, BeyondFikr wellness programs, Mindfulness and therapy, Stress management therapy, 
                  Relationship counseling, Mental wellness guidance, Expert counseling services, BeyondFikr therapy experts`}
        url="https://beyondfikr.com/about"
      />

      <AboutSec1 />
      <AboutSec2 />
      <AboutSec3 />
    </Box>
  )
}

export default AboutusPage