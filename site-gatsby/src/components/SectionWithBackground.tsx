import BackgroundImage, {
  IBackgroundImageProps,
} from "gatsby-background-image";
import { GatsbyImageProps, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { convertToBgImage } from "gbimage-bridge";
import Section, { SectionProps } from "./Section";

export type SectionWithBackgroundProps = SectionProps & {
  image: IGatsbyImageData;
  imgSrc: string;
};

function determineIfIsGatsbyImage(
  toBeDetermined: Partial<
    IBackgroundImageProps | IBackgroundImageProps[] | null
  >
): toBeDetermined is IBackgroundImageProps {
  if ((toBeDetermined as IBackgroundImageProps).fluid) {
    return true;
  }
  return false;
}

function SectionWithBackground({
  image,
  imgSrc,
  children,
  ...rest
}: SectionWithBackgroundProps) {
  const imageConverted = convertToBgImage(image) as IBackgroundImageProps;

  return imageConverted.fluid ? (
    <Section as="div" position="relative" isWide py={0} zIndex={100} {...rest}>
      <BackgroundImage
        fluid={imageConverted.fluid}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />
      {children}
    </Section>
  ) : (
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
      zIndex={100}
      {...rest}
    >
      {children}
    </Section>
  );
}

export default SectionWithBackground;
