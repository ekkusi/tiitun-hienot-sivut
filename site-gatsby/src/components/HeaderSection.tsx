import { BoxProps } from "@chakra-ui/react";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { MotionText, MotionTextProps } from "./motion-chakra";
import SectionWithBackground from "./SectionWithBackground";

type HeaderSectionProps = BoxProps & {
  title: string;
  image: IGatsbyImageData;
  imgSrc: string;
  textElementProps?: MotionTextProps;
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
      <MotionText
        as="h2"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
        {...textElementProps}
      >
        {title}
      </MotionText>
    </SectionWithBackground>
  );
}

export default HeaderSection;
