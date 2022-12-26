import { Box, Text, Flex } from "../../components/chakra";
import { BoxProps, TextProps } from "@chakra-ui/react";
import SectionWithBackground, {
  SectionWithBackgroundProps,
} from "./SectionWithBackground";

type HeaderSectionProps = BoxProps & {
  title: string;
  imgSrc: string;
  textElementProps?: TextProps;
  imgAlt?: string;
};

const HeaderSection = ({
  title,
  imgAlt,
  imgSrc,
  height = { base: "100vh", md: "500px" },
  textElementProps,
  ...rest
}: HeaderSectionProps) => {
  return (
    // <Flex
    //   justifyContent="center"
    //   alignItems="center"
    //   height={height}
    //   position="relative"
    //   {...rest}
    // >
    //   <SectionWithBackground
    //     height={height}
    //     imgAlt={imgAlt || title}
    //     imgSrc={imgSrc}
    //   />
    //   <Text
    //     as="span"
    //     // position="absolute"
    //     // top="50%"
    //     // left="50%"
    //     // transform="translate(-50%, -50%)"
    //     fontSize="4xl"
    //     color="white"
    //     // objectFit="cover"
    //     // zIndex="100"
    //     {...textElementProps}
    //   >
    //     {title}
    //   </Text>
    // </Flex>
    <SectionWithBackground
      height={height}
      imgAlt={imgAlt || title}
      imgSrc={imgSrc}
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
};

export default HeaderSection;
