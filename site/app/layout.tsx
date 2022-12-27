"use client";

import { ChakraProvider } from "@chakra-ui/react";
import Navigation from "./Navigation";
import theme from "../theme";
import Fonts from "../theme/Fonts";
import Footer from "./(components)/Footer";
import { AnimatePresence } from "framer-motion";

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
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() =>
              typeof window != "undefined" && window.scrollTo(0, 0)
            }
          >
            {children}
          </AnimatePresence>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
