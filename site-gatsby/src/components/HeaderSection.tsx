import { BoxProps, TextProps, Text } from "@chakra-ui/react";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import SectionWithBackground from "./SectionWithBackground";

type HeaderSectionProps = BoxProps & {
  title: string;
  image: IGatsbyImageData;
  imgSrc: string;
  textElementProps?: TextProps;
};

function HeaderSection({
  title,
  imgSrc,
  image,
  height = { base: "100vh", md: "500px" },
  textElementProps,
  ...rest
}: HeaderSectionProps) {
  return (
    <SectionWithBackground
      height={height}
      image={image}
      imgSrc={imgSrc}
      {...rest}
    >
      <Text
        as="h2"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
        {...textElementProps}
      >
        {title}
      </Text>
    </SectionWithBackground>
  );
}

export default HeaderSection;
