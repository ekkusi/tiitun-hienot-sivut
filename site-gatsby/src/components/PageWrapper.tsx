import React from "react";
import { Box } from "@chakra-ui/react";
import { MotionBox } from "./motion-chakra";

type PageWrapperProps = {
  children: React.ReactNode;
};

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <Box
    // initial={{ x: 300, opacity: 0 }}
    // animate={{ x: 0, opacity: 1 }}
    // exit={{ x: 300, opacity: 0 }}
    // transition={{
    //   duration: 0.5,
    // }}
    >
      {/* <ChakraBox
        width="100%"
        height="100vh"
        position="fixed"
        bgColor="darkBg"
        zIndex={105}
        initial={{ height: "100vh", opacity: 1 }}
        exit={{
          height: "100vh",
          opacity: 1,
          transition: {
            height: {
              duration: 0,
            },
          },
        }}
        animate={{
          height: 0,
          opacity: 0,
          transition: {
            duration: 0.7,
            delay: 0.3,
            opacity: {
              duration: 0,
              delay: 1.0,
            },
          },
        }}
        // @ts-ignore
        transition={{
          duration: 0.3,
        }}
      /> */}
      <MotionBox
        width="100%"
        height="100vh"
        position="fixed"
        bgColor="darkBg"
        zIndex={105}
        initial={{ height: "100vh" }}
        exit={{
          height: "100vh",
        }}
        animate={{
          height: 0,
          transition: {
            delay: 0.5,
            duration: 0.5,
          },
        }}
        transition={{
          duration: 0.3,
        }}
      />
      {children}
    </Box>
  );
}

export default PageWrapper;
