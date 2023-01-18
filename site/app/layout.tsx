"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
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
    <html lang="fi">
      <head />
      <body>
        <Fonts />
        <ChakraProvider theme={theme}>
          <Navigation position="absolute" />
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() =>
              typeof window !== "undefined" &&
              window.scrollTo({ top: 0, left: 0, behavior: "auto" })
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
