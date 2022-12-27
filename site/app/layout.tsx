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
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() =>
              typeof window != "undefined" &&
              window.scrollTo({ top: 0, left: 0, behavior: "auto" })
            }
          >
            <Navigation position="absolute" />
            {children}
            <Footer />
          </AnimatePresence>
        </ChakraProvider>
      </body>
    </html>
  );
}
