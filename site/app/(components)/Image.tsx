import { BoxProps } from "@chakra-ui/react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { Box } from "../../components/chakra";

type ImageProps = NextImageProps & {
  containerProps?: BoxProps;
};

const Image = ({ containerProps, ...rest }: ImageProps) => {
  return (
    <Box position="relative" {...containerProps}>
      <NextImage {...rest} />
    </Box>
  );
};

export default Image;
