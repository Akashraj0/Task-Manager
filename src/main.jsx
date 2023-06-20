import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import  { ChakraProvider , extendTheme} from '@chakra-ui/react'


// extend the theme
const colors ={
  brand: {
    900: 'blue',
    800: 'red',
    700: '#024fc9'
  }
}
const theme =extendTheme({colors})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
