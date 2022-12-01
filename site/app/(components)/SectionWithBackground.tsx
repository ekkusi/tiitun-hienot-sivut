import { Box } from "../../components/chakra";
import Image, { ImageProps } from "next/image";
import { BoxProps } from "@chakra-ui/react";

type SectionWithBackgroundProps = BoxProps & {
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
    <Box position="relative" clipPath="inset(0)" {...rest}>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        objectFit="cover"
      >
        <Image src={imgSrc} alt={imgAlt} fill {...imageProps} />
      </Box>
      {children}
    </Box>
  );
};

export default SectionWithBackground;
