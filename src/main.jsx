import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from '@material-tailwind/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<ChakraProvider>

    <NextUIProvider>
      <BrowserRouter>
      <ThemeProvider>
      <App/>
      </ThemeProvider>
       
      </BrowserRouter>
    </NextUIProvider>
    
</ChakraProvider>
     
  

  </React.StrictMode>,
)
