import { FiInstagram } from "react-icons/fi";
import { Flex, FlexProps, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "gatsby";
import Logo from "./Logo";

type NavigationProps = FlexProps;

function Navigation(props: NavigationProps) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="relative"
      width="100%"
      zIndex="101"
      {...props}
    >
      {/* <Box color="white">
        <Logo />
      </Box> */}
      <Link to="/">
        <Logo w={150} h={150} color="white" />
      </Link>
      <Text
        as="a"
        href="https://www.instagram.com/tiitupaakkonen.art"
        target="_blank"
        rel="noreferrer"
        position="absolute"
        right="5"
        top="5"
      >
        <Icon as={FiInstagram} w={7} h={7} color="white" />
      </Text>
    </Flex>
  );
}

export default Navigation;
