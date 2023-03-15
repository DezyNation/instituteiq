import { FilesProvider } from "@/Components/Student/Student Assignment/FilesProvider";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <FilesProvider>
        <Component {...pageProps} />
      </FilesProvider>
    </ChakraProvider>
  );
}
