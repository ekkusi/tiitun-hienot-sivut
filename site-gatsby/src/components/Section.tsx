import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

export type SectionProps = BoxProps & {
  isWide?: boolean;
  colorMode?: "dark" | "light";
};

function Section({
  children,
  colorMode = "light",
  isWide = false,
  ...rest
}: SectionProps) {
  return (
    <Box
      as="section"
      width="100%"
      py={40}
      px={isWide ? 0 : 3}
      color={colorMode === "light" ? "text" : "textWhite"}
      bgColor={colorMode === "light" ? "bg" : "darkBg"}
      {...rest}
    >
      {isWide ? (
        children
      ) : (
        <Box
          maxWidth={{ base: "100%", md: "800px" }}
          mx={{ base: 0, md: "auto" }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
}

export default Section;
