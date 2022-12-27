import { Text } from "../../components/chakra";
import { BoxProps, TextProps } from "@chakra-ui/react";
import SectionWithBackground from "./SectionWithBackground";

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
    <SectionWithBackground
      height={height}
      imgAlt={imgAlt || title}
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
};

export default HeaderSection;
