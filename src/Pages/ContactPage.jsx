import { Box } from '@mui/material'
import React from 'react'
import ContactSec1 from './ContactPage/ContactSec1.jsx'
import SEO from '../Components/SEO.jsx'

const ContactPage = () => {
  return (
    <Box>
      <SEO
        title="Contact Us | BeyondFikr Mental Health & Therapy"
        description={`Get in touch with BeyondFikr for individual therapy, group therapy, couple therapy, 
                    training programs, and workshops. Contact our team of professional therapists to book a session or 
                    learn more about our mental health services.`}
        keywords={`Contact BeyondFikr, BeyondFikr phone number, BeyondFikr email, Book therapy session BeyondFikr, 
                  Contact mental health services India, BeyondFikr address, Schedule therapy BeyondFikr, Reach BeyondFikr, 
                  BeyondFikr support, Speak to a therapist BeyondFikr, Therapy appointment booking, 
                  Contact counseling services BeyondFikr, Connect with BeyondFikr therapists, 
                  BeyondFikr help desk, Mental health inquiries BeyondFikr`}
        url="https://beyondfikr.com/contact"
      />
      <ContactSec1 />
    </Box>
  )
}

export default ContactPage