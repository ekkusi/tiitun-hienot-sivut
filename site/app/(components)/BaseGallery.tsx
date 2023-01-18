"use client";

import { useTheme, Theme, useMediaQuery, BoxProps } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SanityImageDimensions } from "tiitu-cms/types/schema";
import Section, { SectionProps } from "./Section";
import { Box, Flex } from "../../components/chakra";
import { splitArray } from "../../utils/arrayUtils";

type Source<T> = {
  dimensions: SanityImageDimensions;
  source: T;
};

type BaseGalleryProps<T> = SectionProps & {
  sources: Source<T>[];
  mapFunction: (source: T) => React.ReactNode;
  spacingPixels?: number;
  imageContainerProps?: BoxProps;
};

type SourceCollection<T> = {
  widthPercentage: number;
  aspectRatioReciprocalSum: number;
  sources: Source<T>[];
};

const splitSources = <T extends unknown>(
  sources: Source<T>[],
  targetParts: number,
  windowWidth: number,
  spacingPixels: number
): SourceCollection<T>[] => {
  // let totalReciprocalAspectRatioSum = 0;
  const splittedSources = splitArray(sources, targetParts);
  const collections: SourceCollection<T>[] = [];

  let aspectRatioSum = 0;
  // Calculate sum of aspect ratios, per collection and total
  splittedSources.forEach((sourceCollection) => {
    let aspectRatioReciprocalSum = 0;
    sourceCollection.forEach((it) => {
      aspectRatioReciprocalSum += 1 / it.dimensions.aspectRatio;
      // totalReciprocalAspectRatioSum += 1 / it.dimensions.aspectRatio;
    });

    aspectRatioSum += 1 / aspectRatioReciprocalSum;

    collections.push({
      widthPercentage: 0, // This needs to get set later
      aspectRatioReciprocalSum,
      sources: sourceCollection,
    });
  });

  // Calculate column height
  const columnHeight =
    (windowWidth - spacingPixels * collections.length) / aspectRatioSum;

  // Calculate column width, scale to percentage
  collections.forEach((collection) => {
    collection.widthPercentage =
      columnHeight / collection.aspectRatioReciprocalSum / windowWidth;
  });

  return collections;
};

function BaseGallery<T>({
  sources: defaultSources,
  mapFunction,
  spacingPixels = 2,
  imageContainerProps,
  ...rest
}: BaseGalleryProps<T>) {
  const { breakpoints } = useTheme() as Theme;
  // ssr-friendly media query with fallback

  const [isLargerThanLg] = useMediaQuery(`(min-width: ${breakpoints.lg})`, {
    ssr: true,
    fallback: false,
  });
  const [isLargerThanMd] = useMediaQuery(`(min-width: ${breakpoints.md})`, {
    ssr: true,
    fallback: false,
  });
  const [sources, setSources] = useState<SourceCollection<T>[]>();

  useEffect(() => {
    if (typeof window === "undefined") return;
    let splittedSources = [
      {
        widthPercentage: 1.0,
        sources: defaultSources,
        aspectRatioReciprocalSum: 0,
      },
    ];

    const windowWidth = window.innerWidth;

    if (isLargerThanLg)
      splittedSources = splitSources(
        defaultSources,
        3,
        windowWidth,
        spacingPixels
      );
    else if (isLargerThanMd)
      splittedSources = splitSources(
        defaultSources,
        2,
        windowWidth,
        spacingPixels
      );

    setSources(splittedSources);
  }, [defaultSources, isLargerThanLg, isLargerThanMd, spacingPixels]);

  return (
    <Section isWide {...rest} py={0}>
      {sources && (
        <Flex flexDirection="row" width="100%" p={`${spacingPixels}px`} pr="0">
          {sources.map((collection, index) => (
            <Flex
              flexDirection="column"
              key={index}
              position="relative"
              width={`${collection.widthPercentage * 100}%`}
              mr={`${spacingPixels}px`}
            >
              {collection.sources.map((source, index) => (
                <Box
                  key={index}
                  position="relative"
                  _notLast={{ mb: `${spacingPixels}px` }}
                  {...imageContainerProps}
                >
                  {mapFunction(source.source)}
                </Box>
              ))}
            </Flex>
          ))}
        </Flex>
      )}
    </Section>
  );
}

export default BaseGallery;
