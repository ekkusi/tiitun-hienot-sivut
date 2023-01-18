import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FiInstagram } from "react-icons/fi";
import Section, { SectionProps } from "./Section";

type FooterProps = SectionProps;

function Footer(props: FooterProps) {
  return (
    <Section colorMode="dark" {...props}>
      <Text as="h2" mb="2" fontSize={{ base: "4xl", md: "5xl" }}>
        Ota yhteyttä
      </Text>
      <Flex
        as="a"
        href="https://www.instagram.com/tiitupaakkonen.art"
        target="_blank"
        rel="noreferrer"
        alignItems="bottom"
      >
        <Icon as={FiInstagram} w={7} h={7} mr="1" />
        <Text as="span" verticalAlign="middle">
          tiitupaakkonen.art
        </Text>
      </Flex>
    </Section>
  );
}

export default Footer;
