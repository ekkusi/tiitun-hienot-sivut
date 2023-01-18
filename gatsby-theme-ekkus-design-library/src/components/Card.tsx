import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

type CardProps = BoxProps & {
  children: JSX.Element;
};

const Card = ({ children, ...boxProps }: CardProps): JSX.Element => {
  return (
    <Box p="5" boxShadow="xl" {...boxProps}>
      {children}
    </Box>
  );
};

export default Card;
