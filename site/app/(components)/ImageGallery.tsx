"use client";
import BaseGallery from "./BaseGallery";
import { SectionProps } from "./Section";
import { ImageWithDimensions } from "../../api/queries";
import { Theme, useTheme } from "@chakra-ui/react";
import Image from "next/image";

type ImageGalleryProps = SectionProps & {
  images: ImageWithDimensions[];
};

const ImageGallery = ({ images, ...rest }: ImageGalleryProps) => {
  const { breakpoints } = useTheme() as Theme;
  return (
    <BaseGallery
      sources={images.map((it) => ({
        dimensions: it.dimensions,
        source: it.url,
      }))}
      mapFunction={(url: string) => (
        <Image
          key={url}
          className="next-image__auto-height"
          src={url}
          alt={url}
          fill
          sizes={`(max-width: ${breakpoints.md}) 100vw,
                    (max-width: ${breakpoints.lg}) 50vw,
                    33vw
            `}
        />
      )}
      {...rest}
    />
  );
};

export default ImageGallery;
