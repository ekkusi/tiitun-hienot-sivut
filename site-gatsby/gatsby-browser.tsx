import React from "react";
import { ShouldUpdateScrollArgs, WrapPageElementNodeArgs } from "gatsby";
import { AnimatePresence } from "framer-motion";

import { ChakraProvider } from "@chakra-ui/react";
import Navigation from "./src/components/Navigation";
import Footer from "./src/components/Footer";
import theme from "./src/theme";
import Fonts from "./src/theme/Fonts";
// import { theme } from "../gatsby-theme-ekkus-design-library";

export const wrapPageElement = ({ element }: WrapPageElementNodeArgs) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Navigation position="absolute" />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => {
          if (typeof window !== "undefined")
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }}
      >
        {element}
      </AnimatePresence>
      <Footer />
    </ChakraProvider>
  );
};

export const shouldUpdateScroll = () => {
  return false;
};
