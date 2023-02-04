import "@/styles/globals.css";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {

  return (
    <ChakraBaseProvider>
      (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  );
    </ChakraProvider>
  )
}
