import Section, { SectionProps } from "./Section";

export type SectionWithBackgroundProps = SectionProps & {
  imgSrc: string;
  imgAlt: string;
};

const SectionWithBackground = ({
  imgSrc,
  children,
  ...rest
}: SectionWithBackgroundProps) => {
  return (
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
};

export default SectionWithBackground;
