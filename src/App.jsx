import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router/dom'
import routes from './Routes/Routes'
import theme from './Theme/Theme'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from './Utils/ScrollToTop'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes}/>
      <CssBaseline /> 
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'fit-content',
          zIndex: 9999,
        }}
      />
    </ThemeProvider>
  )
}

export default App