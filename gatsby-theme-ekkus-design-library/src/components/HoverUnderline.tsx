import { TextProps, Text } from "@chakra-ui/react";
import React from "react";

type HoverUnderlineProps = TextProps & {};

const HoverUnderline = ({
  children,
  ...textProps
}: HoverUnderlineProps): JSX.Element => {
  return (
    <Text
      position="relative"
      _after={{
        content: `""`,
        width: 0,
        height: "0.05em",
        position: "absolute",
        bottom: "0.1em",
        left: 0,
        transition: "width 0.5s",
        bg: "black",
      }}
      _hover={{
        _after: {
          width: "100%",
        },
      }}
      _focus={{
        _after: {
          width: "100%",
        },
      }}
      {...textProps}
    >
      {children}
    </Text>
  );
};

export default HoverUnderline;
