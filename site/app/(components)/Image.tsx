import { BoxProps } from "@chakra-ui/react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { Box } from "../../components/chakra";

type ImageProps = NextImageProps & {
  containerProps?: BoxProps;
};

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const makeBlurImage = (w = 400, h = 600) => {
  const str = shimmer(w, h);
  return typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
};

const Image = ({ containerProps, ...rest }: ImageProps) => {
  return (
    <Box position="relative" {...containerProps}>
      <NextImage
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${makeBlurImage()}`}
        {...rest}
      />
    </Box>
  );
};

export default Image;
