import { Theme, useTheme } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import BaseGallery from "./BaseGallery";
import { SectionProps } from "./Section";

type ImageGalleryProps = SectionProps & {
  images: readonly Queries.SanityImageFragment[];
};

function ImageGallery({ images, ...rest }: ImageGalleryProps) {
  const { breakpoints } = useTheme() as Theme;
  const mapFunction = (image: Queries.SanityImageFragment) => (
    <GatsbyImage
      key={image.asset.url}
      image={image.asset.gatsbyImageData}
      className="next-image__auto-height"
      alt={image.asset.url}
      sizes={`(max-width: ${breakpoints.md}) 100vw,
                    (max-width: ${breakpoints.lg}) 50vw,
                    33vw
            `}
    />
  );
  return (
    <BaseGallery
      sources={images.map((it) => ({
        aspectRatio: it.asset.metadata.dimensions.aspectRatio,
        source: it,
      }))}
      mapFunction={mapFunction}
      {...rest}
    />
  );
}

export default ImageGallery;
