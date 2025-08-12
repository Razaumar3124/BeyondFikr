import React, { useEffect } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router/dom'
import routes from './Routes/Routes'
import theme from './Theme/Theme'
import { ToastContainer } from 'react-toastify'
import useStore from '../src/Store/Store.jsx'
import { HelmetProvider } from 'react-helmet-async';

const App = () => {

    // const data = useStore((state) => state.data);
    const fetchData = useStore((state) => state.fetchData);

    useEffect(() => {
      fetchData(); // ✅ fetches data on mount
    }, [fetchData]);

  return (
    <HelmetProvider>
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
    </HelmetProvider>
      
  )
}

export default App