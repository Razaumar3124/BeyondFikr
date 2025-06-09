import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router/dom'
import routes from './Routes/Routes'
import theme from './Theme/Theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes}/>
      <CssBaseline /> 
    </ThemeProvider>
  )
}

export default App