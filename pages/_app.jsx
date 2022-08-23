import { ChakraProvider } from "@chakra-ui/react";
import theme from "../Libs/theme";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme} >
      <Component {...pageProps} key={router.route} />
    </ChakraProvider>
  )
}

export default MyApp
