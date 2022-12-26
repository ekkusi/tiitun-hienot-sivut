"use client";

import { ChakraProvider } from "@chakra-ui/react";
import Navigation from "./Navigation";
import theme from "../theme";
import Fonts from "../theme/Fonts";
import Footer from "./(components)/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Fonts />
        <ChakraProvider theme={theme}>
          <Navigation position="absolute" />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
