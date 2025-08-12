import { Box } from '@mui/material'
import React from 'react'
import HomeSec1 from './HomePage/HomeSec1.jsx'
import HomeSec2 from './HomePage/HomeSec2.jsx'
import HomeSec4 from './HomePage/HomeSec4.jsx'
import HomeSec5 from './HomePage/HomeSec5.jsx'
import HomeSec3 from './HomePage/HomeSec3.jsx'
import SEO from '../Components/SEO.jsx'

const HomePage = () => {
  return (
    <Box>
      <SEO
        title="BeyondFikr | Mental Health & Therapy Services"
        description={`BeyondFikr offers professional individual therapy, group therapy, and couple therapy sessions, along with 
                    training programs and workshops to support your mental and emotional well-being.`}
        keywords={`BeyondFikr, BeyondFikr therapy, BeyondFikr mental health services, Individual therapy at BeyondFikr, 
                  Group therapy at BeyondFikr, Couple therapy at BeyondFikr, BeyondFikr training programs, BeyondFikr workshops, 
                  Online therapy with BeyondFikr, Mental health counseling, Professional therapists in India, Psychology services, 
                  Licensed counselors at BeyondFikr, Therapy for emotional well-being, Mental health support, Holistic therapy services, 
                  Psychological counseling, Therapy and counseling in India, BeyondFikr wellness programs, Mindfulness and therapy, 
                  Stress management therapy, Anxiety and depression counseling, Relationship counseling at BeyondFikr, Mental wellness guidance, 
                  BeyondFikr compassionate care, Therapy and mental wellness, Expert counseling services, BeyondFikr therapy experts`}
        url="https://beyondfikr.com/home"
      />
      <HomeSec1 />
      <HomeSec2 />
      <HomeSec3 />
      <HomeSec4 />
      <HomeSec5 />
    </Box>
  )
}

export default HomePage