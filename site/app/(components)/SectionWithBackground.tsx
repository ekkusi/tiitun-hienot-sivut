import { Box } from "../../components/chakra";
import Image, { ImageProps } from "next/image";
import { BoxProps } from "@chakra-ui/react";
import Section, { SectionProps } from "./Section";

export type SectionWithBackgroundProps = SectionProps & {
  imgSrc: string;
  imgAlt: string;
  imageProps?: Omit<ImageProps, "src" | "alt">;
};

const SectionWithBackground = ({
  imgSrc,
  imgAlt,
  children,
  imageProps,
  ...rest
}: SectionWithBackgroundProps) => {
  return (
    // <Section
    //   as="div"
    //   position="relative"
    //   clipPath="inset(0)"
    //   isWide
    //   py={0}
    //   {...rest}
    // >
    //   <Box
    //     position="fixed"
    //     top="0"
    //     left="0"
    //     right="0"
    //     bottom="0"
    //     objectFit="cover"
    //   >
    //     <Image src={imgSrc} alt={imgAlt} fill {...imageProps} />
    //   </Box>
    //   {children}
    // </Section>
    <Section
      as="div"
      position="relative"
      isWide
      py={0}
      backgroundImage={imgSrc}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      {...rest}
    >
      {children}
    </Section>
  );
};

export default SectionWithBackground;
