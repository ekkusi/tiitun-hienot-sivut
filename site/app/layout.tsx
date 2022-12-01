"use client";

import { ChakraProvider } from "@chakra-ui/react";
import Navigation from "./Navigation";
import theme from "../theme";
import Fonts from "../theme/Fonts";

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
        </ChakraProvider>
      </body>
    </html>
  );
}
