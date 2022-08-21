import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
      global: props => ({
          body: {
            bg: mode('#f26e94', '#f26e94')(props)
          }
      })
  }

const config = { 
    initialColorMode: 'light',
    useSystemColorMode: false
}
    
const breakpoints = {
    sm: '320px',
    'sm-1': '550px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
}
    
const fonts = {
    body: "Athiti, sans-serif",
    heading: "Athiti, sans-serif",
    mono: "Athiti, sans-serif",
} 
    
const theme = extendTheme({  breakpoints, fonts, styles, config })

export default theme